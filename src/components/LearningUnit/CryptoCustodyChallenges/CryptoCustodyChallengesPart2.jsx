import Future from '../../../images/courseExpert/futurebitcoin.png';
import CryptoCustodyChallengesSources from './CryptoCustodyChallengesSources';

function CryptoCustodyChallengesPart2() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Herausforderungen & Zukunftsaussichten
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Regulatorische Klarheit
      </h2>
      <ul className="list-disc ml-4">
        <li>Verbesserte Sicherheitsmaßnahmen</li>
        <li>Institutionelle Beteiligung</li>
        <li>
          Steigende Nachfrage nach Kryptoverwahrung durch zunehmende
          Tokenisierung
        </li>
        <li>
          Interoperabilität führt zu standardisierten Protokollen zwischen
          Verwahrungsanbietern
        </li>
        <li>Automatisierung/ KI</li>
        <li>Internationale Standards</li>
        <li>Integration in Mainstream </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
        Zukunftsaussichten
      </h2>

      <p className="mb-12 text-justify">
        Das Hauptziel bei der Kryptoverwahrung ist es die richtige Balance
        zwischen Sicherheit und Nutzerfreundlichkeit zu finden. Für die Zukunkft
        soll eine sichere Verwahrungslösung den Grundbaustein für das
        tokenisierte Wirtschaftssystem bilden. Während die Gewährleistung von
        Sicherheit garantiert werden soll, soll auch eine maximale Effizienz bei
        Kryptoabwicklungen existieren <a href="#sources">[1]</a>.
      </p>

      <div className="flex justify-center items-center mb-12">
        <img src={Future} alt="FutureBitcoin" className="w-full md:w-1/2" />
      </div>

      <p className="mb-4 text-justify">
        Der Grundbaustein einer in Zukunft großen Auswahl an Dienstleistungen
        für digitale Vermögenswerte wird gelegt, indem
        <strong>
          Verwahrungsdienstleistungen für Bitcoin und Ethereum
        </strong>{' '}
        zur Verfügung gestellt wird. Das Finanzdienstleistungsunternehmen Nasdaq
        stellt sich dabei der Aufgabe die notwendigen technologischen Strukturen
        und regulatorischen Einwilligungen zu erlangen{' '}
        <a href="#sources">[2]</a>.
      </p>

      <p className="mb-12 text-justify">
        Durch den Gesetzesentwurf <strong>“Keep Your Coins Act of 2023“</strong>{' '}
        soll dem Inhaber von Kryptowährungen ermöglicht werden, diese in eigenen
        Wallets zu verwahren. Damit soll dem Nutzer die Macht und Privatsphäre
        bei der Verwaltung seiner eigenen digitalen Assets überlassen werden.
        Durch die Möglichkeit der eigenständigen Verwaltung soll eine breitere
        Akzeptanz in Bezug auf digitale Assets geschaffen werden{' '}
        <a href="#sources">[3]</a>.
      </p>

      <CryptoCustodyChallengesSources />
    </div>
  );
}

export default CryptoCustodyChallengesPart2;
