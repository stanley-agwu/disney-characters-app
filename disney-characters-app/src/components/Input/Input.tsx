import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

import './Input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  error?: string;
  success?: string;
  warning?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, error, success, warning, disabled, onChange, ...props }, ref) => {
    return (
      <div className={classNames('inputWrapper', { disabled })}>
        {label && (
          <label className="inputLabel" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={classNames('input', {
            'input-error': error,
            'input-success': success,
            'input-warning': warning,
          })}
          aria-label={name}
          onChange={onChange}
          {...props}
        />
        {error && <div className="inputTextError">{error}</div>}
        {success && <div className="inputTextSuccess">{success}</div>}
        {warning && <div className="inputTextWarning">{warning}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
