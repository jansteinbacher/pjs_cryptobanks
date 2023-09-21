import React, { useState } from "react";
import Blockchain from "../../../images/courseBeginner/blockchain.png";

const Sources = ({ sources }) => {
  const [showSources, setShowSources] = useState(false);

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  return (
    <div className="sources border border-gray-400 rounded p-4">
      <button
        className="text-lg font-semibold"
        id="sources"
        onClick={toggleSources}
      >
        Quellen:
      </button>
      {showSources && (
        <div className="source-list leading-relaxed mt-4">
          <ul>
            {sources.map((source, index) => (
              <li id={index + 1} key={index}>
                [{index + 1}] {source}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const IntroductionBlockchainPart1 = () => {
  const articlesources = [
    "Ray, S. 2018.The Difference Between Blockchains & Distributed Ledger Technology. in: Towards Data Science. https://towardsdatascience.com/the-difference-between-blockchains-distributed-ledger-technology-42715a0fa92. [abgerufen am 24.08.2023].",
    "Sunyaev, A. und Sunyaev, A. 2020. Distributed ledger technology. Internet computing: Principles of distributed systems and emerging internet-based technologies, S. 265-299.",
    "Nakamoto, S. 2008. A peer-to-peer electronic cash system. https://bitcoin.org/bitcoin.pdf. [abgerufen am 24.08.2023].",
    "Bundesamt für Sicherheit in der Informationstechnik. 2023. Blockchain macht Daten praktisch unveränderbar. https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html. [abgerufen am 24.08.2023].]",
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Blockchain-Technologie
      </h1>

      <ul className="mb-12 list-disc ml-4">
        <li>Funktionsweise (Konsens, PoS, PoW)</li>
        <li>Abgrenzung zur Distributed-Ledger-Technology</li>
        <li>Anwendungsbereiche (Historie etc.)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Funktionsweise
      </h2>
      <div className="p-4 mb-8 bg-green-200 rounded-lg">
        <p className=" italic text-justify">
          Bernd hat in den letzten Wochen viel über Kryptoassets und Token
          gelernt, aber er hat immer noch viele Fragen zur zugrundeliegenden
          Technologie. Er weiß, dass die Blockchain eine entscheidende Rolle in
          diesem Bereich spielt, versteht jedoch nicht wirklich, wie sie
          funktioniert. Um sein Wissen zu vertiefen, trifft er sich gerade mit
          seinem Kollegen Tobias, der in seiner Hochschulzeit viel zu der
          Blockchain-Technologie geforscht hat.
        </p>
      </div>
      <p className="mb-8">
        Die Blockchain-Technologie stellt eine der grundlegenden Säulen hinter
        Kryptoassets dar. Sie ermöglicht es, Transaktionen in Kryptowährungen
        und anderen Anwendungen in einer vertrauenswürdigen und transparenten
        Weise abzuwickeln, ohne dass eine zentrale Behörde oder Institution
        benötigt wird. Die Essenz der Blockchain besteht darin, eine dezentrale
        und verteilte digitale Datenbank zu schaffen, die Informationen in
        Blöcken speichert und diese Blöcke in einer chronologischen Reihenfolge
        miteinander verknüpft, wodurch eine unveränderliche Kette entsteht.
      </p>

      <p className="font-semibold text-gray-600 mb-4">
        Herausstellungsmerkmale der Blockchain-Technologie:
      </p>

      <ul className="mb-8 list-disc ml-4">
        <li>Unveränderliche Daten</li>
        <li>Für alle Nutzer transparente und nachvollziehbare Transaktionen</li>
        <li>
          Verteilte (und keine zentrale) sowie konsensuale Datenspeicherung
        </li>
        <li>Verzicht auf Mittelsmänner</li>
      </ul>

      <div className="flex justify-center items-center">
        <img
          src={Blockchain}
          alt="Blockchain"
          className="w-full md:w-1/2 mb-4"
        />
      </div>

      <Sources sources={articlesources} />
    </div>
  );
};

export default IntroductionBlockchainPart1;
