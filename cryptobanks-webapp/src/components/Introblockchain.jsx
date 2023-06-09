import React from 'react';
import Blockchain from "../images/blockchain.png";

const Introblockchain = () => {
  return (
    <section className="flex flex-col items-center py-8 mb-32">
      <div className="flex items-start justify-between w-4/5">
        <div className="text-left">
          <h2 className="text-3xl font-bold">Einführung zu Blockchain</h2>
          <p className="mt-4">
            In diesem Kurs bekommst du eine Einführung in das Thema Blockchain. Dazu gibt es einen Artikel und ein Video. Danach kannst Du dein Wissen in einem Quiz testen.
          </p>
        </div>
        <div>
          <img className="w-48 h-auto" src={Blockchain} alt="Blockchain" />
        </div>
      </div>
      <hr className="w-3/5 border-t-2 border-gray-400 my-8 mt-20 mb-20" />

      <div className="grid grid-cols-3 gap-4 justify-center">

        <div className="bg-[#F6FFDE] border-2 border-gray-950 w-24 h-24 rounded-full flex items-center justify-center mr-20">
          <div className="text-sm">Artikel</div>
        </div>
        <div className="bg-[#F6FFDE] border-2 border-gray-950 w-24 h-24 rounded-full flex items-center justify-center mr-10 ml-10">
          <div className="text-sm">Video</div>
        </div>
        <div className="bg-[#F6FFDE] border-2 border-gray-950 w-24 h-24 rounded-full flex items-center justify-center ml-20">
          <div className="text-sm">Quiz</div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <a href='/introduction'><button className="bg-emerald-700 text-white border-2 border-slate-200 text-white py-2 px-4 rounded-lg text-lg mr-10"> &#8592; Übersicht</button></a>
        <button className="bg-emerald-200 border-2 border-slate-200  py-2 px-4 rounded-lg text-lg ml-10">Start &#8594;</button>
      </div>
    </section>
  );
};

export default Introblockchain;
