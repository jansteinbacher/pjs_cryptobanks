import Module from '../../Module';
import CryptoAssetsRegulationPart1 from './CryptoAssetsRegulationPart1';
import CryptoAssetsRegulationPart2 from './CryptoAssetsRegulationPart2';
import CryptoAssetsRegulationQuiz from './CryptoAssetsRegulationQuiz';

// Define a function to create the CryptoAssetsRegulationModule component.
function CryptoAssetsRegulationModule() {
  // Create an array of sections that make up the module.
  const sections = [
    CryptoAssetsRegulationPart1,
    CryptoAssetsRegulationPart2,
    CryptoAssetsRegulationQuiz,
  ];

  return <Module sections={sections} pagePath="/crypto-asset-regulation" />;
}

export default CryptoAssetsRegulationModule;
