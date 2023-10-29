import Currencies from '../../../images/courseBeginner/currencies.jpg';
import IntroductionCryptoAssetsSources from './IntroductionCryptoAssetsSources';
import Chapter14Audio from '../../../audio/chapter14.mp3';
import { StoryBoxBernd } from '../../StoryBox';

/**
 * Component representing the fourth part of the "Grundverständnis zu Kryptoassets" (Understanding Crypto Assets) section. In this part, the concept of tokenization is explained. Bernd's quest for knowledge leads him to explore tokenization, its definition, and the process of digitizing various types of assets using tokens. The component includes an audio element for listening convenience.
 */

function IntroductionCryptoAssetsPart4() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

  const berndStory = [
    'Bernds Wissensreise führte ihn immer tiefer in die Welt der Kryptoassets. Doch bei einem bestimmten Begriff hatte er noch einige Fragezeichen im Kopf: “Tokenisierung”. Dieses Wort war in vielen Zusammenhängen gefallen, aber er konnte es nirgends zuordnen.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Tokenisierung
      </h2>
      {isComingFromPreviousPage && <StoryBoxBernd paragraphs={berndStory} />}
      <div className="flex mb-8 justify-center items-center">
        <img src={Currencies} alt="Token" className="w-full md:w-1/2 mb-4" />
      </div>
      <p className="text-center mb-4">
        Höre dir den folgenden Text als Audio an:
      </p>
      <div className="flex justify-center items-center mb-8">
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <audio controls>
          <source src={Chapter14Audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <p className="mb-4 text-left">
        <strong>Tokenisierung</strong> wird als der Digitalisierungsprozess
        eines materiellen oder immateriellen Vermögenswertes definiert. Es
        besteht die Möglichkeit jeden Vermögenswert oder jedes Recht in Form
        eines Token zu speichern.
      </p>
      <p className="mb-4 text-left">
        Dieser Token wird algorithmisch erzeugt, digital dargestellt und kann
        über ein Blockchain-Netzwerk gehandelt werden <a href="#sources">[7]</a>
        ,<a href="#sources">[8]</a>.
      </p>
      <p className="mb-4 text-left">
        Wichtig ist jedoch, dass hierbei die unterschiedlichen Rechtslagen und
        Rahmenbedingungen eines Landes zu berücksichtigen sind, in dem der Token
        den Vermögenswert darstellt.
      </p>
      <p className="mb-4 text-left">
        {' '}
        Nur wenn die zuständigen Landesbehörden das Konzept der Tokenisierung
        anerkennen, kann dieser unter gesetzlichem Rahmen wirksam sein{' '}
        <a href="#sources">[9]</a>.{' '}
      </p>
      <p className="mb-12 text-left">
        <strong>Ethereum Request for Comments (ERC)</strong> ist ein bekannter
        Standard für die Erstellung tokenisierter Formen virtueller
        Vermögenswerte <a href="#sources">[10]</a>.
      </p>
      <IntroductionCryptoAssetsSources />
    </div>
  );
}
export default IntroductionCryptoAssetsPart4;
