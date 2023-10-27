import IntroductionCryptoAssetsSources from './IntroductionCryptoAssetsSources';
import Chapter13Audio from '../../../audio/chapter13.mp3';
import Blockchain from '../../../images/courseBeginner/Blockchain.jpg';
import { StoryBoxBernd } from '../../StoryBox';

function IntroductionCryptoAssetsPart3() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

  const berndStory = [
    'Während seiner Recherche stößt Bernd auf den Bergriff Blockchain. Doch was ist das nochmal? Als aufmerksamer Leser und Zuhörer weiß Bernd inzwischen, dass die Blockchain-Technologie von mutmaßlich einer oder mehreren Personen unter dem Pseudonym Satoshi Nakamoto in dem Whitepaper beschrieben wurde.',
    'Es wird darin dargestellt, wie Transaktionen, Hashes und Nonces zu einer blockbasierten Datenstruktur zusammengefasst werden können. Innerhalb dieser Datenstruktur können die separaten Blöcke mit Hilfe des Hashes eines vorherigen Blocks miteinander verknüpft werden [1], [4].',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Blockchain - Was ist das?
      </h2>
      {isComingFromPreviousPage && <StoryBoxBernd paragraphs={berndStory} />}
      <div className="flex justify-center items-center">
        <img
          src={Blockchain}
          alt="Blockchain"
          className="w-full md:w-1/2 mb-8"
        />
      </div>
      <p className="text-center mb-4">
        Höre dir den folgenden Text als Audio an:
      </p>
      <div className="flex justify-center items-center mb-8">
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <audio controls>
          <source src={Chapter13Audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <p className="mb-12 text-justify">
        Mittels der Blockchain-Technologie können Daten, wie beispielweise
        Transaktionen, in einer verteilten Infrastruktur ohne eine zentrale
        Instanz nachvollziehbar und manipulationssicher verwaltet werden. Sie
        basiert auf Kryptographie, um Daten zu sichern und die Identität der
        Anwendenden zu überprüfen.<a href="#sources">[5]</a>
        <br />
        Die Blockchain-Technologie basiert auf einem{' '}
        <strong>Peer-to-Peer Netzwerk</strong>. Dies bedeutet, dass es nicht auf
        einer zentralen Behörde fundiert, welche den System verwaltet. Die
        Computer, die zu dem Peer-to-Peer Netzwerk gehören, sind meist dezentral
        verteilt und werden in der Fachliteratur teils auch als{' '}
        <strong>Full Nodes</strong> bezeichnet.<a href="#sources">[6]</a>
        <br />
        Es gibt zwei verschiedene Arten der Blockchain, die{' '}
        <strong>Permissioned Blockchain</strong> und die{' '}
        <strong>Permissionless Blockchain</strong>. <br />
        Mehr dazu in Kapitel 2.
      </p>
      <IntroductionCryptoAssetsSources />
    </div>
  );
}
export default IntroductionCryptoAssetsPart3;
