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
  ];

  return (
    <Module
      sections={sections}
      pagePath="/course-advanced?from=advanced-course"
    />
  );
}

export default CourseAdvancedModule;
