import Module from '../../Module';
import IntroductionCryptoCustodyPart1 from './IntroductionCryptoCustodyPart1';
import IntroductionCryptoCustodyPart2 from './IntroductionCryptoCustodyPart2';
import IntroductionCryptoCustodyPart3 from './IntroductionCryptoCustodyPart3';
import IntroductionCryptoCustodyQuiz from './IntroductionCryptoCustodyQuiz';

function IntroductionCryptoCustodyModule() {
  const sections = [
    IntroductionCryptoCustodyPart1,
    IntroductionCryptoCustodyPart2,
    IntroductionCryptoCustodyPart3,
    IntroductionCryptoCustodyQuiz,
  ];

  return <Module sections={sections} pagePath="/introduction-crypto-custody" />;
}

export default IntroductionCryptoCustodyModule;
