import React from 'react';
import Crypto from "../images//cryptocurrencies.png";
import Regulation from "../images/regulation.png";
import BusinessModel from "../images/businessModel.png";

const Hero = () => {
  return (
    <div id='kurse' className="bg-white py-8">
      <div className="container mx-auto px-4">
            
          <h2 className='text-2xl text-bold text-center mb-4 font-bold'>Kurse</h2>
          <p className='text-xl text-center mb-4'>
            Hier findest du unsere vorgefertigten Kurse.
            </p>

        <div className="flex justify-between space-x-2 ">


          <div className="flex-1 flex items-center justify-center">
            <a href='/course-beginner'>
            <div className="bg-white p-4 rounded-lg hover:underline">
              <div className="rounded-full p-4">
                <h2 className="text-center text-2xl ">Kryptoassets und Kryptowährungen</h2>
              </div>
              <img src={Crypto} alt="Crypto" className="mt-4 mx-auto w-32 transform scale-100 hover:scale-110 transition-transform duration-300" />
       
            </div>
            <p className='text-center'>
              Eine informative Einführung in Kryptoassets und Kryptowährungen, die die vielversprechende Zukunft der digitalen Finanzwelt beleuchtet.
             </p>
            </a>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg">
            <div className="border-l border-gray-300 h-20 mx-8"></div>
            </div>
          </div>


          <div className="flex-1 flex items-center justify-center">
            <a href='/integrationoverview'>
            <div className="bg-white p-4 rounded-lg hover:underline">
              <div className="rounded-full p-4">
                <h2 className="text-center text-2xl">Adaptionsmöglichkeiten und Geschäftsmodelle</h2>
              </div>
              <img src={BusinessModel} alt="BusinessModel" className="mt-4 mx-auto w-32 transform scale-100 hover:scale-110 transition-transform duration-300" />
       
            </div>
            <p className='text-center'>
              Dieser Kurs beleuchtet die Adaptionsmöglichkeiten von Kryptoassets in einer traditionellen Bank und die daraus entstehenden Geschäftsmodelle.
             </p>
            </a>         
          </div>


          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg">
            <div className="border-l border-gray-300 h-20 mx-8"></div>
            </div>
          </div>


          <div className="flex-1 flex items-center justify-center">
            <a href='/integrationoverview'>
            <div className="bg-white p-4 rounded-lg hover:underline">
              <div className="rounded-full p-4">
                <h2 className="text-center text-2xl">Regulatorik und technologische Grundlagen</h2>
              </div>
              <img src={Regulation} alt="BusinessModel" className="mt-4 mx-auto w-32 transform scale-100 hover:scale-110 transition-transform duration-300" />
       
            </div>
            <p className='text-center'>
              Dieser Kurs gibt einen Überblick über die aktuelle Regulatorik mit Fokus auf Deutschland und stellt technologische Grundlagen dar.
            </p>
            </a>         
          </div>
          
        </div>
        <div className='flex items-center justify-center mt-12 mb-4'>
        <hr className="w-3/5 border-t-2 border-gray-400 my-8" />
        </div>
      </div>
      

    </div>






    
  );
};

export default Hero;
