import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Your Heading Here
            </h2>
          </div>
          <div className="border-t border-gray-300 pt-8 mt-8 lg:mt-0">
            <p className="text-base text-gray-700">
              Your text goes here. It can be a description or any other content you want to display.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
