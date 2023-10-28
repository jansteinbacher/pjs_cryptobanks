// Import FooterLogo and NavigationLinks components
import FooterLogo from './FooterLogo';
import NavigationLinks from './NavigationLinks';

// Import the Logo image
import Logo from '../../images/Logo.png';

// Footer component that assembles the Footer using the FooterLogo and NavigationLinks components
function Footer() {
  return (
    <footer className="bg-green-100 py-6 w-full mt-24"> {/* Footer container with background color */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full mb-8"> {/* Container for content */}
        <div className="flex flex-col items-center md:items-start"> {/* Logo and text section */}
          <FooterLogo logoSource={Logo} /> {/* Render the FooterLogo component with the Logo image */}
          <div className="mt-4 text-center md:text-left"> {/* Text content */}
            <p>Cryptobanks bietet E-Learning Kurse</p> {/* Line 1 of text */}
            <p>für Bankangestellte zum Thema Kryptoassets.</p> {/* Line 2 of text */}
          </div>
        </div>
        <NavigationLinks /> {/* Render the NavigationLinks component for navigation links */}
      </div>
    </footer>
  );
}

export default Footer; // Export the Footer component
