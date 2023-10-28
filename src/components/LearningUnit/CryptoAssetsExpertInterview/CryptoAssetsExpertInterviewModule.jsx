import Module from '../../Module';
import CryptoAssetsExpertInterviewPart1 from './CryptoAssetsExpertInterviewPart1';
import CryptoAssetsExpertInterviewPart2 from './CryptoAssetsExpertInterviewPart2';
import CryptoAssetsExpertInterviewPart3 from './CryptoAssetsExpertInterviewPart3';
import CryptoAssetsExpertInterviewPart4 from './CryptoAssetsExpertInterviewPart4';
import CryptoAssetsExpertInterviewPart5 from './CryptoAssetsExpertInterviewPart5';
import CryptoAssetsExpertInterviewPart6 from './CryptoAssetsExpertInterviewPart6';
import CryptoAssetsExpertInterviewPart7 from './CryptoAssetsExpertInterviewPart7';
import CryptoAssetsExpertInterviewPart8 from './CryptoAssetsExpertInterviewPart8';
import CryptoAssetsExpertInterviewPart9 from './CryptoAssetsExpertInterviewPart9';

function CryptoCustodyRegulationModule() {
  // Define an array of sections that will be included in this module
  const sections = [
    CryptoAssetsExpertInterviewPart1,
    CryptoAssetsExpertInterviewPart2,
    CryptoAssetsExpertInterviewPart3,
    CryptoAssetsExpertInterviewPart4,
    CryptoAssetsExpertInterviewPart5,
    CryptoAssetsExpertInterviewPart6,
    CryptoAssetsExpertInterviewPart7,
    CryptoAssetsExpertInterviewPart8,
    CryptoAssetsExpertInterviewPart9,
  ];

  return (
    <Module sections={sections} pagePath="/crypto-assets-expert-interview" />
  );
}

export default CryptoCustodyRegulationModule;
