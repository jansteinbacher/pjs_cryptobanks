import React from 'react';

const IntegrationOverview = () => {
  return (
    <div className="bg-white py-8 2xl:px-32 xl:px-32 sm:px-8 md:px-16 lg:px-16 mb-32">
      <div className="flex items-start w-4/5">
        <div className="text-left">
          <h2 className="text-3xl font-bold">Informationen für Institutionen</h2>
          <p className="mt-4">
          In diesem Bereich finden Sie Informationen rund um die Integration und den Einsatz von Kryptoassets im Bankensystem.
Die Artikel sind in verschiedene Bereiche unterteilt und enthalten Wissenswertes
aus der Literatur, Umfragen, Experteninterviews und Webrecherche.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
      <hr className="w-3/6 border-t-2 border-gray-400 my-16" />
      </div>
      
      <h3 className="text-2xl text-left">Regulatorik</h3>

      <div className="grid grid-cols-3 gap-4 mt-12">

        <a href='/mica'>
        <div className="rounded-lg bg-[#F6FFDE] p-4 border-2 border-gray-950 space-y-8 mr-8">
          <h4 className="text-lg font-bold text-center">MiCA</h4>
        </div>
        </a>

        <a href='/'>
        <div className="rounded-lg bg-[#F6FFDE] p-4 border-2 border-gray-950 space-y-8 mr-4 ml-4">
          <h4 className="text-lg font-bold text-center">BaFin</h4>
          
        </div>
        </a>


        <a href='/introduction'>
        <div className="rounded-lg bg-[#F6FFDE] p-4 border-2 border-gray-950 space-y-8 ml-8">
          <h4 className="text-lg font-bold text-center">Deutsche Gesetzgebung</h4>
          
        </div>
        </a>

      </div>

      <div className="flex justify-center">
      <hr className="w-3/6 border-t-2 border-gray-400 my-16" />
      </div>

      <h3 className="text-2xl text-left">Technische Anforderungen</h3>

      <div className="grid grid-cols-3 gap-4 mt-12">

        <a href='/'>
        <div className="rounded-lg bg-[#F6FFDE] p-4 border-2 border-gray-950 space-y-8 mr-8">
          <h4 className="text-lg font-bold text-center">...</h4>
        </div>
        </a>

        <a href='/introduction'>
        <div className="rounded-lg bg-[#F6FFDE] p-4 border-2 border-gray-950 space-y-8 mr-4 ml-4">
          <h4 className="text-lg font-bold text-center">...</h4>
          
        </div>
        </a>


        <a href='/'>
        <div className="rounded-lg bg-[#F6FFDE] p-4 border-2 border-gray-950 space-y-8 ml-8">
          <h4 className="text-lg font-bold text-center">...</h4>
          
        </div>
        </a>

      </div>

      <div className="flex justify-center">
      <hr className="w-3/6 border-t-2 border-gray-400 my-16" />
      </div>

      <h3 className="text-2xl text-left">Adaption in der Gesellschaft</h3>

      <div className="grid grid-cols-3 gap-4 mt-12">

        <a href='/'>
        <div className="rounded-lg bg-[#F6FFDE] p-4 border-2 border-gray-950 space-y-8 mr-8">
          <h4 className="text-lg font-bold text-center">Studie</h4>
        </div>
        </a>

        <a href='/'>
        <div className="rounded-lg bg-[#F6FFDE] p-4 border-2 border-gray-950 space-y-8 mr-4 ml-4">
          <h4 className="text-lg font-bold text-center">...</h4>
          
        </div>
        </a>


        <a href='/'>
        <div className="rounded-lg bg-[#F6FFDE] p-4 border-2 border-gray-950 space-y-8 ml-8">
          <h4 className="text-lg font-bold text-center">...</h4>
          
        </div>
        </a>

      </div>
    </div>
  );
};

export default IntegrationOverview;