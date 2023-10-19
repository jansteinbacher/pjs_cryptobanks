import Module from '../../Module';

import {
  IntroductionCryptoCustodyPart1,
  IntroductionCryptoCustodyPart2,
  IntroductionCryptoCustodyPart3,
  IntroductionCryptoCustodyQuiz,
  CryptoCustodyApplicationAreasPart1,
  CryptoCustodyApplicationAreasPart2,
  CryptoCustodyApplicationAreasPart3,
  CryptoCustodyApplicationAreasPart4,
  CryptoCustodyApplicationAreasPart5,
  CryptoCustodyApplicationAreasPart6,
  CryptoCustodyApplicationAreasQuiz,
  CryptoCustodyRegulationPart1,
  CryptoCustodyRegulationPart2,
  CryptoCustodyRegulationQuiz,
  CryptoCustodyChallengesPart1,
  CryptoCustodyChallengesPart2,
} from '../../LearningUnit';

function CourseExpertModule() {
  const sections = [
    IntroductionCryptoCustodyPart1,
    IntroductionCryptoCustodyPart2,
    IntroductionCryptoCustodyPart3,
    IntroductionCryptoCustodyQuiz,
    CryptoCustodyApplicationAreasPart1,
    CryptoCustodyApplicationAreasPart2,
    CryptoCustodyApplicationAreasPart3,
    CryptoCustodyApplicationAreasPart4,
    CryptoCustodyApplicationAreasPart5,
    CryptoCustodyApplicationAreasPart6,
    CryptoCustodyApplicationAreasQuiz,
    CryptoCustodyRegulationPart1,
    CryptoCustodyRegulationPart2,
    CryptoCustodyRegulationQuiz,
    CryptoCustodyChallengesPart1,
    CryptoCustodyChallengesPart2,
  ];

  return (
    <Module sections={sections} pagePath="/course-expert?from=expert-course" />
  );
}

export default CourseExpertModule;
