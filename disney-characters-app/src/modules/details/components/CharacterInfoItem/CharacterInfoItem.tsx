import styles from './CharacterInfoItem.module.scss';

interface CharacterInfoProps {
  title: string;
  detailList: string[] | undefined;
}

const CharacterInfoItem = ({ title, detailList }: CharacterInfoProps) => {
  if (detailList && detailList?.length) {
    return (
      <div className={styles.characterInfoItem}>
        <div className={styles.titles}>{title}: </div>
        {detailList.map((detail) => (
          <div key={detail} className={styles.item}>
            {detail}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default CharacterInfoItem;
