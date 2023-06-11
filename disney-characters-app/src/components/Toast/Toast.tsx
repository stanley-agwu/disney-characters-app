import React, { FC } from 'react';
import { Slide, ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast: FC<ToastContainerProps> = ({ ...props }): JSX.Element => (
  <ToastContainer {...props} transition={Slide} />
);

export default Toast;
