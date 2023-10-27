import Regulation from '../../../images/courseAdvanced/cryptoassetSafekeeping.jpg';
import IntroductionCryptoCustodySources from './IntroductionCryptoCustodySources';
import { StoryBoxTobias } from '../../StoryBox';

function IntroductionCryptoCustodyPart1() {
  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  const tobiasStory = [
    'Simone beauftragt Tobias , erstmal nach einer allgemeinen Definition und grundlegenden Begriffen der Kryptoverwahrung zu recherchieren. Während seiner Recherche stößt Tobias auf eine präzise Definition der Kryptoverwahrung durch die BaFin.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Definition und Grundlagen der Kryptoverwahrung
      </h1>

      {isComingFromPreviousPage && <StoryBoxTobias paragraphs={tobiasStory} />}
      <div className="flex justify-center items-center">
        <img
          src={Regulation}
          alt="Regulation of Crypto Assets"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://pixabay.com/de/illustrations/recht-und-ordnung-gesetz-klausel-6311493/"
        >
          Pixabay
        </a>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Definition</h2>

      <p className="mb-8">
        Bei der Verwendung von Kryptoassets spielt die sichere Verwahrung eine
        bedeutende Rolle. Um den Schutz der Assets vor Verlust, Manipulation
        oder Diebstahl zu gewährleisten bieten bestimmte
        Verwahrungsorganisationen dabei die Dienstleistungen an, die privaten
        Schlüssel der Nutzer aufzubewahren und Transaktionen zu genehmigen{' '}
        <a href="#sources">[1]</a>,<a href="#sources">[2]</a>. Aufgrund der
        Risiken und Komplexität die Kryptoassets mit sich bringen, müssen neue
        Prozesse, Verfahren und eine neue Infrastruktur geschaffen werden, um
        Kundenbedürfnisse zu befriedigen und Sicherheit zu garantieren
        <a href="#sources">[3]</a>,<a href="#sources">[1]</a>. Zwischen den
        Kundenbedürfnissen und der Sicherheit soll infolgedessen die richtige
        Balance hergestellt werden. Die Sicherstellung des privaten Schlüssels
        bringt jedoch auch Probleme in Sachen Kosten, Skalierbarkeit,
        Flexibilität bei der Regulatorik und Benutzerfreundlichkeit mit sich{' '}
        <a href="#sources">[1]</a>.
      </p>

      <IntroductionCryptoCustodySources />
    </div>
  );
}

export default IntroductionCryptoCustodyPart1;
