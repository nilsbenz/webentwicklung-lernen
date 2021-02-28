import React from 'react';
import Button from '../button/Button';

interface Props {
  children: string;
}

const Footer: React.FC<Props> = ({ children }) => {
  return (
    <header className="bg-gray-900 px-4 md:px-8 py-4 mb-16 md:mb-24 flex justify-between items-center">
      <h1 className="text-white text-xl sm:text-3xl">{children}</h1>
      <Button variant="contained" color="primary" href="/">
        Zur Startseite
      </Button>
    </header>
  );
};

export default Footer;
