import React from 'react';
import Bitcoin from "../images/bitcoin.png";
import Tether from "../images/tether.png";
import Blockchain from "../images/blockchain.png";
import Book from "../images/book.png";

const Introduction = () => {
  return (
    <section className="flex flex-col items-center py-8 mb-32">
      <div className="flex items-start justify-between w-4/5">
        <div className="text-left">
          <h2 className="text-3xl font-bold">Kurse für den Einstieg</h2>
          <p className="mt-4">
            Hier kannst du dir in verschiedenen Bereichen mithilfe von Kursen Wissen über Kryptowährungen und Blockchain aneignen.
          </p>
        </div>
        <div>
          <img className="w-48 h-auto" src={Book} alt="Introduction" />
        </div>
      </div>
      <hr className="w-3/5 border-t-2 border-gray-400 my-8" />

      <h3 className="text-2xl font-bold text-left">Einführung in Kryptoassets</h3>

      <div className="grid grid-cols-3 gap-4 mt-8">

        <a href='/introblockchain'>
        <div className="rounded-lg bg-[#F6FFDE] p-4 border-2 border-gray-950 space-y-8 mr-8">
          <h4 className="text-lg font-bold text-center">Einführung zu Blockchain</h4>
          <div className="aspect-w-1 aspect-h-1 flex justify-center items-center">
            <img className="object-contain" src={Blockchain} alt="Blockchain" />
          </div>
          <p className="mt-2 text-center">15 min</p>
        </div>
        </a>

        <a href='/introduction'>
        <div className="rounded-lg bg-[#F6FFDE] p-4 border-2 border-gray-950 space-y-8 mr-4 ml-4">
          <h4 className="text-lg font-bold text-center">Einführung zu Bitcoin</h4>
          <div className="aspect-w-1 aspect-h-1 flex justify-center items-center">
            <img className="object-contain" src={Bitcoin} alt="Bitcoin" />
          </div>
          <p className="mt-2 text-center">15 min</p>
        </div>
        </a>


        <a href='/introduction'>
        <div className="rounded-lg bg-[#F6FFDE] p-4 border-2 border-gray-950 space-y-8 ml-8">
          <h4 className="text-lg font-bold text-center">Einführung zu Stablecoins</h4>
          <div className="aspect-w-1 aspect-h-1 flex justify-center items-center">
            <img className="object-contain" src={Tether} alt="Tether" />
          </div>
          <p className="mt-2 text-center">15 min</p>
        </div>
        </a>

      </div>
    </section>
  );
};

export default Introduction;
