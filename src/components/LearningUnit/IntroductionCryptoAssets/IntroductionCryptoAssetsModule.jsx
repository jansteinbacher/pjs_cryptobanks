import Module from '../../Module';
import IntroductionCryptoAssetsQuiz from './IntroductionCryptoAssetsQuiz';
import IntroductionCryptoAssetsPart1 from './IntroductionCryptoAssetsPart1';
import IntroductionCryptoAssetsPart2 from './IntroductionCryptoAssetsPart2';
import IntroductionCryptoAssetsPart3 from './IntroductionCryptoAssetsPart3';
import IntroductionCryptoAssetsPart4 from './IntroductionCryptoAssetsPart4';
import IntroductionCryptoAssetsPart5 from './IntroductionCryptoAssetsPart5';
import IntroductionCryptoAssetsExpert from './IntroductionCryptoAssetsExpert';

function IntroductionCryptoAssetsModule() {
  const sections = [
    IntroductionCryptoAssetsPart1,
    IntroductionCryptoAssetsPart2,
    IntroductionCryptoAssetsPart3,
    IntroductionCryptoAssetsPart4,
    IntroductionCryptoAssetsPart5,
    IntroductionCryptoAssetsExpert,
    IntroductionCryptoAssetsQuiz,
  ];

  return <Module sections={sections} pagePath="/introduction-crypto-assets" />;
}

export default IntroductionCryptoAssetsModule;
