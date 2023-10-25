import Module from '../../Module';
import CryptoAssetsAdoptionPart1 from './CryptoAssetsAdoptionPart1';
import CryptoAssetsAdoptionPart2 from './CryptoAssetsAdoptionPart2';
import CryptoAssetsAdoptionPart3 from './CryptoAssetsAdoptionPart3';
import CryptoAssetsAdoptionPart4 from './CryptoAssetsAdoptionPart4';
import CryptoAssetsAdoptionPart5 from './CryptoAssetsAdoptionPart5';
import CryptoAssetsAdoptionPart6 from './CryptoAssetsAdoptionPart6';
import CryptoAssetsAdoptionPart7 from './CryptoAssetsAdoptionPart7';
import CryptoAssetsAdoptionPart8 from './CryptoAssetsAdoptionPart8';
import CryptoAssetsAdoptionPart9 from './CryptoAssetsAdoptionPart9';
import CryptoAssetsAdoptionPart10 from './CryptoAssetsAdoptionPart10';
import CryptoAssetsAdoptionQuiz from './CryptoAssetsAdoptionQuiz';

function CryptoAssetAdoptionModule() {
  const sections = [
    CryptoAssetsAdoptionPart1,
    CryptoAssetsAdoptionPart2,
    CryptoAssetsAdoptionPart3,
    CryptoAssetsAdoptionPart4,
    CryptoAssetsAdoptionPart5,
    CryptoAssetsAdoptionPart6,
    CryptoAssetsAdoptionPart7,
    CryptoAssetsAdoptionPart8,
    CryptoAssetsAdoptionPart9,
    CryptoAssetsAdoptionPart10,
    CryptoAssetsAdoptionQuiz,
  ];

  return <Module sections={sections} pagePath="/crypto-asset-adoption" />;
}

export default CryptoAssetAdoptionModule;
