import React from 'react';

interface Props {
  wrap?: boolean;
  children: any;
}

const Code: React.FC<Props> = ({ wrap = false, children }) => {
  return (
    <span
      className={`font-mono text-sm bg-gray-200 px-1 py-0.5 rounded ${
        !wrap && 'whitespace-nowrap'
      }`}
    >
      {children}
    </span>
  );
};

export default Code;
