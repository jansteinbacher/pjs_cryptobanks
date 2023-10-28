import Staking from '../../../images/courseAdvanced/staking.jpg';
import CryptoAssetServicesSources from './CryptoAssetServicesSources';
import { StoryBoxSimone } from '../../StoryBox';

function CryptoAssetServicesPart2() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const simoneStory = [
    'Neben dem Handel von Coins und Tokens erzählen die Aussteller Simone über eine weitere Dienstleistung, mit welcher die Kunden ihr zuvor gehandelten Kryptoassets nutzen könnne, um passives Einkommen zu generieren. Gespannt hört sich Simone die weitere Kryptoasset-Dienstleistung an.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Staking</h2>
      {isComingFromPreviousPage && <StoryBoxSimone paragraphs={simoneStory} />}
      <div className="flex justify-center items-center mb-12">
        <img src={Staking} alt="Blockchain" className="w-full md:w-1/2" />
      </div>

      <p className="mb-8">
        Der Staking-Service ermöglicht es den Kunden der Bank, passive Einkommen
        durch das Halten von Kryptowährungen zu generieren. Dieser Service
        ermöglicht es den Kunden, Belohnungen in Form von neu generierten
        Kryptoassets zu erhalten, indem sie ihre Kryptowährungen bei der Bank
        halten. Ähnlich wie bei einem Sparkonto können Kunden passive Einkommen
        generieren <a href="#sources">[2]</a>.
      </p>

      <CryptoAssetServicesSources />
    </div>
  );
}

export default CryptoAssetServicesPart2;
