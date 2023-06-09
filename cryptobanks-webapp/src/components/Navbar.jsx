import React from 'react';


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 mb-12">
      <a href='/'><div className="text-xl">Cryptobanks</div></a>
      <div className="flex items-center space-x-12 mr-12">
        <div className="relative hover:text-gray-800">
          <a href='/'><span className="hover-underline">About</span></a>
        </div>
        <div className="relative hover:text-gray-800">
          <a href='/introduction'><span className="hover-underline">Einstieg</span></a>
        </div>
        <div className="relative hover:text-gray-800">
          <span className="hover-underline">Anwendung, Geschäftsmodelle &amp; Fallstudien</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
