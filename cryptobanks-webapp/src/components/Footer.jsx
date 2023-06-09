import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white">Cryptobanks</span>
        </div>
        <a href='/'>
        <div className="text-gray-300">
          Home
        </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
