import { Fallback, Image, Root } from '@radix-ui/react-avatar';

import { avatarFallback } from 'modules/dashboard/utils/disneyCharactersUtils';

import styles from './Avatar.module.scss';

interface AvatarProps {
  name: string;
  image: string;
}

const Avatar = ({ name, image }: AvatarProps) => {
  return (
    <Root className={styles.avatarRoot}>
      <Image className={styles.avatarImage} src={image} alt={name} />
      <Fallback className={styles.avatarFallback} delayMs={600}>
        {avatarFallback(name)}
      </Fallback>
    </Root>
  );
};

export default Avatar;
