import CryptoAssetsDefinition from '../../../images/courseBeginner/CryptoAssetsDefinition.png';

import IntroductionCryptoAssetsSources from './IntroductionCryptoAssetsSources';
import Chapter12Audio from '../../../audio/chapter12.mp3';
import { StoryBoxBernd } from '../../StoryBox';

function IntroductionCryptoAssetsPart2() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

  const berndStory = [
    'Nach der Pause öffnete Bernd seinen Laptop und beginnt mit einer simplen Google-Suche: “Was sind Kryptoassets?” Innerhalb von Sekunden erschienen zahlreiche Ergebnisse. Er stößt auf eine Definition, die ihm einen klaren Überblick verschaffte.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Definition Kryptoassets
      </h2>
      {isComingFromPreviousPage && <StoryBoxBernd paragraphs={berndStory} />}
      <div className="flex justify-center items-center">
        <img
          src={CryptoAssetsDefinition}
          alt="CloudDefinition"
          className="w-full md:w-1/2 mb-8"
        />
      </div>
      <p className="text-center mb-4">
        Höre dir den folgenden Text als Audio an:
      </p>
      <div className="flex justify-center items-center mb-8">
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <audio controls>
          <source src={Chapter12Audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <p className="mb-12 text-justify">
        Nach § 1 Abs. 11 S. 4 KWG ist ein Kryptowert ein digitaler, von keiner
        öffentlichen Stelle unterstützter Wert ohne gesetzlichen Status einer
        Währung, der gleichwohl als Tausch-, Zahlungs- oder Anlagegegenstand
        akzeptiert wird und elektronisch übertragen, gespeichert und gehandelt
        werden kann <a href="#sources">[3]</a>. Ähnlich, – nur mit Bezug zur
        Distributed-Ledger-Technologie (DLT) – definiert die EU-Verordnung über
        Märkte in Kryptowerte (sog. MiCA).
      </p>
      <IntroductionCryptoAssetsSources />
    </div>
  );
}

export default IntroductionCryptoAssetsPart2;
