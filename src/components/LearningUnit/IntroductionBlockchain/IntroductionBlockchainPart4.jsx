import React, { useState } from 'react';
import dltvideo from '../../../images/courseBeginner/DLT.mp4';
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

const IntroductionBlockchainPart3 = () => {
  const articlesources = [
    'Ray, S. 2018.The Difference Between Blockchains & Distributed Ledger Technology. in: Towards Data Science. https://towardsdatascience.com/the-difference-between-blockchains-distributed-ledger-technology-42715a0fa92. [abgerufen am 24.08.2023].',
    'Sunyaev, A. und Sunyaev, A. 2020. Distributed ledger technology. Internet computing: Principles of distributed systems and emerging internet-based technologies, S. 265-299.',
    'Nakamoto, S. 2008. A peer-to-peer electronic cash system. https://bitcoin.org/bitcoin.pdf. [abgerufen am 24.08.2023].',
    'Bundesamt für Sicherheit in der Informationstechnik. 2023. Blockchain macht Daten praktisch unveränderbar. https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html. [abgerufen am 24.08.2023].]',
  ];

  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course'
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Abgrenzung zur Distributed-Ledger-Technologie
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className="italic text-justify">
            Während seiner Recherche zu Blochchain trifft Bernd häufig auf den
            Bergriff Distributed Ledger Technology (DLT). Ist Blockchain und DLT
            das Gleiche? Wenn nein, worin liegt der Unterschied? Wo findet DLT
            Anwendung? Wird es auch in seiner Branche, der Finanzbranche
            verwendet?
          </p>
        </div>
      )}
      <p className="mb-12 text-justify">
        Die Blockchain-Technologie und die Distributed Ledger Technology (DLT)
        teilen den Ansatz der dezentralisierten Datenverwaltung, bieten jedoch
        unterschiedliche Umsetzungen. Beide ermöglichen verteilte
        Datenspeicherung und Transaktionstransparenz, wobei die Blockchain
        spezifisch Transaktionen in Blöcken verknüpft, während DLT eine breitere
        Palette von Technologien umfasst. Der Unterschied erstreckt sich auch
        auf die angewendeten Konsensmechanismen – Proof of Work oder Proof of
        Stake in der Blockchain im Vergleich zu verschiedenen Ansätzen in der
        DLT. Letztendlich vereinen sie das Ziel der erhöhten Sicherheit und
        Transparenz, aber bieten unterschiedliche Wege, um die Bedürfnisse
        verschiedener Branchen anzusprechen.
      </p>

      <div className="flex justify-center items-center mb-12">
        <video controls className="w-full md:w-1/2 h-full rounded-lg">
          <source src={dltvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Sources sources={articlesources} />
    </div>
  );
};

export default IntroductionBlockchainPart3;
