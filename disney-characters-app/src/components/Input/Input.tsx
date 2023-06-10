import { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Input.scss';

interface InputProps {
  label?: string;
  name?: string;
  error?: string;
  success?: string;
  warning?: string;
  disabled?: boolean;
}

const Input: FunctionComponent<InputProps> = ({
  label,
  name,
  error,
  success,
  warning,
  disabled,
}) => (
  <div className={classNames('inputWrapper', { disabled })}>
    {label && (
      <label className="inputLabel" htmlFor={name}>
        {label}
      </label>
    )}
    <input
      className={classNames('input', {
        'input-error': error,
        'input-success': success,
        'input-warning': warning,
      })}
      aria-label={name}
    />
    {error && <div className="inputTextError">{error}</div>}
    {success && <div className="inputTextSuccess">{success}</div>}
    {warning && <div className="inputTextWarning">{warning}</div>}
  </div>
);

export default Input;