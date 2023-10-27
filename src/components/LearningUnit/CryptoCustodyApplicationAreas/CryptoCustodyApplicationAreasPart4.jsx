import CryptoCustodyApplicationAreasSources from './CryptoCustodyApplicationAreasSources';
import { StoryBoxTobias } from '../../StoryBox';

function CryptoCustodyApplicationAreasPart4() {
  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  const tobiasStory = [
    'Einerseits profitiert Tobias von der Benutzerfreundlichkeit, die ihm das Browser-Plugin für den bequemen Zugriff auf seine Kryptoassets bietet. Andererseits hegt er wiederholt Bedenken hinsichtlich der potenziellen Gefahr von Cyberangriffen aufgrund der ständigen Internetverbindung.',
    'In Anbetracht dieser Überlegungen stellt er sich die Frage nach den vielfältigen Optionen für den Zugriff auf Kryptoassets.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Anwedungsbereiche - Arten von Verwahrlösungen
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Konnektivität
      </h2>

      {isComingFromPreviousPage && <StoryBoxTobias paragraphs={tobiasStory} />}

      <p className="mb-8">
        Eine Hot Wallet ist direkt mit dem Internet verbunden und ermöglicht
        somit einen bequemen und sofortigen Zugriff auf Kryptoassets. Dieser
        Verbindungstyp wird typischerweise für alltägliche Transaktionen
        genutzt, bei denen eine einfache Erreichbarkeit vonnöten ist. Hot
        Wallets gibt es in verschiedenen Ausführungen. Sie lassen sich in
        Software Wallets unterscheiden, die auf Computern oder mobilen
        Endgeräten installiert werden, und Web Wallets, die über den Browser
        zugänglich sind. Allerdings birgt die kontinuierliche Internetverbindung
        das Risiko von Cyberattacken, weshalb es ratsam ist, nur eine begrenzte
        Menge an Kryptoassets in einer Hot Wallet aufzubewahren{' '}
        <a href="#sources">[3]</a>.
      </p>

      <p className="mb-8">
        Im Kontrast dazu ist die Cold Wallet nicht mit dem Internet verbunden
        und daher im Vergleich zu Hot Wallets sicherer vor potenziellen
        Cyberangriffen. Aus diesem Grund werden Cold Wallets bevorzugt, um
        größere Mengen an Kryptoassets sicher aufzubewahren. Diese Variante der
        Aufbewahrung zeigt verschiedene Ausprägungen, insbesondere Hardware
        Wallets und Paper Wallets. Während bei Hardware Wallets der private
        Schlüssel auf einem physischen Gerät gesichert wird, erfolgt bei Paper
        Wallets die Speicherung des Schlüssels durch das Drucken des Schlüssels
        auf einem Stück Papier <a href="#sources">[3]</a>.
      </p>

      <p className="mb-8">
        Eine Zwischenlösung stellt die Warm Wallet dar. Diese vereint die
        Zugänglichkeit von Hot Wallet mit der Sicherheit der Cold Wallet.
        Demnach sind diese Verwahrlösungen mit dem Internet verbunden, bieten
        aber Sicherheitsmaßnahmen gegen Cyberangriffen{' '}
        <a href="#sources">[1]</a>.
      </p>

      <CryptoCustodyApplicationAreasSources />
    </div>
  );
}

export default CryptoCustodyApplicationAreasPart4;
