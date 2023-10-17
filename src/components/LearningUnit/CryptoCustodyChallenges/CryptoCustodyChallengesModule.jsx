import Module from '../../Module';
import CryptoCustodyChallengesPart1 from './CryptoCustodyChallengesPart1';
import CryptoCustodyChallengesPart2 from './CryptoCustodyChallengesPart2';

function CryptoCustodyChallengesModule() {
  const sections = [CryptoCustodyChallengesPart1, CryptoCustodyChallengesPart2];

  return <Module sections={sections} pagePath="/crypto-custody-challenges" />;
}

export default CryptoCustodyChallengesModule;
