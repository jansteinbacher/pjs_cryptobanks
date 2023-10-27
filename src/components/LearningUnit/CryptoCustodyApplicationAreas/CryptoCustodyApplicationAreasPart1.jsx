import Anwendungsbereiche from '../../../images/courseExpert/overviewAnwendungsbereiche.png';
import CryptoCustodyApplicationAreasSources from './CryptoCustodyApplicationAreasSources';
import { StoryBoxTobias } from '../../StoryBox';

function CryptoCustodyApplicationAreasPart1() {
  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  const tobiasStory = [
    'Simone hat Tobias beauftragt, sich intensiver mit verschiedenen Lösungen zur Verwahrung von Kryptoassets auseinanderzusetzen. Dies bildet den Auftakt zur Integration von Kryptoassets in das hauseigene Bankensystem.',
    'Um einen ersten Einblick in die Kryptoasset-Verwahrung zu gewinnen, untersucht Tobias, die Verwahrlösung, welche er privat zur Investition in Kryptoassets nutzt. Hierbei macht er Gebrauch von seinem intelligenten Browser-Plugin, das es ihm ermöglicht, mit der Maus über Webseiteninhalte zu fahren und weitere Informationen abzurufen.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Anwedungsbereiche - Arten von Verwahrlösungen
      </h1>

      {isComingFromPreviousPage && <StoryBoxTobias paragraphs={tobiasStory} />}

      <p className="mb-12 text-justify">
        Die sichere Verwahrung von Kryptoassets bildet einen essenziellen
        Grundpfeiler für die sich entwickelnde Kryptoasset-Wirtschaft. Ganz
        gleich, ob es sich um Kryptowährungen, NFTs oder Security Tokens handelt
        – die Gewährleistung einer sicheren Aufbewahrung des privaten Schlüssels
        sowie die authentifizierte Genehmigung und Signierung von Transaktionen
        sind grundlegend. Die Kryptoasset-Verwahrlösungen können in mehrerer
        Klassen eingeteilt werden, basierend auf fünf Schlüsseldimensionen oder
        Perspektiven <a href="#sources">[1]</a>. Im Folgenden werden die
        einzelnen Klassen näher beleuchtet.
      </p>

      <div className="flex justify-center items-center mb-8">
        <img
          src={Anwendungsbereiche}
          alt="Anwendungsbereiche"
          className="w-full"
        />
      </div>

      <CryptoCustodyApplicationAreasSources />
    </div>
  );
}

export default CryptoCustodyApplicationAreasPart1;
