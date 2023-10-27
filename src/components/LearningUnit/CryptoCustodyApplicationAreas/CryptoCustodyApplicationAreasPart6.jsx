import CryptoCustodyApplicationAreasSources from './CryptoCustodyApplicationAreasSources';
import { StoryBoxTobias } from '../../StoryBox';

function CryptoCustodyApplicationAreasPart6() {
  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  const tobiasStory = [
    'Anhand der zusätzlichen Informationen durch das Browser-Plugin konnte Tobias bereits einiges über die verschiedenen Arten von Verwahrlösungen lernen. In einem weiteren Schritt möchte er nun mehr über verschiedene Technologien in Erfahrung bringen, die für die Sicherheit und den Zugang zu den Kryptoassets zuständig sind.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Anwedungsbereiche - Arten von Verwahrlösungen
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Technologie</h2>

      {isComingFromPreviousPage && <StoryBoxTobias paragraphs={tobiasStory} />}

      <p className="mb-4 text-justify">
        Bei <strong>Shamirs Secret Sharing (SSS)</strong> wird ein Geheimnis in
        mehrere Teile, gennant “Shares” unter eine Gruppe von Teilnehmern
        verteilt, wobei nur eine spezifische Teilmenge von Teilnehmern das
        Geheimnis rekonstruieren können. Für die Rekonstruktion des Geheimnis
        benötigt es eine bestimmte Anzahl an Shares, die “Schwelle”. Dabei wird
        die Schwelle so gewählt, dass nur qualifizierte Teilnehmer, die
        genügenden Shares besitzen <a href="#sources">[6].</a>
      </p>

      <p className="mb-4 text-justify">
        Im Gegensatz dazu erfordert <strong>Multi Signature (MultiSig)</strong>{' '}
        mehrere private Schlüssel, um eine Transaktion zu autorisieren. Dieses
        Verfahren ermöglicht mehrere Anwendungen, unter anderem die Aufteilung
        der Verantwortung für den Besitz von Kryptoassets unter meheren
        Personen, die Vermeidung eines einzelnen Angriffspunkt und die
        Möglichkeit der Wiederherstellung bei Verlust eines privaten Schlüssels
        (Seeds) <a href="#sources">[7]</a>.
      </p>

      <p className="mb-12 text-justify">
        Die <strong>Treshhold-Signature</strong> lässt sich nochmal weiter
        untergliedern in die
        <strong>“Threshold Cryptography”</strong> und die{' '}
        <strong>“Multiparty Computation” (MPC)</strong>. Die Threshold
        Cryptography ermöglicht einer Gruppe von Teilnehmern gemeinsam
        kryptografische Operationen durchzuführen, indem jeder ein Teil des
        privaten Schlüssels benutzt. Demnach erstellt eine Gruppe von
        Unterzeichnern auf einer Art Signaturschema eine Signatur auf einer
        Nachricht, ohne ihren privaten Schlüssel preiszugeben. Dadurch können
        Schwachstellen des Signierens mit einem einzigen privaten Schlüssel
        beseitigt werden. Diese Art der Technologie kann zusätzlich mit der
        Multi-Signature-Technologie verwendet werden, um eine zusätzliche
        Sicherheitsebene für Kryptoassets zu bieten. Im Gegensatz dazu
        ermöglicht MPC mehreren Parteien gemeinsame Berechnungen ohne
        Offenlegung von Eingaben/Ausgaben. Diese Protokolle nutzen verschiedene
        Kryptotechniken wie Schwellenkryptografie, Geheimnisaufteilung und
        homomorphe Verschlüsselung <a href="#sources">[8]</a>.
      </p>

      <CryptoCustodyApplicationAreasSources />
    </div>
  );
}

export default CryptoCustodyApplicationAreasPart6;
