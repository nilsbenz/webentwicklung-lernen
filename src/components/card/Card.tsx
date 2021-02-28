import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '../typography/Typography';

interface Props {
  primary: string;
  secondary: string;
  href?: string;
}

const Card: React.FC<Props & React.HTMLAttributes<any>> = ({
  primary,
  secondary,
  href,
  ...props
}) => {
  const CardBase = (
    <div
      {...props}
      className={`${props.className} p-8 rounded-3xl bg-gray-100 cursor-pointer shadow-md hover:shadow-xl focus:shadow-xl transition-shadow duration-300`}
    >
      <Typography variant="subtitle" className="mb-2">
        {primary}
      </Typography>
      <Typography variant="body-secondary">{secondary}</Typography>
    </div>
  );

  return href ? <Link to={href}>{CardBase}</Link> : CardBase;
};

export default Card;
