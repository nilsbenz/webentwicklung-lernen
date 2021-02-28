import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '../typography/Typography';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 px-4 md:px-8 py-8 mt-16 md:mt-32 flex justify-between">
      <p className="text-white text-sm">© 2021 nilsbenz.ch</p>
      <Link to="/impressum">
        <p className="text-white text-sm">Impressum</p>
      </Link>
    </footer>
  );
};

export default Footer;
