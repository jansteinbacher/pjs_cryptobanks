import TypesOfBlockchain from '../../../images/courseBeginner/typesOfBlockchain.jpg';
import IntroductionBlockchainSources from './IntroductionBlockchainSources';
import { StoryBoxBernd } from '../../StoryBox';

function IntroductionBlockchainPart2() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );
  const berndStory = [
    'Während sie gemeinsam eine Tasse Kaffee genießen, fragt Bernd Tobias: „Tobias, ich habe gehört, dass es verschiedene Arten von Blockchains gibt. Kannst du mir erklären, was den Unterschied zwischen ihnen ausmacht?”',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Permissioned vs. Permissionless
      </h2>
      {isComingFromPreviousPage && <StoryBoxBernd paragraphs={berndStory} />}
      <div className="flex justify-center items-center">
        <img
          src={TypesOfBlockchain}
          alt="Regulation of Crypto Assets"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://www.freepik.com/free-vector/security-concept-illustration-people-holding-chain_3226083.htm#query=permissioned%20vs%20permissionless%20blockchain&position=1&from_view=search&track=ais"
        >
          Bild von rawpixel.com auf Freepik
        </a>
      </div>
      <p className="mb-12 text-left">
        Die Blockchain-Technologie umfasst Permissioned und Permissionless
        Blockchains. Beide sind dezentral und transparent. Permissioned
        Blockchains erfordern Zugriffsberechtigungen, während Permissionless
        Blockchains für alle offen sind. Konsensmechanismen variieren, ebenso
        wie Skalierbarkeit und Privatsphäre. Permissioned Blockchains passen in
        geschlossene Umgebungen wie Unternehmensanwendungen. Permissionless
        Blockchains sind ideal für offene, dezentrale Anwendungen wie
        Kryptowährungen und DeFi
        <a href="#sources"> [3]</a>.
      </p>

      <IntroductionBlockchainSources />
    </div>
  );
}

export default IntroductionBlockchainPart2;
