import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import classNames from 'classnames';

import { ButtonLayout, ButtonSize, ButtonTheme, IconAlignment } from './enums';

import './Button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  size?: ButtonSize;
  theme?: ButtonTheme;
  layout?: ButtonLayout;
  icon?: ReactNode;
  iconAlignment?: IconAlignment;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      theme,
      iconAlignment,
      layout,
      icon,
      disabled,
      className,
      children,
      ...props
    }: ButtonProps,
    ref
  ) => (
    <button
      {...props}
      ref={ref}
      disabled={disabled}
      className={classNames(
        className,
        't-button',
        `t-button--${size || ButtonSize.default}`,
        `t-button--${layout || ButtonLayout.fixed}`,
        `t-button--${theme || ButtonTheme.primary}`,
        { 't-button--disabled': disabled },
        iconAlignment === IconAlignment.right ? `t-button--${IconAlignment.right}` : ''
      )}
    >
      {icon && <div className="t-button--icon">{icon}</div>}
      {children}
    </button>
  )
);

Button.displayName = 'Button';
