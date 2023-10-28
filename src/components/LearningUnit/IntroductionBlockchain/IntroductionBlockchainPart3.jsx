import ConsensMechanism from '../../../images/courseBeginner/consensMechanism.jpg';
import IntroductionBlockchainSources from './IntroductionBlockchainSources';
import { StoryBoxBernd } from '../../StoryBox';

/**
 * Component representing the second part of the "Blockchain-Technologie" (Blockchain Technology) section. In this part, the concept of consensus mechanisms, specifically Proof of Work (PoW) and Proof of Stake (PoS), is explained. The component discusses how these consensus mechanisms work and their use in blockchain networks like Bitcoin, Ethereum, and Cardano. It includes an image illustrating the topic and features a conversation between Bernd and his colleague Tobias to enhance the learning experience. This part aims to help the audience understand how information integrity is ensured in blockchain technology.
 */

function IntroductionBlockchainPart2() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

  const berndStory = [
    'Bernd ist beeindruckt von dieser Erklärung, aber er hat immer noch Fragen: “Und wie wird sichergestellt, dass die Informationen in der Blockchain echt sind?”',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Konsensmechanismus
      </h2>
      {isComingFromPreviousPage && <StoryBoxBernd paragraphs={berndStory} />}
      <div className="flex justify-center items-center mb-12">
        <img
          src={ConsensMechanism}
          alt="Regulation of Crypto Assets"
          className="w-full md:w-1/2"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Proof of Work
      </h3>

      <p className="mb-12 text-left">
        Proof of Work (PoW) ist ein Konsensmechanismus, der zum Beispiel im
        Bitcoin-Netzwerk verwendet wird. Miner lösen komplexe mathematische
        Rätsel, um neue Blöcke zur Blockchain hinzuzufügen. Dies erfordert
        erhebliche Rechenleistung und Energieaufwand. Der erste Miner, der das
        Rätsel löst, erhält die Belohnung und validiert die Transaktionen im
        Block<a href="#sources"> [4]</a>.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Proof of Stake
      </h3>
      <p className="mb-12 text-left">
        Proof of Stake (PoS) wird in Kryptowährungen wie Ethereum und Cardano
        eingesetzt. Statt Rechenleistung setzen Teilnehmer Kryptowährung als
        Stake ein. Zum Beispiel können Inhaber von Ethereum Token ihre Coins als
        Einsatz verwenden, um Blöcke zu erstellen. Die Wahrscheinlichkeit,
        ausgewählt zu werden, hängt von der Menge der gestakten Coins ab. PoS
        fördert den Kryptowährungsbesitz und reduziert den Energieverbrauch im
        Vergleich zu PoW<a href="#sources"> [4]</a>.
      </p>

      <IntroductionBlockchainSources />
    </div>
  );
}

export default IntroductionBlockchainPart2;
