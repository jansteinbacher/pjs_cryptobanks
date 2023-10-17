import Module from '../../Module';
import OpportunitiesAndChallengesQuiz from './OpportunitiesAndChallengesCryptoAssetsQuiz';
import OpportunitiesAndChallengesPart1 from './OpportunitiesAndChallengesCryptoAssetsPart1';
import OpportunitiesAndChallengesPart2 from './OpportunitiesAndChallengesCryptoAssetsPart2';

function OpportunitiesAndChallengesCryptoAssetsModule() {
  const sections = [
    OpportunitiesAndChallengesPart1,
    OpportunitiesAndChallengesPart2,
    OpportunitiesAndChallengesQuiz,
  ];
  return (
    <Module
      sections={sections}
      pagePath="/opportunities-challenges-crypto-assets"
    />
  );
}

export default OpportunitiesAndChallengesCryptoAssetsModule;
