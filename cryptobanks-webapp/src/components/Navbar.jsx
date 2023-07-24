import React from "react";
import Crypto from "../images/crypto.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 mb-12">
      <a href="/">
        <div className="text-xl flex items-center">
          <img className="w-12 h-auto mr-4" src={Crypto} alt="Crypto" />
          <span>Cryptobanks - Dein Weg zum Krypto-Experte</span>
        </div>
      </a>
      <div className="flex items-center space-x-12 mr-12">
        <div className="relative hover:text-gray-800">
          <a href="/#kurse">
            <span className="hover-underline">Kurse</span>
          </a>
        </div>
        <div className="relative hover:text-gray-800">
          <a href="/#decisiontree">
            <span className="hover-underline">Individueller Lernplan</span>
          </a>
        </div>
        <div className="relative hover:text-gray-800">
          <a href="/#overview">
            <span className="hover-underline">Übersicht</span>
          </a>
        </div>
        <div className="relative hover:text-gray-800">
          <a href="/#about">
            <span className="hover-underline">Über das Projekt</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
