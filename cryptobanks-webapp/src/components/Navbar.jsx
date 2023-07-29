import React, { useState } from "react";
import Crypto from "../images/crypto.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-4 mb-12">
      <div className="flex items-center">
        <a href="/" className="mb-4 sm:mb-0">
          <div className="text-xl flex items-center">
            <img className="w-12 h-auto mr-4" src={Crypto} alt="Crypto" />
            <span className="text-center">Cryptobanks - Dein Weg zum Krypto-Experten</span>
          </div>
        </a>
      </div>

      {/* Navigation items for laptops */}
      <div className="hidden sm:flex flex-col mt-4 sm:flex-row sm:mt-0 sm:space-x-12">
        <a href="/#kurse">
          <span className="hover-underline text-center border-b border-transparent hover:border-blue-500">Kurse</span>
        </a>
        <a href="/#decisiontree">
          <span className="hover-underline text-center border-b border-transparent hover:border-blue-500">Individueller Lernplan</span>
        </a>
        <a href="/#overview">
          <span className="hover-underline text-center border-b border-transparent hover:border-blue-500">Übersicht</span>
        </a>
        <a href="/#about">
          <span className="hover-underline text-center border-b border-transparent hover:border-blue-500">Über das Projekt</span>
        </a>
      </div>


      {/* Button for mobile devices */}
      <div className="sm:hidden flex items-center">
        <button
          className="block focus:outline-none"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Navigation items for smartphones */}
      {isMenuOpen && (
        <div className="flex flex-col mt-4 sm:hidden">
          <a href="/#kurse">
            <span className="hover-underline text-center">Kurse</span>
          </a>
          <a href="/#decisiontree">
            <span className="hover-underline text-center">Individueller Lernplan</span>
          </a>
          <a href="/#overview">
            <span className="hover-underline text-center">Übersicht</span>
          </a>
          <a href="/#about">
            <span className="hover-underline text-center">Über das Projekt</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
