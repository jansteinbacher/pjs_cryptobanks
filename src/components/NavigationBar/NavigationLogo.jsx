import PropTypes from 'prop-types';

// NavigationLogo component for rendering the application's logo
function NavigationLogo({ logoSource }) {
  return (
    <a href="/" className="mb-4 sm:mb-0">
      <div className="text-xl flex items-center">
        <img className="w-12 h-auto mr-4" src={logoSource} alt="Logo" />
        <span className="text-center tracking-tight">CryptoBanks</span>
      </div>
    </a>
  );
}

// Define prop types for the NavigationLogo component
NavigationLogo.propTypes = {
  logoSource: PropTypes.string.isRequired, // The source URL of the logo image
};

export default NavigationLogo;
