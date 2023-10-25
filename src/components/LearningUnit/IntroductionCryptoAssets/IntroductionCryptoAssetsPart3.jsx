import Bernd from '../../../images/courseBeginner/charakterBernd.png';
import IntroductionCryptoAssetsSources from './IntroductionCryptoAssetsSources';
import Chapter13Audio from '../../../audio/chapter13.mp3';
import Blockchain from '../../../images/courseBeginner/Blockchain.jpg';

function IntroductionCryptoAssetsPart3() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Blockchain - Was ist das?
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg flex items-start">
          <img src={Bernd} alt="Charakterbild" className="w-1/12 h-auto mr-4" />
          <p className="italic text-justify flex-grow">
            Während seiner Recherche stößt Bernd auf den Bergriff Blockchain.
            Doch was ist das nochmal? Als aufmerksamer Leser und Zuhörer weiß
            Bernd inzwischen, dass die Blockchain-Technologie von mutmaßlich
            einer oder mehreren Personen unter dem Pseudonym Satoshi Nakamoto in
            dem Whitepaper beschrieben wurde. Es wird darin dargestellt, wie
            Transaktionen, Hashes und Nonces zu einer blockbasierten
            Datenstruktur zusammengefasst werden können. Innerhalb dieser
            Datenstruktur können die separaten Blöcke mit Hilfe des Hashes eines
            vorherigen Blocks miteinander verknüpft werden.{' '}
            <a href="#sources">[1]</a>, <a href="#sources">[4]</a>
          </p>
        </div>
      )}
      <div className="flex justify-center items-center">
        <img
          src={Blockchain}
          alt="Blockchain"
          className="w-full md:w-1/2 mb-8"
        />
      </div>
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
