import Crypto from '../../images/crypto.png';

function NavigationLogo() {
  return (
    <a href="/" className="mb-4 sm:mb-0">
      <div className="text-xl flex items-center">
        <img className="w-12 h-auto mr-4" src={Crypto} alt="Crypto" />
        <span className="text-center tracking-tight">Cryptobanks</span>
      </div>
    </a>
  );
}

export default NavigationLogo;
