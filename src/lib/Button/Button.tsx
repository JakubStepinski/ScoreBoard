import { HTMLAttributes } from 'react';
import './button.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'warning' | 'danger';
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'default',
  children,
  ...props
}: ButtonProps) => {

  return (
    <button
      type="button"
      className={`score-board-button score-board-button-${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};
