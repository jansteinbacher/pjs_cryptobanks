import React from 'react';
import { Link } from 'react-router-dom';
import Blockchain from "../images/blockchain.png";

const CourseBeginner = () => {
  return (
    <section className="flex flex-col items-center py-8 mb-20">
      <div className="flex items-start justify-between w-4/5">
        <div className="text-left">
          <h2 className="text-3xl font-bold">Kryptoassets und Kryptowährungen</h2>
          <p className='mt-4'>
              Eine informative Einführung in Kryptoassets und Kryptowährungen, die die vielversprechende Zukunft der digitalen Finanzwelt beleuchtet.
             </p>
        </div>
        <div>
          <img className="w-48 h-auto" src={Blockchain} alt="Blockchain" />
        </div>
      </div>
      
      <h3 className='text-bold text-2xl mt-8'>Artikelübersicht</h3>

          <ul className="list-disc pl-6 mt-2">
            <li className='hover:underline'>
              <Link to="/">Einführung in Kryptoassets</Link>
            </li>
            <li className='hover:underline'>
              <Link to="/">Grundlagen der Blockchain-Technologie</Link>
            </li>
            <li className='hover:underline'>
              <Link to="/">Token</Link>
            </li>
            <li className='hover:underline'>
              <Link to="/">Handel mit Kryptowährungen</Link>
            </li>
          </ul>

          <Link
          to="/course-beginner-article"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12"
          >
            Start
          </Link>



    </section>
  );
};

export default CourseBeginner;
