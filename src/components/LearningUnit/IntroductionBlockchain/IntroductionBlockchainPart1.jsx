import { useState } from 'react';
import PropTypes from 'prop-types';
import Blockchain from '../../../images/courseBeginner/blockchain.png';

function Sources({ sources }) {
  const [showSources, setShowSources] = useState(false);

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  return (
    <div className="sources border border-gray-400 rounded p-4">
      <button
        type="button"
        className="text-lg font-semibold"
        id="sources"
        onClick={toggleSources}
      >
        Quellen:
      </button>
      {showSources && (
        <div className="source-list leading-relaxed mt-4">
          <ul>
            {sources.map((source) => (
              <li key={source.id}>
                [{source.id}] {source.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Sources.propTypes = {
  sources: PropTypes.shape({
    map: PropTypes.func,
    length: PropTypes.number,
  }).isRequired,
};

function IntroductionBlockchainPart1() {
  const articlesources = [
    'S. Ray, “The difference between Blockchains &amp; Distributed Ledger Technology,” Medium, https://towardsdatascience.com/the-difference-between-blockchains-distributed-ledger-technology-42715a0fa92 (accessed Sep. 22, 2023).',
    'A. Sunyaev, “Distributed Ledger Technology,” Internet Computing, pp. 265–299, 2020. doi:10.1007/978-3-030-34957-8_9',
    'S. Nakamoto, “A peer-to-peer electronic cash system,” Bitcoin, https://bitcoin.org/en/bitcoin-paper (accessed Sep. 21, 2023).',
    '“Blockchain Macht Daten Praktisch Unveränderbar,” Bundesamt für Sicherheit in der Informationstechnik, https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html (accessed Sep. 21, 2023).',
  ];

  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

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
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Bernd hat in den letzten Wochen viel über Kryptoassets und Token
            gelernt, aber er hat immer noch viele Fragen zur zugrundeliegenden
            Technologie. Er weiß, dass die Blockchain eine entscheidende Rolle
            in diesem Bereich spielt, versteht jedoch nicht wirklich, wie sie
            funktioniert. Um sein Wissen zu vertiefen, trifft er sich gerade mit
            seinem Kollegen Tobias, der in seiner Hochschulzeit viel zu der
            Blockchain-Technologie geforscht hat.
          </p>
        </div>
      )}
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
}

export default IntroductionBlockchainPart1;
