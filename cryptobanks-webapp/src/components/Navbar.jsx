import React from 'react';


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 mb-12">
      <div className="text-xl">Logo</div>
      <div className="flex items-center space-x-12 mr-12">
        <div className="relative hover:text-gray-800">
          <span className="hover-underline">About</span>
        </div>
        <div className="relative hover:text-gray-800">
          <span className="hover-underline">Einstieg</span>
        </div>
        <div className="relative hover:text-gray-800">
          <span className="hover-underline">Anwendung, Geschäftsmodelle &amp; Fallstudien</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
