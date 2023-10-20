import NavigationLinks from './NavigationLinks';
import NavigationLogo from './NavigationLogo';

function NavigationBar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-4">
      <div className="flex items-center">
        <NavigationLogo />
      </div>

      <NavigationLinks />
    </nav>
  );
}

export default NavigationBar;
