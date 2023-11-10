import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import './Input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, disabled, onChange, ...props }, ref) => {
    return (
      <div className={classNames('inputWrapper', { disabled })}>
        {label && (
          <label className="inputLabel" htmlFor={name}>
            {label}
          </label>
        )}
        <input ref={ref} className="input" aria-label={name} onChange={onChange} {...props} />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
