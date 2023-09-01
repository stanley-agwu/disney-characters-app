import { ElementType, FC } from 'react';

import { Character } from 'common/types';
import { CharacterEnum } from 'modules/details/utils/characterEnum';

interface CharacterInfoMapProps {
  detailsMap: {
    key: CharacterEnum;
    title: string;
  }[];
  character: Character | null;
  Component: ElementType;
}

const CharacterInfoMap: FC<CharacterInfoMapProps> = ({
  detailsMap,
  character,
  Component,
}: CharacterInfoMapProps) => (
  <>
    {detailsMap.map((item) => {
      const props = { detailList: character?.[item.key], title: item.title };
      return <Component key={item.key} {...props} />;
    })}
  </>
);

export default CharacterInfoMap;
