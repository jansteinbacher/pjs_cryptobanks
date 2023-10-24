import PropTypes from 'prop-types';

function NavigationLogo({ logoSource }) {
  return (
    <a href="/" className="mb-4 sm:mb-0">
      <div className="text-xl flex items-center">
        <img className="w-12 h-auto mr-4" src={logoSource} alt="Logo" />
        <span className="text-center tracking-tight">Cryptobanks</span>
      </div>
    </a>
  );
}

NavigationLogo.propTypes = {
  logoSource: PropTypes.string.isRequired,
};

export default NavigationLogo;
