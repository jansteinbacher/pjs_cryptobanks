import CryptoAssetServicesSources from './CryptoAssetServicesSources';
import { StoryBoxSimone } from '../../StoryBox';

function CryptoAssetServicesPart3() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const simoneStory = [
    'Am benachbarten Stand erfährt Simone von den Ausstellern, dass sie eine digitale Infrastruktur zur Integration des Wertpapierhandels auf blockchainbasierten Systemen entwickelt haben.',
    'Dank ihrer Unterhaltung mit ihrer Freundin ist Simone bereits darüber informiert, dass die rechtlichen Rahmenbedingungen für elektronische Wertpapiere in Deutschland bereits fortgeschritten sind. Mit großer Neugier lauscht sie gespannt weiter.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Kryptowertpapiere
      </h2>
      {isComingFromPreviousPage && <StoryBoxSimone paragraphs={simoneStory} />}
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://pixabay.com/de/illustrations/recht-und-ordnung-gesetz-klausel-6311493/"
        >
          Bild folgt noch
        </a>
      </div>

      <p className="mb-8">
        Die Bank übernimmt bei der Abwicklung von Kryptowertpapier-Transaktionen
        die Rolle des Registerführers und der Zahlstelle. Gemäß den rechtlichen
        Vorgaben für elektronische Wertpapiere <a href="#sources">[3]</a>{' '}
        erfolgt die Registrierung des Papiers in einem dezentralen
        Blockchain-Register. Im Unterschied zur Emission herkömmlicher
        Wertpapiere ist kein Zentralverwahrer oder weitere Zwischeninstanz
        erforderlich. Dies ermöglicht den Parteien den direkten bilateralen
        Handel. Darüber hinaus steht den Anlegern die Entscheidung offen, ob sie
        ihre Kryptowertpapiere als ERC-20-Token in ihrer Blockchain-Wallet
        eigenständig verwalten oder die konventionellen Wertpapierdepots der
        Bank in Anspruch nehmen möchten <a href="#sources">[4]</a>,{' '}
        <a href="#sources">[5]</a>.
      </p>

      <CryptoAssetServicesSources />
    </div>
  );
}

export default CryptoAssetServicesPart3;
