import Module from '../../Module';
import CryptoCustodyApplicationAreasPart1 from './CryptoCustodyApplicationAreasPart1';
import CryptoCustodyApplicationAreasPart2 from './CryptoCustodyApplicationAreasPart2';
import CryptoCustodyApplicationAreasPart3 from './CryptoCustodyApplicationAreasPart3';
import CryptoCustodyApplicationAreasPart4 from './CryptoCustodyApplicationAreasPart4';
import CryptoCustodyApplicationAreasPart5 from './CryptoCustodyApplicationAreasPart5';
import CryptoCustodyApplicationAreasPart6 from './CryptoCustodyApplicationAreasPart6';
import CryptoCustodyApplicationAreasQuiz from './CryptoCustodyApplicationAreasQuiz';

function CryptoCustodyApplicationAreasModule() {
  const sections = [
    CryptoCustodyApplicationAreasPart1,
    CryptoCustodyApplicationAreasPart2,
    CryptoCustodyApplicationAreasPart3,
    CryptoCustodyApplicationAreasPart4,
    CryptoCustodyApplicationAreasPart5,
    CryptoCustodyApplicationAreasPart6,
    CryptoCustodyApplicationAreasQuiz,
  ];

  return (
    <Module sections={sections} pagePath="/crypto-custody-application-areas" />
  );
}

export default CryptoCustodyApplicationAreasModule;
