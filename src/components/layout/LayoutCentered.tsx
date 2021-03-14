import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const LayoutCentered: React.FC<Props & React.HTMLAttributes<any>> = ({
  children,
  ...props
}) => {
  return (
    <div className={`w-full max-w-xl self-center ${props.className}`}>
      {children}
    </div>
  );
};

export default LayoutCentered;
