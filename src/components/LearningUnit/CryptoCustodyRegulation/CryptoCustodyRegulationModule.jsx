import Module from '../../Module';
import CryptoCustodyRegulationPart1 from './CryptoCustodyRegulationPart1';
import CryptoCustodyRegulationPart2 from './CryptoCustodyRegulationPart2';
import CryptoCustodyRegulationQuiz from './CryptoCustodyRegulationQuiz';

function CryptoCustodyRegulationModule() {
  const sections = [
    CryptoCustodyRegulationPart1,
    CryptoCustodyRegulationPart2,
    CryptoCustodyRegulationQuiz,
  ];

  return <Module sections={sections} pagePath="/crypto-custody-regulation" />;
}

export default CryptoCustodyRegulationModule;
