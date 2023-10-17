import { CourseModule } from '../../CourseStructure';

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
    <CourseModule
      sectionContent={sections}
      courseURL="/course-expert?from=expert-course"
      completionRedirectURL="/course-expert-end"
    />
  );
}

export default CourseExpertModule;
