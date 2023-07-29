import React from 'react';

const Section = () => {
  return (
    <div id='about' className="px-4 md:px-24 py-8">
      
        
          <h2 className="text-2xl font-bold mb-4 text-center">Über das Projekt</h2>
          <p className="text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        
        
      

      <div className="mt-10 md:mt-16 text-center">
        <a href="https://github.com/jansteinbacher/pjs_cryptobanks" className="inline-block bg-gray-800 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-700">
          📚 GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Section;
