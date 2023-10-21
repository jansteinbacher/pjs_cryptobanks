import Logo from './Logo';
import NavigationLinks from './NavigationLinks';

function Footer() {
  return (
    <footer className="bg-green-100 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <Logo />
        <NavigationLinks />
      </div>
    </footer>
  );
}

export default Footer;
