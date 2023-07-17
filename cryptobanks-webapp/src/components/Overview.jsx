import React from 'react';
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <div id='glossar' className="max-w-screen-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Themenbereiche</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Einstieg</li>
        <li>Regulatorik</li>
        <li>Fallbeispiele</li>
        <li>Geschäftsmodelle</li>
        <li>Adaption in der Gesellschaft</li>
      </ul>

      <div className="flex items-center justify-center">
        <hr className="w-4/5 border-t-2 border-gray-400 my-8 mb-8" />
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Alle Artikel</h2>
      
      <ul className="list-disc pl-6">
        <li>
          <strong>Einstieg</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <Link className='hover:underline' to="/articles/introductioncryptoassets">Einführung in Kryptoassets</Link>
            </li>
            <li>
              <Link className='hover:underline'  to="/articles/introductionblockchain">Grundlagen der Blockchain-Technologie</Link>
            </li>
            <li>
              <Link className='hover:underline'  to="/articles/introductiontoken">Token</Link>
            </li>
            <li>
              <Link className='hover:underline'  to="/articles/introductiontrade">Handel mit Kryptowährungen</Link>
            </li>
          </ul>
        </li>
        <li>
          <strong>Regulatorik</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <Link to="/">Lorem Ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem Ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem Ipsum</Link>
            </li>
          </ul>
        </li>
        <li>
          <strong>Fallbeispiele</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <Link to="/">Lorem Ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem Ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem Ipsum</Link>
            </li>
          </ul>
        </li>
        <li>
          <strong>Geschäftsmodelle</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <Link to="/">Lorem Ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem Ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem Ipsum</Link>
            </li>
          </ul>
          
        </li>
        <li>
          <strong>Adaption in der Gesellschaft</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <Link to="/">Lorem Ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem Ipsum</Link>
            </li>
            <li>
              <Link to="/">Lorem Ipsum</Link>
            </li>
          </ul>
        </li>
      </ul>
      
      <div className="flex items-center justify-center">
        <hr className="w-4/5 border-t-2 border-gray-400 my-8 mb-16" />
      </div>
    </div>
  );
};

export default Overview;
