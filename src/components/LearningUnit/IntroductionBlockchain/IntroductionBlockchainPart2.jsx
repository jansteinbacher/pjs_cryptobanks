import React, { useState } from 'react';
import TypesOfBlockchain from '../../../images/courseBeginner/typesOfBlockchain.jpg';
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

const IntroductionBlockchainPart2 = () => {
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
        Permissioned vs. Permissionless
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Während sie gemeinsam eine Tasse Kaffee genießen, fragt Bernd
            Tobias: "Tobias, ich habe gehört, dass es verschiedene Arten von
            Blockchains gibt. Kannst du mir erklären, was den Unterschied
            zwischen ihnen ausmacht?"
          </p>
        </div>
      )}
      <div className="flex justify-center items-center">
        <img
          src={TypesOfBlockchain}
          alt="Regulation of Crypto Assets"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://www.freepik.com/free-vector/security-concept-illustration-people-holding-chain_3226083.htm#query=permissioned%20vs%20permissionless%20blockchain&position=1&from_view=search&track=ais"
        >
          Bild von rawpixel.com auf Freepik
        </a>
      </div>
      <p className="mb-12 text-justify">
        Die Blockchain-Technologie umfasst Permissioned und Permissionless
        Blockchains. Beide sind dezentral und transparent. Permissioned
        Blockchains erfordern Zugriffsberechtigungen, während Permissionless
        Blockchains für alle offen sind. Konsensmechanismen variieren, ebenso
        wie Skalierbarkeit und Privatsphäre. Permissioned Blockchains passen in
        geschlossene Umgebungen wie Unternehmensanwendungen. Permissionless
        Blockchains sind ideal für offene, dezentrale Anwendungen wie
        Kryptowährungen und DeFi.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Proof of Work
      </h3>

      <p className="mb-12 text-justify">
        Proof of Work (PoW) ist ein Konsensmechanismus, der zum Beispiel im
        Bitcoin-Netzwerk verwendet wird. Miner lösen komplexe mathematische
        Rätsel, um neue Blöcke zur Blockchain hinzuzufügen. Dies erfordert
        erhebliche Rechenleistung und Energieaufwand. Der erste Miner, der das
        Rätsel löst, erhält die Belohnung und validiert die Transaktionen im
        Block.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Proof of Stake
      </h3>
      <p className="mb-12 text-justify">
        Proof of Stake (PoS) wird in Kryptowährungen wie Ethereum und Cardano
        eingesetzt. Statt Rechenleistung setzen Teilnehmer Kryptowährung als
        Stake ein. Zum Beispiel können Inhaber von Ethereum Token ihre Coins als
        Einsatz verwenden, um Blöcke zu erstellen. Die Wahrscheinlichkeit,
        ausgewählt zu werden, hängt von der Menge der gestakten Coins ab. PoS
        fördert den Kryptowährungsbesitz und reduziert den Energieverbrauch im
        Vergleich zu PoW.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default IntroductionBlockchainPart2;