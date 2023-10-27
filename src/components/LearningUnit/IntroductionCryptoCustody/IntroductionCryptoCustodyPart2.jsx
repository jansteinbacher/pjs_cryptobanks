import Wallet from '../../../images/courseExpert/wallet.png';
import IntroductionCryptoCustodySources from './IntroductionCryptoCustodySources';

function IntroductionCryptoCustodyPart2() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Definition und Grundlagen der Kryptoverwahrung
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Wallet</h2>

      <div className="flex justify-center items-center mb-8">
        <img src={Wallet} alt="Wallet" className="w-full md:w-1/2" />
      </div>

      <p className="mb-12 text-justify">
        Unter einer <strong>Wallet</strong> versteht man eine Finanzanwendung,
        die die Verwaltung digitaler Assets ermöglicht. Um eine Transaktion
        durchzuführen muss innerhalb der Wallet eine{' '}
        <strong>digitale Signatur</strong> vorgenommen werden, damit die eigene
        Identität und folglich auch der Auftrag bestätigt werden kann. Diese
        Unterschrift wird anhand von sogenannten <strong>“private”</strong> oder
        <strong>“public keys”</strong> realisiert <a href="#sources">[4]</a>.
        Auf die Signaturen wird in der folgenden Lektion noch genauer
        eingegangen.
      </p>

      <IntroductionCryptoCustodySources />
    </div>
  );
}

export default IntroductionCryptoCustodyPart2;
