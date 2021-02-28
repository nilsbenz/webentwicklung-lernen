import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const LayoutCentered: React.FC<Props> = ({ children }) => {
  return <div className="w-full max-w-xl self-center">{children}</div>;
};

export default LayoutCentered;
