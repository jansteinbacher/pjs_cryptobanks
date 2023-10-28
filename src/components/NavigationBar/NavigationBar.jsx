import NavigationLinks from './NavigationLinks';
import NavigationLogo from './NavigationLogo';
import Logo from '../../images/Logo.png';

// NavigationBar component for the top navigation of the application
function NavigationBar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-4">
      <div className="flex items-center">
        <NavigationLogo logoSource={Logo} />{' '}
      </div>
      <NavigationLinks />{' '}
    </nav>
  );
}

export default NavigationBar;
