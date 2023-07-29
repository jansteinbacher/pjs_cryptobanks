import React from 'react';
import TokenCheatSheet from '../../images/Token_PDF.pdf';

const IntroductionToken = () => {
  const handleDownloadCV = () => {
    window.open(TokenCheatSheet, '_blank');
  };

  return (
    <div className='mx-2 md:mx-20'>
      <h2 className="text-2xl font-bold mb-6">Token</h2>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies sapien eu justo facilisis, ut efficitur urna aliquet.
      </p>
      <p className="mb-4">
        Curabitur tristique, ligula eu cursus iaculis, neque lacus eleifend enim, a fermentum nibh leo sed nisi.
      </p>
      <p className="mb-4">
        Sed lacinia quam quis tincidunt malesuada. Aliquam erat volutpat. Phasellus at vulputate sem. Duis feugiat lacus in feugiat tempor.
      </p>

      {/* Download button */}
      <div className="mt-4 flex justify-center items-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-auto" onClick={handleDownloadCV}>
          Download Token Cheat Sheet
        </button>
      </div>
    </div>
  );
};

export default IntroductionToken;
