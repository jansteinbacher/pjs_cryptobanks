import FooterLogo from './FooterLogo';
import NavigationLinks from './NavigationLinks';
import Logo from '../../images/Logo.png';

function Footer() {
  return (
    <footer className="bg-green-100 py-6 w-full mt-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full mb-8">
        <div className="flex flex-col items-center md:items-start">
          <FooterLogo logoSource={Logo} />
          <div className="mt-4 text-center md:text-left">
            <p>Cryptobanks bietet E-Learning Kurse</p>
            <p>für Bankangestellte zum Thema Kryptoassts.</p>
          </div>
        </div>
        <NavigationLinks />
      </div>
    </footer>
  );
}

export default Footer;
