import React, { useState } from 'react';
import Regulation from '../../../images/courseAdvanced/cryptoassetSafekeeping.jpg';

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

const IntroductionCryptoCustodyPart1 = () => {
  const articlesources = [
    'vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.',
    'vgl. Lindell, Nof (2018). Fast secure multiparty ECDSA with practical distributed key generation and applications to cryptocurrency custody. In Proceedings of the 2018 ACM SIGSAC Conference on Computer and Communications Security. S. 1837–1854',
    'vgl. Hsieh, Brennan (2022). Issues, risks, and challenges for auditing crypto asset transactions. In: International Journal of Accounting Information Systems, vol. 46. S. 100569.',
    'vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.',
    'vgl. ebd',
    'vgl. Han, Jongbeen, Mansub Song; Hyeonsang Eom, Yongseok Son (2021). An efficient multi-signature wallet in blockchain using bloom filter. In: Proceedings of the 36th Annual ACM Symposium on Applied Computing, S. 273–281];',
  ];

  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Definition und Grundlagen der Kryptoverwahrung
      </h1>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Tobias, ein weiterer Mitarbeiter der Silberbach & Söhne Bank und
            Kollege von Simone und Bernd, ist als Leiter im Technologie- und
            Innovationsmanagement-Bereich tätig. Dank seiner Affinität zu
            Kryptowährungen verfügt er bereits über umfassendes Wissen im
            Bereich der Kryptoassets. Dennoch gibt es Aspekte der
            Kryptoverwahrung, bei denen er noch Wissenslücken hat. Er informiert
            Simone über sein Interesse, sich tiefergehend mit der sicheren
            Aufbewahrung von Kryptoassets auseinanderzusetzen, um in diesem
            Bereich ein vertieftes Verständnis zu erlangen. Infolgedessen
            beauftragt Simone ihn freundlicherweise, erstmal nach einer
            allgemeinen Definition und grundlegenden Begriffen der
            Kryptoverwahrung zu recherchieren. Während seiner Recherche stößt
            Tobias auf eine präzise Definition der Kryptoverwahrung durch die
            BaFin.
          </p>
        </div>
      )}
      <div className="flex justify-center items-center">
        <img
          src={Regulation}
          alt="Regulation of Crypto Assets"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://pixabay.com/de/illustrations/recht-und-ordnung-gesetz-klausel-6311493/"
        >
          Pixabay
        </a>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Definition</h2>

      <p className="mb-8">
        Bei der Verwendung von Kryptoassets spielt die sichere Verwahrung eine
        bedeutende Rolle. Um den Schutz der Assets vor Verlust, Manipulation
        oder Diebstahl zu gewährleisten bieten bestimmte
        Verwahrungsorganisationen dabei die Dienstleistungen an, die privaten
        Schlüssel der Nutzer aufzubewahren und Transaktionen zu genehmigen.{' '}
        <a href="#sources">[1]</a>,<a href="#sources">[2]</a> Aufgrund der
        Risiken und Komplexität die Kryptoassets mit sich bringen, müssen neue
        Prozesse, Verfahren und eine neue Infrastruktur geschaffen werden, um
        Kundenbedürfnisse zu befriedigen und Sicherheit zu garantieren.{' '}
        <a href="#sources">[3]</a>,<a href="#sources">[4]</a> Zwischen den
        Kundenbedürfnissen und der Sicherheit soll infolgedessen die richtige
        Balance hergestellt werden. Die Sicherstellung des privaten Schlüssels
        bringt jedoch auch Probleme in Sachen Kosten, Skalierbarkeit,
        Flexibilität bei der Regulatorik und Benutzerfreundlichkeit mit sich.{' '}
        <a href="#sources">[5]</a>
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default IntroductionCryptoCustodyPart1;
