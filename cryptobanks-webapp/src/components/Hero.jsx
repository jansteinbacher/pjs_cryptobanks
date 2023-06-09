import React from 'react';
import Book from "../images/book.png";
import BusinessModel from "../images/businessModel.png";

const Hero = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between space-x-2 ">
          <div className="flex-1 flex items-center justify-center">
            <a href='/introduction'>
            <div className="bg-white p-4 rounded-lg hover:underline">
              <div className="rounded-full bg-gray-100 p-4">
                <h2 className="text-center text-3xl ">Einstieg</h2>
              </div>
              <img src={Book} alt="Book" className="mt-4 mx-auto w-32 transform scale-100 hover:scale-110 transition-transform duration-300" />
       
            </div>
            </a>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg">
            <div className="border-l border-gray-300 h-20 mx-8"></div>
            </div>
          </div>


          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg hover:underline">
            <div className="rounded-full bg-gray-100 p-4">
            <h2 className="text-center text-3xl">Anwendung, Geschäftsmodelle &amp; Fallstudien</h2>
          </div>
          <img src={BusinessModel} alt="BusinessModel" className="mt-4 mx-auto w-32 transform scale-100 hover:scale-110 transition-transform duration-300" />
       
            </div>

            
          </div>
          
        </div>
        <div className='flex items-center justify-center mt-12 mb-20'>
        <hr className="w-3/5 border-t-2 border-gray-400 my-8" />
        </div>
      </div>
      

    </div>






    
  );
};

export default Hero;
