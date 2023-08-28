import { FunctionComponent, RefObject } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { isNonEmptyObject } from 'common/api/store/common';
import { Character, FilterOptions } from 'common/types';
import Avatar from 'modules/dashboard/components/Avatar/Avatar';
import Pagination from 'modules/dashboard/components/Pagination/Pagination';

import styles from './Table.module.scss';

const columnHelper = createColumnHelper<Character>();

const columns = [
  columnHelper.accessor((row) => row._id, {
    id: '_id',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>ID</span>,
  }),
  columnHelper.accessor((row) => row.imageUrl, {
    id: 'imageUrl',
    cell: (info) => (
      <i>
        <Avatar name={info.row.original.name} image={info.getValue()} />
      </i>
    ),
    header: () => <span>Avatar</span>,
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
  columnHelper.accessor((row) => row.updatedAt, {
    id: 'updatedAt',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Date updated</span>,
  }),
  columnHelper.accessor((row) => row.tvShows[0], {
    id: 'tvShows',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>A TV Show Featured</span>,
  }),
];

export interface TableProps {
  characters: Character[];
  filters: FilterOptions;
  paginationRef: RefObject<HTMLDivElement>;
}

const Table: FunctionComponent<TableProps> = ({ characters, filters, paginationRef }) => {
  const table = useReactTable({
    data: characters,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const navigate = useNavigate();

  const getCharacterDetails = (row: { original: Character }) => {
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
      {isNonEmptyObject(filters) && (
        <div className={styles.paginationWrapper}>
          <Pagination options={filters} paginationRef={paginationRef} />
        </div>
      )}
    </div>
  );
};

export default Table;
