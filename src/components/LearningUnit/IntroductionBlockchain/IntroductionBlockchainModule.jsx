import Module from '../../Module';
import IntroductionBlockchainPart1 from './IntroductionBlockchainPart1';
import IntroductionBlockchainPart2 from './IntroductionBlockchainPart2';
import IntroductionBlockchainPart3 from './IntroductionBlockchainPart3';
import IntroductionBlockchainPart4 from './IntroductionBlockchainPart4';
import IntroductionBlockchainPart5 from './IntroductionBlockchainPart5';
import IntroductionBlockchainQuiz from './IntroductionBlockchainQuiz';
import IntroductionBlockchainExpert from './IntroductionBlockchainExpert';

function IntroductionBlockchainModule() {
  const sections = [
    IntroductionBlockchainPart1,
    IntroductionBlockchainPart2,
    IntroductionBlockchainPart3,
    IntroductionBlockchainPart4,
    IntroductionBlockchainPart5,
    IntroductionBlockchainQuiz,
    IntroductionBlockchainExpert,
  ];

  return <Module sections={sections} pagePath="/introduction-blockchain" />;
}

export default IntroductionBlockchainModule;
