import Module from '../../Module';
import OpportunitiesAndChallengesQuiz from './OpportunitiesAndChallengesCryptoAssetsQuiz';
import OpportunitiesAndChallengesPart1 from './OpportunitiesAndChallengesCryptoAssetsPart1';
import OpportunitiesAndChallengesPart2 from './OpportunitiesAndChallengesCryptoAssetsPart2';
import OpportunitiesAndChallengesExpert from './OpportunitiesAndChallengesCryptoAssetsExpert';

function OpportunitiesAndChallengesCryptoAssetsModule() {
  const sections = [
    OpportunitiesAndChallengesPart1,
    OpportunitiesAndChallengesPart2,
    OpportunitiesAndChallengesExpert,
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
