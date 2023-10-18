import Bernd from '../../../images/courseBeginner/charakterBernd.png';
import Currencies from '../../../images/courseBeginner/currencies.png';
import IntroductionCryptoAssetsSources from './IntroductionCryptoAssetsSources';

function IntroductionCryptoAssetsPart4() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Tokenisierung
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg flex items-start">
          <img src={Bernd} alt="Charakterbild" className="w-1/12 h-auto mr-4" />
          <p className="italic text-justify flex-grow">
            Bernds Wissensreise führte ihn immer tiefer in die Welt der
            Kryptoassets. Doch bei einem bestimmten Begriff hatte er noch einige
            Fragezeichen im Kopf: &ldquo;Tokenisierung&rdquo;. Dieses Wort war
            in vielen Zusammenhängen gefallen, aber er konnte es nirgends
            zuordnen.
          </p>
        </div>
      )}
      <div className="flex mb-8 justify-center items-center">
        <img src={Currencies} alt="Token" className="w-full md:w-1/2 mb-4" />
      </div>
      <p className="mb-12 text-justify">
        Tokenisierung wird als der Digitalisierungsprozess eines materiellen
        oder immateriellen Vermögenswertes definiert. Es besteht die Möglichkeit
        jeden Vermögenswert oder jedes Recht in Form eines Token zu speichern.
        Dieser Token wird algorithmisch erzeugt, digital dargestellt und kann
        über ein Blockchain-Netzwerk gehandelt werden.
        <a href="#sources">[7]</a>,<a href="#sources">[8]</a>
        Wichtig ist jedoch, dass hierbei die unterschiedlichen Rechtslagen und
        Rahmenbedingungen eines Landes zu berücksichtigen ist, in dem der Token
        den Vermögenswert darstellt. Nur wenn die zuständigen Landesbehörden das
        Konzept der Tokenisierung anerkennen, kann dieser unter gesetzlichem
        Rahmen wirksam sein <a href="#sources">[9]</a>. Ethereum Request for
        Comments (ERC) ist ein bekannter Standard für die Erstellung
        tokenisierter Formen virtueller Vermögenswerte{' '}
        <a href="#sources">[10]</a>.
      </p>
      <IntroductionCryptoAssetsSources />
    </div>
  );
}
export default IntroductionCryptoAssetsPart4;
