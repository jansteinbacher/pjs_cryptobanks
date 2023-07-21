import React from 'react';
import BitcoinNetwork from "../../images/bitcoinnetwork.mp4";

const IntroductionCryptoAssets = () => {
  return (
    <div className='ml-20 mr-20'>
      <h2 className="text-2xl font-bold mb-12">Einführung in Kryptoassets</h2>
      <div className="flex items-center justify-center mb-6">
          <video autoPlay loop muted className="w-2/3">
            <source
              src={BitcoinNetwork} // Replace "your-video-source.mp4" with the URL of your video file
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          </div>


      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies sapien eu justo facilisis, ut efficitur urna aliquet.</p>
      <p>Curabitur tristique, ligula eu cursus iaculis, neque lacus eleifend enim, a fermentum nibh leo sed nisi.</p>
      <p>Sed lacinia quam quis tincidunt malesuada. Aliquam erat volutpat. Phasellus at vulputate sem. Duis feugiat lacus in feugiat tempor.</p>
    </div>
  );
};

export default IntroductionCryptoAssets;
