import CryptoAssetServicesSources from './CryptoAssetServicesSources';
import { StoryBoxSimone } from '../../StoryBox';
import CryptoStocks from '../../../images/courseAdvanced/CryptoStocks.jpg';

/**
 * Component representing the third part of the Crypto Asset Services module.
 * It discusses Kryptowertpapiere (cryptosecurities) and the role of the bank in handling cryptocurrency securities transactions.
 * It mentions the direct bilateral trading and the choice for investors to manage these securities in their own wallets or use the bank's traditional security deposit service.
 */

function CryptoAssetServicesPart3() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const simoneStory = [
    'Am benachbarten Stand erfährt Simone von den Ausstellern, dass sie eine digitale Infrastruktur zur Integration des Wertpapierhandels auf blockchainbasierten Systemen entwickelt haben.',
    'Dank ihrer Unterhaltung mit ihrer Freundin ist Simone bereits darüber informiert, dass die rechtlichen Rahmenbedingungen für elektronische Wertpapiere in Deutschland schon fortgeschritten sind. Mit großer Neugier lauscht sie gespannt weiter.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Kryptowertpapiere
      </h2>
      {isComingFromPreviousPage && <StoryBoxSimone paragraphs={simoneStory} />}
      <div className="flex justify-center items-center mb-12">
        <img
          src={CryptoStocks}
          alt="Verschiedene Kryptoassets"
          className="w-full md:w-1/2"
        />
      </div>

      <p className="mb-4">
        <strong>
          Die Bank übernimmt bei der Abwicklung von
          Kryptowertpapier-Transaktionen die Rolle des Registerführers und der
          Zahlstelle.
        </strong>
      </p>
      <p className="mb-4">
        Gemäß den rechtlichen Vorgaben für{' '}
        <strong>elektronische Wertpapiere</strong> <a href="#sources">[3]</a>{' '}
        erfolgt die Registrierung des Papiers in einem{' '}
        <strong>dezentralen Blockchain-Register</strong>. Im Unterschied zur
        Emission herkömmlicher Wertpapiere ist{' '}
        <strong>kein Zentralverwahrer</strong> oder weitere Zwischeninstanz
        erforderlich. Dies ermöglicht den Parteien den{' '}
        <strong>direkten bilateralen Handel</strong>.
      </p>
      <p className="mb-12">
        Darüber hinaus steht den Anlegern die Entscheidung offen, ob sie ihre
        Kryptowertpapiere als ERC-20-Token in ihrer Blockchain-Wallet
        eigenständig verwalten oder die konventionellen Wertpapierdepots der
        Bank in Anspruch nehmen möchten <a href="#sources">[4]</a>,{' '}
        <a href="#sources">[5]</a>.
      </p>

      <CryptoAssetServicesSources />
    </div>
  );
}

export default CryptoAssetServicesPart3;
