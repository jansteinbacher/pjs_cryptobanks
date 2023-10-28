import dltvideo from '../../../images/courseBeginner/DLT.mp4';
import IntroductionBlockchainSources from './IntroductionBlockchainSources';
import { StoryBoxBernd } from '../../StoryBox';

function IntroductionBlockchainPart3() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

  const berndStory = [
    'Während seiner Recherche zu Blochchain trifft Bernd häufig auf den Bergriff Distributed Ledger Technology (DLT). Ist Blockchain und DLT das Gleiche? Wenn nein, worin liegt der Unterschied? Wo findet DLT Anwendung? Wird es auch in seiner Branche, der Finanzbranche verwendet?',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Abgrenzung zur Distributed-Ledger-Technologie
      </h2>
      {isComingFromPreviousPage && <StoryBoxBernd paragraphs={berndStory} />}
      <p className="mb-12 text-left">
        Die Blockchain-Technologie und die Distributed Ledger Technology (DLT)
        teilen den Ansatz der dezentralisierten Datenverwaltung, bieten jedoch
        unterschiedliche Umsetzungen. Beide ermöglichen verteilte
        Datenspeicherung und Transaktionstransparenz, wobei die Blockchain
        spezifisch Transaktionen in Blöcken verknüpft, während DLT eine breitere
        Palette von Technologien umfasst. Der Unterschied erstreckt sich auch
        auf die angewendeten Konsensmechanismen – Proof of Work oder Proof of
        Stake in der Blockchain im Vergleich zu verschiedenen Ansätzen in der
        DLT. Letztendlich vereinen sie das Ziel der erhöhten Sicherheit und
        Transparenz, aber bieten unterschiedliche Wege, um die Bedürfnisse
        verschiedener Branchen anzusprechen <a href="#sources"> [5]</a>.
      </p>

      <div className="flex justify-center items-center mb-12">
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <video controls className="w-full md:w-1/2 h-full rounded-lg">
          <source src={dltvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <IntroductionBlockchainSources />
    </div>
  );
}

export default IntroductionBlockchainPart3;
