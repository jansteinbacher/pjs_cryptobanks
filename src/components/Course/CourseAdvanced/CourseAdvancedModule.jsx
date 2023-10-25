import Module from '../../Module';

import {
  CryptoAssetsRegulationPart1,
  CryptoAssetsRegulationPart2,
  CryptoAssetsRegulationQuiz,
  CryptoAssetServicesPart1,
  CryptoAssetServicesPart2,
  CryptoAssetServicesPart3,
  CryptoAssetServicesPart4,
  CryptoAssetServicesPart5,
  CryptoAssetServicesPart6,
  CryptoAssetServicesQuiz,
  CryptoAssetsAdoptionPart1,
  CryptoAssetsAdoptionPart2,
  CryptoAssetsAdoptionPart3,
  CryptoAssetsAdoptionPart4,
  CryptoAssetsAdoptionPart5,
  CryptoAssetsAdoptionPart6,
  CryptoAssetsAdoptionPart7,
  CryptoAssetsAdoptionPart8,
  CryptoAssetsAdoptionPart9,
  CryptoAssetsAdoptionPart10,
  CryptoAssetsAdoptionQuiz,
} from '../../LearningUnit';

function CourseAdvancedModule() {
  const sections = [
    CryptoAssetsRegulationPart1,
    CryptoAssetsRegulationPart2,
    CryptoAssetsRegulationQuiz,
    CryptoAssetServicesPart1,
    CryptoAssetServicesPart2,
    CryptoAssetServicesPart3,
    CryptoAssetServicesPart4,
    CryptoAssetServicesPart5,
    CryptoAssetServicesPart6,
    CryptoAssetServicesQuiz,
    CryptoAssetsAdoptionPart1,
    CryptoAssetsAdoptionPart2,
    CryptoAssetsAdoptionPart3,
    CryptoAssetsAdoptionPart4,
    CryptoAssetsAdoptionPart5,
    CryptoAssetsAdoptionPart6,
    CryptoAssetsAdoptionPart7,
    CryptoAssetsAdoptionPart8,
    CryptoAssetsAdoptionPart9,
    CryptoAssetsAdoptionPart10,
    CryptoAssetsAdoptionQuiz,
  ];

  return (
    <Module
      sections={sections}
      pagePath="/course-advanced?from=advanced-course"
    />
  );
}

export default CourseAdvancedModule;
