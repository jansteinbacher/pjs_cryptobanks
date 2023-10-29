import Bitcoinhold from '../../../images/courseExpert/bitcoinhold.png';
import CryptoCustodyRegulationSources from './CryptoCustodyRegulationSources';

/**
 * Component representing the second part of the "Regulatorik zu Kryptoverwahrung" (Regulation for Crypto Custody) section. This part discusses the regulatory definitions related to managing, safeguarding, and securing crypto assets and private cryptographic keys. It explains what constitutes custody, management, and security of crypto assets, and clarifies the scope of the regulations. It also addresses the potential consequences of not adhering to the regulatory requirements.
 * This component includes an image depicting a person holding Bitcoin.
 */

function CryptoCustodyRegulationPart2() {
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

      <p className="mb-4 text-left">
        Diese Regelungen beziehen sich auf das Verwalten, Verwahren und Sichern
        von Kryptowerten sowie privaten kryptographischen Schlüsseln, die für
        die Aufbewahrung, Speicherung oder Übertragung von Kryptowerten genutzt
        werden.{' '}
      </p>
      <p className="mb-4 text-left">
        Für eine <strong>Erlaubnis</strong> nach § 32 Abs. 1 Satz 1 KWG reicht
        es aus, wenn einer der genannten Aspekte erfüllt ist. Es ist nicht
        zwingend erforderlich, dass die Verwahrung, Verwaltung und Sicherung
        simultan stattfinden.{' '}
      </p>
      <p className="mb-4 text-left">
        <strong>Verwahrung</strong> impliziert die Aufbewahrung von Kryptowerten
        für Dritte als Dienstleistung. Dies betrifft insbesondere Anbieter, die
        Kryptowerte ihrer Kunden gesammelt aufbewahren, ohne dass die Kunden
        selbst über die kryptographischen Schlüssel informiert sind.{' '}
      </p>
      <p className="mb-4 text-left">
        <strong>Verwalten </strong>
        umfasst die kontinuierliche Ausübung der Rechte im Zusammenhang mit den
        Kryptowerten.{' '}
      </p>
      <p className="mb-4 text-left">
        Unter <strong>Sicherung</strong> fällt sowohl die digitale Speicherung
        der privaten kryptographischen Schlüssel Dritter als Dienstleistung als
        auch die physische Aufbewahrung von Datenträgern (z. B. USB-Sticks oder
        Papiere), auf denen solche Schlüssel gespeichert sind. Reiner
        Speicherplatz ohne explizite Dienstleistung zur Schlüsselspeicherung,
        wie von Webhosting- oder Cloudspeicher-Anbietern, ist nicht einschlägig.
      </p>
      <p className="mb-12 text-left">
        Nicht erfasst ist die reine Herstellung oder der Vertrieb von Hardware
        oder Software zur Kryptowert-Sicherung, die von Nutzern
        eigenverantwortlich genutzt wird, sofern Anbieter keinen direkten
        Zugriff auf die verwahrten Kryptowerte oder Schlüssel haben.
        Entscheidend ist die Möglichkeit des Zugriffs auf öffentliche Adressen,
        unter denen Kryptowerte dezentral gespeichert sind, durch die Verwahrung
        der privaten kryptographischen Schlüssel <a href="#sources">[3]</a>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Ausblick</h2>

      <p className="mb-4 text-left">
        Es bleibt noch unklar, ob die erweiterte Definition von Kryptowerten
        lediglich die bereits von der BaFin praktizierte Verwaltungspraxis
        aufgreift – bei der bestimmte Kryptowerte wie Currency-Token und
        Security-Token als Finanzinstrumente klassifiziert werden und
        Aktivitäten damit erlaubnispflichtig sind – oder ob auch Utility-Token
        (digitale Gutscheine) unter den neuen Kryptowertbegriff fallen.{' '}
      </p>
      <p className="mb-4 text-left">
        {' '}
        Dennoch ist es für Unternehmen, die mit digitalen Vermögenswerten
        handeln, dringend ratsam, die von ihnen angebotenen Dienstleistungen
        genau zu prüfen oder prüfen zu lassen.{' '}
      </p>
      <p className="mb-12 text-left">
        Der Handel ohne erforderliche BaFin-Erlaubnis könnte mit einer
        erheblichen Strafe von bis zu fünf Jahren Freiheitsentzug belegt werden.
        Es ist wichtig zu beachten, dass Unwissenheit grundsätzlich keine Schutz
        vor rechtlichen Konsequenzen bietet <a href="#sources">[4]</a>.
      </p>

      <CryptoCustodyRegulationSources />
    </div>
  );
}

export default CryptoCustodyRegulationPart2;
