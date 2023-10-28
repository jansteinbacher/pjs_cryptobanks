import Module from '../../Module';
//fill the beginner course with articles from the learning unit folder

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
  IntroductionBlockchainPart5,
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
    IntroductionBlockchainPart5,
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
    <Module
      sections={sections}
      pagePath="/course-beginner?from=beginner-course"
    />
  );
}

export default CourseBeginnerModule;
