import Module from '../../Module';
import CryptoAssetServicesPart1 from './CryptoAssetServicesPart1';
import CryptoAssetServicesPart2 from './CryptoAssetServicesPart2';
import CryptoAssetServicesPart3 from './CryptoAssetServicesPart3';
import CryptoAssetServicesPart4 from './CryptoAssetServicesPart4';
import CryptoAssetServicesPart5 from './CryptoAssetServicesPart5';
import CryptoAssetServicesPart6 from './CryptoAssetServicesPart6';
import CryptoAssetServicesQuiz from './CryptoAssetServicesQuiz';

// This module is related to crypto asset services.
function CryptoAssetServicesModule() {
  const sections = [
    CryptoAssetServicesPart1,
    CryptoAssetServicesPart2,
    CryptoAssetServicesPart3,
    CryptoAssetServicesPart4,
    CryptoAssetServicesPart5,
    CryptoAssetServicesPart6,
    CryptoAssetServicesQuiz,
  ];

  return <Module sections={sections} pagePath="/crypto-asset-services" />;
}

export default CryptoAssetServicesModule;
