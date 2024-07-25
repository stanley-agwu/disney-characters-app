import { Fallback, Image, Root } from '@radix-ui/react-avatar';

import { avatarFallback } from 'modules/dashboard/utils/disneyCharactersUtils';

import defaultImg from './image.jpg';

import styles from './Avatar.module.scss';

interface AvatarProps {
  name: string;
  image: string;
}

const Avatar = ({ name, image }: AvatarProps) => {
  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultImg;
  };

  return (
    <Root className={styles.avatarRoot}>
      <Image
        className={styles.avatarImage}
        src={image || defaultImg}
        alt={name}
        onError={onImageError}
      />
      <Fallback className={styles.avatarFallback} delayMs={600}>
        {avatarFallback(name)}
      </Fallback>
    </Root>
  );
};

export default Avatar;
