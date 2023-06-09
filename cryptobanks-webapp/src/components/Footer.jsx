import React from 'react';
import Crypto from '../images/crypto.png';

const Footer = () => {
  return (
    <footer className="bg-emerald-100 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
      <a href='/'>
        <div className="text-xl flex items-center">
          <img className="w-12 h-auto mr-4" src={Crypto} alt="Crypto" />
          <span>Cryptobanks</span>
        </div>
      </a>
        <a href='/'>
        <div className="">
          Home
        </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
