import Crypto from '../../images/crypto.png';

function Logo() {
  return (
    <a href="/" className="text-xl flex items-center mb-4 md:mb-0">
      <img className="w-12 h-auto mr-4" src={Crypto} alt="Crypto" />
      <span className="font-semibold">Cryptobanks</span>
    </a>
  );
}

export default Logo;
