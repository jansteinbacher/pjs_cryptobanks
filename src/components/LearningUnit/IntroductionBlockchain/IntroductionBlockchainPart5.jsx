import { useState } from 'react';
import PropTypes from 'prop-types';

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

function IntroductionBlockchainPart4() {
  const articlesources = [
    'Ray, S. 2018.The Difference Between Blockchains & Distributed Ledger Technology. in: Towards Data Science. https://towardsdatascience.com/the-difference-between-blockchains-distributed-ledger-technology-42715a0fa92. [abgerufen am 24.08.2023].',
    'Sunyaev, A. und Sunyaev, A. 2020. Distributed ledger technology. Internet computing: Principles of distributed systems and emerging internet-based technologies, S. 265-299.',
    'Nakamoto, S. 2008. A peer-to-peer electronic cash system. https://bitcoin.org/bitcoin.pdf. [abgerufen am 24.08.2023].',
    'Bundesamt für Sicherheit in der Informationstechnik. 2023. Blockchain macht Daten praktisch unveränderbar. https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html. [abgerufen am 24.08.2023].]',
  ];

  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Anwendungsbereiche
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Während Bernd sich intensiv mit dem Thema Blockchain
            auseinandersetzt, stolpert er immer wieder über den Begriff
            &ldquo;Distributed Ledger Technology&rdquo; (DLT). Er ist sich nicht
            sicher, ob Blockchain und DLT dasselbe sind, und beschließt, Tobias
            nach dessen Meinung zu fragen.
          </p>
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Tokenisierung
      </h3>
      <p className="mb-12 text-justify">
        Die Tokenisierung ist eine Anwendung der Blockchain-Technologie, bei der
        digitale Vermögenswerte in tokenisierter Form auf einer dezentralen
        Blockchain-Plattform erstellt und verwaltet werden. Dies ermöglicht die
        Umwandlung physischer oder virtueller Vermögenswerte in digitale Tokens,
        die in der Blockchain registriert und nachverfolgt werden können. Diese
        Technologie steigert auch die Liquidität und den Handel erheblich. Zum
        Beispiel kann eine Immobilie in viele kleine Tokens aufgeteilt werden,
        wodurch Anleger Bruchteile dieser Vermögenswerte kaufen und verkaufen
        können.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Smarte Verträge und dezentrales Finanzwesen
      </h3>
      <p className="mb-12 text-justify">
        Mit dem Aufkommen vieler neuerer Blockchains wie Ethereum ist es
        möglich, Anwendungen auf der Blockchain mithilfe von sogenannten Smart
        Contracts zu erstellen. Ein Smart Contract ist ein selbstausführender
        Code, der eine Aktion auslöst, sobald vordefinierte Bedingungen erfüllt
        sind. Sie tragen zur Dezentralisierung des Finanzwesens bei, indem sie
        die Vermittler, die traditionell zur Entscheidungsfindung notwendig
        sind, ersetzen. Um Informationen von außerhalb der Blockchain zu
        beziehen, nutzen Smart Contracts sogenannte Orakel, die diese Daten
        bereitstellen. [5]
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Transportwesen und Supply-Chain-Management
      </h3>
      <p className="mb-12 text-justify">
        Im Transportwesen und im Supply-Chain Management ermöglicht die
        Blockchain-Technologie die lückenlose Nachverfolgung von Produkten
        entlang der Lieferkette, was zu erhöhter Transparenz und Authentizität
        führt. Ebenso erleichtert die Blockchain den grenzüberschreitenden
        Handel, indem sie den Austausch von Informationen und Dokumenten
        zwischen verschiedenen Ländern rationalisiert. Im Bereich der
        Frachtverfolgung können Transporte und Lieferungen in Echtzeit verfolgt
        werden, was die Effizienz und Sicherheit verbessert.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
}

export default IntroductionBlockchainPart4;
