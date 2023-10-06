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
    'Bundesministerium der Justiz. (2023, Febr. 22). “Gesetz über das Kreditwesen,”  [Online]. Available: https://www.gesetze-im-internet.de/kredwg/index.html. [Accessed: Sept. 29, 2023].',
    'BaFin. “Kryptoverwahrgeschäft,” BaFin, 2022. [Online]. Available: https://www.bafin.de/DE/Aufsicht/FinTech/Geschaeftsmodelle/DLT_Blockchain_Krypto/Kryptoverwahrgeschaeft/Kryptoverwahrgeschaeft_artikel.html. [Accessed: Sept. 29, 2023].',
    'BaFin. “Merkblatt: Hinweise zum Tatbestand des Kryptoverwahrgeschäfts,” BaFin, 2020. [Online]. Available: https://www.bafin.de/SharedDocs/Veroeffentlichungen/DE/Merkblatt/mb_200302_kryptoverwahrgeschaeft.html. [Accessed: Sept. 29, 2023].',
    'Rödl & Partner. “Kryptoverwahrgeschäft als neuer KWG-Tatbestand,” Rödl & Partner, 2020. [Online]. Available: https://www.roedl.de/themen/aufsichtsrecht/kryptoverwahrgeschaeft-kwg-tatbestand-rechtsaenderungen. [Accessed: Sept. 29, 2023].',
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
        der privaten kryptografischen Schlüssel <a href="#sources">[3]</a>.
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
        bietet <a href="#sources">[4]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoCustodyRegulationPart2;
