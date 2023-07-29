import { FC } from 'react';
import { toast, ToastOptions } from 'react-toastify';

import { ReactComponent as ErrorIcon } from '../assets/error-icon.svg';

import '../Toast.scss';

const coloredTheme: ToastOptions = {
  theme: 'colored',
};

const IconWrapper: FC<React.ReactNode> = (children): JSX.Element => (
  <div className="icon-wrapper">{children}</div>
);

const getContent = (title?: string, body?: string | JSX.Element) => {
  return (
    <div>
      {title && <div className="title">{title}</div>}
      {body && <div className="body">{body}</div>}
    </div>
  );
};

export const showError = (title: string, body: string, config: ToastOptions = {}) => {
  const content = getContent(title, body);
  toast.error(content, {
    ...coloredTheme,
    icon: IconWrapper(<ErrorIcon className="image-icon error" />),
    bodyClassName: 'toastbody',
    ...config,
  });
};
