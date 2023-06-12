import { Fragment, FunctionComponent } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import styles from './Table.module.scss';
import { Character } from '../../types';

const columnHelper = createColumnHelper<Character>();

const columns = [
  columnHelper.accessor((row) => row._id, {
    id: '_id',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>ID</span>,
  }),
  columnHelper.accessor((row) => row.name, {
    id: 'name',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor((row) => row.createdAt, {
    id: 'createdAt',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Date created</span>,
  }),
  columnHelper.accessor((row) => row.tvShows[0], {
    id: 'tvShows',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>A TV Show Featured</span>,
  }),
  columnHelper.accessor((row) => row.enemies[0], {
    id: 'enemies',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>An Enemy</span>,
  }),
];

export type TableProps = {
  characters: Character[];
};

const Table: FunctionComponent<TableProps> = ({ characters }) => {
  const table = useReactTable({
    data: characters,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getCharacterDetails = (row: any) => {
    const url = `/character/${row.original._id}`;
    navigate(url);
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className={styles.headerRow} key={headerGroup.id}>
              {headerGroup.headers?.map((header) => (
                <th key={header?.id}>
                  {flexRender(header.column.columnDef?.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr className={styles.bodyRow} key={row.id} onClick={() => getCharacterDetails(row)}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
