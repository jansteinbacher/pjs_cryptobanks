import CryptoCustodyApplicationAreasSources from './CryptoCustodyApplicationAreasSources';
import { StoryBoxTobias } from '../../StoryBox';

/**
 * Component representing the third part of the Crypto Custody Application Areas section.
 * It provides information about the distribution of ownership and control of crypto assets
 * through centralized and decentralized custody solutions, and explores the use of Distributed Ledger Technology.
 */

function CryptoCustodyApplicationAreasPart3() {
  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  const tobiasStory = [
    'Nachdem Tobias einiges über die Verantwortung für die Sicherung und das Management von Kryptoassets gelernt hat, möchte er genauer die Art und Weise verstehen, inwiefern das Eigentum und die Kontrolle über die Vermögenswerte auf verschiedene Unternehmen verteilt sind.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Anwedungsbereiche - Arten von Verwahrlösungen
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Verteilung</h2>

      {isComingFromPreviousPage && <StoryBoxTobias paragraphs={tobiasStory} />}

      <p className="mb-4 text-left">
        Bei der <strong>zentralisierten Kryptoasset-Verwahrlösung</strong> hat
        eine einzelne Entität den vollen Zugriff auf die Kryptoassets und
        übernimmt die Sicherheit <a href="#sources">[1]</a>.
      </p>

      <p className="mb-12 text-left">
        Wiederum die <strong>dezentrale Kryptoasset-Verwahrlösung</strong>{' '}
        verteilt die Kontrolle und das Management der Kryptoassets auf
        verschiedene Entitäten. Hierfür wird unter anderem die
        Distributed-Ledger-Technologie genutzt <a href="#sources">[1]</a>.
      </p>

      <CryptoCustodyApplicationAreasSources />
    </div>
  );
}

export default CryptoCustodyApplicationAreasPart3;
