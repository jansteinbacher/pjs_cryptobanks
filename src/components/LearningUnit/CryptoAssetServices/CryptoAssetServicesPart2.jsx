import Staking from '../../../images/courseAdvanced/staking.jpg';
import CryptoAssetServicesSources from './CryptoAssetServicesSources';

function CryptoAssetServicesPart2() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Staking</h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Neben dem Handel von Coins und Tokens erzählen die Aussteller Simone
            über eine weitere Dienstleistung, mit welcher die Kunden ihr zuvor
            gehandelten Kryptoassets nutzen könnne, um passives Einkommen zu
            generieren. Gespannt hört sich Simone die weitere
            Kryptoasset-Dienstleistung an
          </p>
        </div>
      )}
      <div className="flex justify-center items-center">
        <img src={Staking} alt="Blockchain" className="w-full md:w-1/2" />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://www.freepik.com/free-vector/flat-design-staking-illustration_25760032.htm#query=proof%20of%20stake&position=0&from_view=search&track=ais"
        >
          Freepik{' '}
        </a>
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
