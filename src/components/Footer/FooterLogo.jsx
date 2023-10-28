// Import PropTypes library to define prop types for the component
import PropTypes from 'prop-types';

// FooterLogo component displays and styles the logo in the footer
function FooterLogo({ logoSource }) {
  return (
    <a href="/" className="text-xl flex items-center mb-4 md:mb-0">
      <img className="w-12 h-auto mr-4" src={logoSource} alt="Logo" /> {/* Display the logo */}
      <span className="font-semibold">Cryptobanks</span> {/* Display the text "Cryptobanks" */}
    </a>
  );
}

// Define the expected prop types for the FooterLogo component
FooterLogo.propTypes = {
  logoSource: PropTypes.string.isRequired, // Requires a string for the logo source
};

export default FooterLogo; // Export the FooterLogo component
