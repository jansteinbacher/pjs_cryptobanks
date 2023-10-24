import PropTypes from 'prop-types';

function FooterLogo({ logoSource }) {
  return (
    <a href="/" className="text-xl flex items-center mb-4 md:mb-0">
      <img className="w-12 h-auto mr-4" src={logoSource} alt="Logo" />
      <span className="font-semibold">Cryptobanks</span>
    </a>
  );
}

FooterLogo.propTypes = {
  logoSource: PropTypes.string.isRequired,
};

export default FooterLogo;
