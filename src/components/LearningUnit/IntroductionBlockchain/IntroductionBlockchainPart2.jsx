import TypesOfBlockchain from '../../../images/courseBeginner/typesOfBlockchain.jpg';
import IntroductionBlockchainSources from './IntroductionBlockchainSources';
import { StoryBoxBernd } from '../../StoryBox';

/**
 * Component representing the second part of the "Blockchain-Technologie" (Blockchain Technology) section. In this part, the concept of permissioned vs. permissionless blockchains is discussed. The component highlights the differences between these two types of blockchains, including access permissions, consensus mechanisms, scalability, and privacy. It mentions the suitability of permissioned blockchains for closed environments like enterprise applications and permissionless blockchains for open, decentralized applications like cryptocurrencies and DeFi. The component also features a story involving Bernd and his colleague Tobias to enhance the learning experience.
 * This component includes an image illustrating the differences between permissioned and permissionless blockchains.
 */

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
      <div className="flex justify-center items-center mb-12">
        <img
          src={TypesOfBlockchain}
          alt="Regulation of Crypto Assets"
          className="w-full md:w-1/2"
        />
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
