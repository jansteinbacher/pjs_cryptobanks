import { CourseModule } from '../../CourseStructure';

import {
  IntroductionCryptoAssetsPart1,
  IntroductionCryptoAssetsPart2,
  IntroductionCryptoAssetsPart3,
  IntroductionCryptoAssetsPart4,
  IntroductionCryptoAssetsPart5,
  IntroductionCryptoAssetsPart6,
  IntroductionCryptoAssetsExpert,
  IntroductionCryptoAssetsQuiz,
  IntroductionBlockchainPart1,
  IntroductionBlockchainPart2,
  IntroductionBlockchainPart3,
  IntroductionBlockchainPart4,
  IntroductionBlockchainExpert,
  IntroductionBlockchainQuiz,
  TypesOfCryptoAssetsPart1,
  TypesOfCryptoAssetsPart2,
  TypesOfCryptoAssetsPart3,
  TypesOfCryptoAssetsPart4,
  TypesOfCryptoAssetsPart5,
  TypesOfCryptoAssetsExpert,
  TypesOfCryptoAssetsQuiz,
  OpportunitiesAndChallengesPart1,
  OpportunitiesAndChallengesPart2,
  OpportunitiesAndChallengesCryptoAssetsExpert,
  OpportunitiesAndChallengesCryptoAssetsQuiz,
} from '../../LearningUnit';

function CourseBeginnerModule() {
  const sections = [
    IntroductionCryptoAssetsPart1,
    IntroductionCryptoAssetsPart2,
    IntroductionCryptoAssetsPart3,
    IntroductionCryptoAssetsPart4,
    IntroductionCryptoAssetsPart5,
    IntroductionCryptoAssetsExpert,
    IntroductionCryptoAssetsPart6,
    IntroductionCryptoAssetsQuiz,
    IntroductionBlockchainPart1,
    IntroductionBlockchainPart2,
    IntroductionBlockchainPart3,
    IntroductionBlockchainPart4,
    IntroductionBlockchainExpert,
    IntroductionBlockchainQuiz,
    TypesOfCryptoAssetsPart1,
    TypesOfCryptoAssetsPart2,
    TypesOfCryptoAssetsPart3,
    TypesOfCryptoAssetsPart4,
    TypesOfCryptoAssetsPart5,
    TypesOfCryptoAssetsExpert,
    TypesOfCryptoAssetsQuiz,
    OpportunitiesAndChallengesPart1,
    OpportunitiesAndChallengesPart2,
    OpportunitiesAndChallengesCryptoAssetsExpert,
    OpportunitiesAndChallengesCryptoAssetsQuiz,
  ];

  return (
    <CourseModule
      sectionContent={sections}
      courseURL="/course-beginner?from=beginner-course"
      completionRedirectURL="/course-beginner-end"
    />
  );
}

export default CourseBeginnerModule;
