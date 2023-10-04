import React, { useState } from 'react';
import Bitcoinhold from '../../../images/courseExpert/bitcoinhold.png';

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

const CryptoCustodyRegulationPart2 = () => {
  const articlesources = [
    'vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.',
    'vgl. Di Nicola, Vincenzo, Riccardo Longo, Federico Mazzone und Gaetano Russo (2020). Resilient Custody of Crypto-Assets, and Threshold Multisignatures. In: Mathematics 8.10, S. 1773.',
    'ebd.',
    'vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.',
    'vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.',
    'vgl. Di Nicola, Vincenzo, Riccardo Longo, Federico Mazzone und Gaetano Russo (2020). Resilient Custody of Crypto-Assets, and Threshold Multisignatures. In: Mathematics 8.10, S. 1773.',
    'vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.',
    'ebd.',
    'vgl. Suratkar, Saurabh, Mahesh Shirole und Sunil Bhirud (2023). Cryptocurrency Wallet: A Reviews. In: 2020 4th International Conference on Computer, Communication and Signal Processing (ICCCSP), S. 1-7.',
    'ebd.',
    'vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.',
    'vgl. Suratkar, Saurabh, Mahesh Shirole und Sunil Bhirud (2023). Cryptocurrency Wallet: A Reviews. In: 2020 4th International Conference on Computer, Communication and Signal Processing (ICCCSP), S. 1-7.',
    'vgl. Cabrera-Gutierrez, Antonio J., Encarnacion Castillo, Antonio Escobar-Molero, Jose A. Alvarez-Bermejo, Diego P. Morales und Luis Parrilla (2022). Integration of Hardware Security Modules and Permissioned Blockchain in Industrial IoT Networks. In: IEEE access, 2022 10, S. 114331-114345',
    'vgl. Rezaeighaleh, Hossein und Cliff C. Zou (2019). Integration of Hardware Security Modules and Permissioned Blockchain in Industrial IoT Networks. In: 2019 IEEE Global Communications Conference (GLOBECOM)',
    'vgl. A. Shamir (1979). How to share a secret. In: Communications of the ACM 22.11, S. 612–613',
    'vgl. Han, Jongbeen, Mansub Song; Hyeonsang Eom, Yongseok Son (2021). An efficient multi-signature wallet in blockchain using bloom filter. In: Proceedings of the 36th Annual ACM Symposium on Applied Computing, S. 273–281',
    'vgl. Ricci, S., Dzurenda, P., Casanova-Marqués, R., Cika, P. Marrella, A., ua. (2022). Threshold Signature for Privacy-Preserving Blockchain. In:  Business Process Management: Blockchain, Robotic Process Automation, and Central and Eastern Europe Forum. BPM 2022. Lecture Notes in Business Information Processing 459. Springer, Cham.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Anwedungsbereiche - Arten von Verwahrlösungen
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Verwahren, Verwalten und Sichern von Kryptowerten
      </h2>

      <div className="flex justify-center items-center mb-8">
        <img
          src={Bitcoinhold}
          alt="Bitcoin hold by man in suit"
          className="w-full md:w-1/2"
        />
      </div>

      <p className="mb-8">
        Diese Regelungen beziehen sich auf das Verwalten, Verwahren und Sichern
        von Kryptowerten sowie privaten kryptografischen Schlüsseln, die für die
        Aufbewahrung, Speicherung oder Übertragung von Kryptowerten genutzt
        werden. Für eine Erlaubnis nach § 32 Abs. 1 Satz 1 KWG reicht es aus,
        wenn einer der genannten Aspekte erfüllt ist. Es ist nicht zwingend
        erforderlich, dass die Verwahrung, Verwaltung und Sicherung simultan
        stattfinden. Verwahrung impliziert die Aufbewahrung von Kryptowerten für
        Dritte als Dienstleistung. Dies betrifft insbesondere Anbieter, die
        Kryptowerte ihrer Kunden gesammelt aufbewahren, ohne dass die Kunden
        selbst über die kryptografischen Schlüssel informiert sind. Verwalten
        umfasst die kontinuierliche Ausübung der Rechte im Zusammenhang mit den
        Kryptowerten. Unter Sicherung fällt sowohl die digitale Speicherung der
        privaten kryptografischen Schlüssel Dritter als Dienstleistung als auch
        die physische Aufbewahrung von Datenträgern (z. B. USB-Sticks oder
        Papiere), auf denen solche Schlüssel gespeichert sind. Reiner
        Speicherplatz ohne explizite Dienstleistung zur Schlüsselspeicherung,
        wie von Webhosting- oder Cloudspeicher-Anbietern, ist nicht einschlägig.
        Nicht erfasst ist die reine Herstellung oder der Vertrieb von Hardware
        oder Software zur Kryptowert-Sicherung, die von Nutzern
        eigenverantwortlich genutzt wird, sofern Anbieter keinen direkten
        Zugriff auf die verwahrten Kryptowerte oder Schlüssel haben.
        Entscheidend ist die Möglichkeit des Zugriffs auf öffentliche Adressen,
        unter denen Kryptowerte dezentral gespeichert sind, durch die Verwahrung
        der privaten kryptografischen Schlüssel.<a href="#sources">[4]</a>
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Ausblick</h2>

      <p className="mb-8">
        Es bleibt noch unklar, ob die erweiterte Definition von Kryptowerten
        lediglich die bereits von der BaFin praktizierte Verwaltungspraxis
        aufgreift – bei der bestimmte Kryptowerte wie Currency-Token und
        Security-Token als Finanzinstrumente klassifiziert werden und
        Aktivitäten damit erlaubnispflichtig sind – oder ob auch Utility-Token
        (digitale Gutscheine) unter den neuen Kryptowertbegriff fallen. Dennoch
        ist es für Unternehmen, die mit digitalen Vermögenswerten handeln,
        dringend ratsam, die von ihnen angebotenen Dienstleistungen genau zu
        prüfen oder prüfen zu lassen. Der Handel ohne erforderliche
        BaFin-Erlaubnis könnte mit einer erheblichen Strafe von bis zu fünf
        Jahren Freiheitsentzug belegt werden. Es ist wichtig zu beachten, dass
        Unwissenheit grundsätzlich keine Schutz vor rechtlichen Konsequenzen
        bietet. <a href="#sources">[5]</a>
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoCustodyRegulationPart2;
