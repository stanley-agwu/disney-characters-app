import Lottie from 'lottie-react';
import animationData from './AnimationData/animationData.json';

export interface LoaderProps {
  width?: number;
  className?: string;
  height?: number;
}

const Loader = ({ width = 80, height = 80, className, ...props }: LoaderProps): JSX.Element => {
  const defaultOptions = {
    ...props,
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div
      role="botton"
      tabIndex={0}
      aria-label="animation"
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        overflow: 'hidden',
        margin: 'auto',
        outline: 'none',
      }}
    >
      <Lottie {...defaultOptions} />
    </div>
  );
};

export default Loader;
