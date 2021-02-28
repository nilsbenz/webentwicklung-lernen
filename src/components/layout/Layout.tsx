import React from 'react';

interface Props {
  maxWidth?: 'sm' | 'md' | 'lg';
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<Props> = ({ maxWidth = 'lg', children }) => {
  let maxWidthClassName;

  switch (maxWidth) {
    case 'sm':
      maxWidthClassName = 'max-w-5xl';
      break;
    case 'md':
      maxWidthClassName = 'max-w-6xl';
      break;
    case 'lg':
      maxWidthClassName = 'max-w-7xl';
      break;
  }

  return (
    <main className={`flex flex-col mx-auto px-4 md:px-8 ${maxWidthClassName}`}>
      {children}
    </main>
  );
};

export default Layout;
