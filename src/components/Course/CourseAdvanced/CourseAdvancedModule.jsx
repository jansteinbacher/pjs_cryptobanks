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
  CryptoAssetsAdoption1,
  CryptoAssetsAdoption2,
  CryptoAssetsAdoption3,
  CryptoAssetsAdoption4,
  CryptoAssetsAdoption5,
  CryptoAssetsAdoption6,
  CryptoAssetsAdoption7,
  CryptoAssetsAdoption8,
  CryptoAssetsAdoption9,
  CryptoAssetsAdoption10,
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
    CryptoAssetsAdoption1,
    CryptoAssetsAdoption2,
    CryptoAssetsAdoption3,
    CryptoAssetsAdoption4,
    CryptoAssetsAdoption5,
    CryptoAssetsAdoption6,
    CryptoAssetsAdoption7,
    CryptoAssetsAdoption8,
    CryptoAssetsAdoption9,
    CryptoAssetsAdoption10,
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
