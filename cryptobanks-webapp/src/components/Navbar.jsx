import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  p-4 mb-12">
      <div className="text-xl">Logo</div>
      <div className="flex items-center space-x-12 mr-12">
        <div className="hover:text-gray-800 hover:underline">About</div>
        <div className="hover:text-gray-800 hover:underline">Einstieg</div>
        <div className="hover:text-gray-800 hover:underline">Anwendung, Geschäftsmodelle &amp; Fallstudien</div>
      </div>
    </nav>
  );
};

export default Navbar;
