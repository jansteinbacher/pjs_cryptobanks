import Token from '../../../images/courseBeginner/token.png';
import IntroductionCryptoAssetsSources from './IntroductionCryptoAssetsSources';
import Chapter15Audio from '../../../audio/chapter15.mp3';
import { StoryBoxBernd } from '../../StoryBox';

/**
 * Component representing the fifth part of the "Grundverständnis zu Kryptoassets" (Understanding Crypto Assets) section. In this part, the difference between coins and tokens is explained. Bernd's ongoing journey of learning and exploration is highlighted as he seeks to understand the intricacies of the world of crypto assets. The component includes an audio element for listening convenience.
 */

function IntroductionCryptoAssetsPart5() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

  const berndStory = [
    'Bernd hat inzwischen bereits einige Informationen auf seiner Wissensreise durch de Welt der Kryptoassets sammeln können. Doch es gibt immer noch Aspekte, die ihm nicht vollständig klar sind.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Coin vs. Token
      </h2>
      {isComingFromPreviousPage && <StoryBoxBernd paragraphs={berndStory} />}
      <div className="flex justify-center mb-8 items-center">
        <img src={Token} alt="Token" className="w-full md:w-3/4 mb-4" />
      </div>
      <p className="text-center mb-4">
        Höre dir den folgenden Text als Audio an:
      </p>
      <div className="flex justify-center items-center mb-8">
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <audio controls>
          <source src={Chapter15Audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <p className="mb-4 text-left">
        <strong>Token</strong> unterscheiden sich von <strong>Coins</strong>.
        Während der Coin primär als Zahlungsmittel verwendet wird und eine rein
        digitale Währung darstellt, haben Token breitere
        Anwendungsmöglichkeiten. Sie sind daher nicht als „klassischer“ Coin
        einzustufen <a href="#sources">[10]</a>.{' '}
      </p>
      <p className="mb-4 text-left">
        Die wohl bekanntesten Coins sind der Bitcoin, basierend auf der
        Bitcoin-Blockchain, und der Ethercoin, der Coin der Ethereum-Blockchain.{' '}
      </p>
      <p className="mb-4 text-left">
        Coins, die nach der ersten Kryptowährung, dem Bitcoin, auf den Markt
        gekommen sind, bezeichnet man auch als Bitcoin Alternative oder Alt
        Coin.{' '}
      </p>
      <p className="mb-4 text-left">
        Token und Coin stehen in einem engen Zusammenhang, denn die
        Transaktionskosten der Token werden mit Coins gezahlt{' '}
        <a href="#sources">[11]</a>.
      </p>
      <p className="mb-12 text-left">
        Mit einem tiefen Verständnis für den Unterschied zwischen Coins und
        Tokens setzte Bernd seinen Weg des Lernens und Entdeckens fort. Er
        wusste, dass jedes Puzzleteilchen, das er verstand, ihn näher an die
        vollständige Erkenntnis der Welt der Kryptoassets heranbrachte.
      </p>
      <IntroductionCryptoAssetsSources />
    </div>
  );
}
export default IntroductionCryptoAssetsPart5;
