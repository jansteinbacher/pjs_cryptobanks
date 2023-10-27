import Blockchain from '../../../images/courseBeginner/blockchain.png';
import IntroductionBlockchainSources from './IntroductionBlockchainSources';
import { StoryBoxBernd } from '../../StoryBox';

function IntroductionBlockchainPart1() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );
  const berndStory = [
    ' Bernd hat in den letzten Wochen viel über Kryptoassets und Token gelernt, aber er hat immer noch viele Fragen zur zugrundeliegenden Technologie. Er weiß, dass die Blockchain eine entscheidende Rolle in diesem Bereich spielt, versteht jedoch nicht wirklich, wie sie funktioniert. Um sein Wissen zu vertiefen, trifft er sich gerade mit seinem Kollegen Tobias, der in seiner Hochschulzeit viel zu der Blockchain-Technologie geforscht hat.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Blockchain-Technologie
      </h1>

      <ul className="mb-12 list-disc ml-4">
        <li>Funktionsweise (Konsens, PoS, PoW)</li>
        <li>Abgrenzung zur Distributed-Ledger-Technology</li>
        <li>Anwendungsbereiche (Historie etc.)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Funktionsweise
      </h2>
      {isComingFromPreviousPage && <StoryBoxBernd paragraphs={berndStory} />}
      <p className="mb-8">
        {' '}
        Die Blockchain-Technologie stellt eine der grundlegenden Säulen hinter
        Kryptoassets dar. Sie ermöglicht es, Transaktionen in Kryptowährungen
        und anderen Anwendungen in einer vertrauenswürdigen und transparenten
        Weise abzuwickeln, ohne dass eine zentrale Behörde oder Institution
        benötigt wird. Die Essenz der Blockchain besteht darin, eine dezentrale
        und verteilte digitale Datenbank zu schaffen, die Informationen in
        Blöcken speichert und diese Blöcke in einer chronologischen Reihenfolge
        miteinander verknüpft, wodurch eine unveränderliche Kette entsteht
        <a href="#sources"> [1]</a>.
      </p>

      <p className="font-semibold text-gray-600 mb-4">
        Herausstellungsmerkmale der Blockchain-Technologie
        <a href="#sources"> [2]</a>:
      </p>

      <ul className="mb-8 list-disc ml-4">
        <li>Unveränderliche Daten</li>
        <li>Für alle Nutzer transparente und nachvollziehbare Transaktionen</li>
        <li>
          Verteilte (und keine zentrale) sowie konsensuale Datenspeicherung
        </li>
        <li>Verzicht auf Mittelsmänner</li>
      </ul>

      <div className="flex justify-center items-center">
        <img
          src={Blockchain}
          alt="Blockchain"
          className="w-full md:w-1/2 mb-4"
        />
      </div>

      <IntroductionBlockchainSources />
    </div>
  );
}

export default IntroductionBlockchainPart1;
