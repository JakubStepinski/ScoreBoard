import { HTMLAttributes } from 'react';
import './button.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'warning' | 'danger';
  onClick?: () => void;
  disabled?: boolean;
}

/** Primary UI component for user interaction */
export const Button = ({
  children,
  className,
  variant = 'default',
  ...props
}: ButtonProps) => {

  return (
    <button
      type="button"
      className={`score-board-button score-board-button-${variant} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
