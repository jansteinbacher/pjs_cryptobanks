import Crypto from '../images/crypto.png';

function Footer() {
  return (
    <footer className="bg-green-100 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <a href="/" className="text-xl flex items-center mb-4 md:mb-0">
          <img className="w-12 h-auto mr-4" src={Crypto} alt="Crypto" />
          <span className="font-semibold">Cryptobanks</span>
        </a>
        <div className="flex space-x-6 text-gray-600">
          <a href="/" className="hover:text-gray-800 transition">
            Home
          </a>
          <a href="/course-overview" className="hover:text-gray-800 transition">
            Kurse
          </a>
          <a href="/decisiontree" className="hover:text-gray-800 transition">
            Individueller Kurs
          </a>
          <a href="/overview" className="hover:text-gray-800 transition">
            Glossar
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
