import Loader, { LoaderProps } from './Loader';

import styles from './PageLoader.module.scss';

interface PageLoaderProps extends LoaderProps {
  containerClassName?: string;
}

const PageLoader = ({ containerClassName, ...defaultProps }: PageLoaderProps) => (
  <div className={`${styles.pageLoader} ${containerClassName || ''}`}>
    <Loader {...defaultProps} />
  </div>
);

export default PageLoader;
