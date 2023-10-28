import Handshake from '../../../images/courseAdvanced/handshake.jpg';
import CryptoAssetServicesSources from './CryptoAssetServicesSources';
import { StoryBoxSimone } from '../../StoryBox';

function CryptoAssetServicesPart6() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const simoneStory = [
    'Durch intensive Gespräche mit den Ausstellern hat Simone bereits wertvolle Einblicke in potenzielle Krypto-Dienstleistungen gewonnen. Während sie auf dem Weg zum Restaurant ist, fällt ihr Blick auf einen weiteren Stand, der ihre Aufmerksamkeit sofort einfängt.',
    'Durch intensive Gespräche mit den Ausstellern hat Simone bereits wertvolle Einblicke in potenzielle Krypto-Dienstleistungen gewonnen. Während sie auf dem Weg zum Restaurant ist, fällt ihr Blick auf einen weiteren Stand, der ihre Aufmerksamkeit sofort einfängt.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Krypto-Kredite
      </h2>
      {isComingFromPreviousPage && <StoryBoxSimone paragraphs={simoneStory} />}
      <div className="flex justify-center items-center mb-12">
        <img src={Handshake} alt="Handschlag" className="w-full md:w-1/2" />
      </div>

      <p className="mb-8">
        Der Unterschied zu einem herkömmlichen Kredit liegt in der
        Berücksichtigung der Kreditwürdigkeit. Bei den Krediten auf der
        Blockchain-Infrastruktur wird ein{' '}
        <strong>
          gewisser Teil der Kryptoassets des Kreditnehmers als Collateral
          hinterlegt
        </strong>
        . Im Falle einer nicht fristgerechten Zurückzahlung des angegebenen
        Betrags, kann der Kreditgeber, die hinterlegten Kryptoassets liquidieren{' '}
        <a href="#sources">[11]</a>.
      </p>

      <CryptoAssetServicesSources />
    </div>
  );
}

export default CryptoAssetServicesPart6;
