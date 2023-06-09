import React from 'react';
import Information from '../images/information.png';
import Github from '../images/github.png';

const Section = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-3/4 ml-32 mr-20">
          <h2 className="text-2xl font-bold">About the project</h2>
          <p className="mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="w-1/4">
          <img src={Information} alt="Project" className="w-3/12" />
        </div>
      </div>

      <div className="mt-20 flex justify-center mb-32">
        <a href="https://github.com/jansteinbacher/pjs_cryptobanks">
          <img src={Github} alt="Github" className="mx-auto w-1/6" />
        </a>
      </div>
    </div>
  );
};

export default Section;
