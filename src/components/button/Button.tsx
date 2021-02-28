import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface Props {
  href?: string;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'default' | 'inherit';
  children: JSX.Element | string;
}

const Button: React.FC<Props & React.HTMLAttributes<any>> = ({
  href,
  variant = 'text',
  color = 'default',
  children,
  ...props
}) => {
  const ButtonBase = (
    <button className={styles[`${variant}-${color}`]} {...props}>
      {children}
    </button>
  );

  return href ? <Link to={href}>{ButtonBase}</Link> : ButtonBase;
};

export default Button;
