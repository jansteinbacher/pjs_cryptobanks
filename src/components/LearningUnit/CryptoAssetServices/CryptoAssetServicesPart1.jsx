import CryptoSet from '../../../images/courseAdvanced/cryptoSet.jpg';
import CryptoAssetServicesSources from './CryptoAssetServicesSources';

function CryptoAssetServicesPart1() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Potenzielle Krypto-Dienstleistungen
      </h1>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify mb-4">
            Randvoll mit umfassendem regulatorischem Wissen stellt sich Simone
            die Frage, welche potenziellen Anwendungen von Kryptoassets im
            Bankensektor bestehen könnten. Durch eine Unterhaltung mit ihrer
            Freundin erfährt sie von der bevorstehenden Digital Asset Conference
            in Frankfurt, auf der sie hoffentlich Antworten auf ihre Frage
            finden kann. Fasziniert von dieser Idee, entschließt sich Simone
            dazu, zwei Wochen später an dieser Konferenz teilzunehmen. Nach
            ihrer Ankunft auf der Konferenz entdeckt sie zahlreiche Stände
            verschiedener Unternehmen. Mit wachsender Begeisterung nähert sich
            Simone Stand um Stand, während die Mitarbeiter der Unternehmen ihr
            ihre jeweiligen Krypto-Dienstleistungen erläutern.
          </p>
          <p>
            Nach ihrer Ankunft auf der Konferenz entdeckt sie zahlreiche Stände
            verschiedener Unternehmen. Mit wachsender Begeisterung nähert sich
            Simone Stand um Stand, während die Mitarbeiter der Unternehmen ihr
            ihre jeweiligen Krypto-Dienstleistungen erläutern.
          </p>
        </div>
      )}
      <h2 className="text-2xl font-semibold text-gray-800 mb-12">
        Handel mit Kryptoassets
      </h2>
      <div className="flex justify-center items-center">
        <img
          src={CryptoSet}
          alt="Verschiedene Kryptoassets"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://www.freepik.com/free-vector/popular-cryptocurrency-logos-set_23678052.htm#query=crypto%20currencies&position=0&from_view=search&track=ais"
        >
          Bild von myriammira auf Freepik
        </a>
      </div>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Am ersten Stand präsentieren die Aussteller Simone den
            Krypto-Handel, die es Investoren ermöglicht, Kryptowährungen mühelos
            zu erwerben und zu veräußern. Dies erinnert Simone an ein
            vergangenes Projekt, bei dem sie aktiv an der Integration von Kauf-
            und Verkaufsoptionen für ETFs in einer Online-Banking-App beteiligt
            war. Gespannt verfolgt sie aufmerksam die Ausführungen der
            Unternehmensvertreter
          </p>
        </div>
      )}
      <p className="mb-8">
        Die Bank bietet den Handel von führenden Kryptoassets an. Neben
        klassischen Coins, wie Bitcoin (BTC) oder Ethereum (ETH) werden auch
        Token, wie Cardano (ADA) oder Polkadot (DOT). Die Kryptoassets können
        mittels Euro, US-Dollar und Schweizer Franken gekauft werden{' '}
        <a href="#sources">[1]</a>.
      </p>

      <CryptoAssetServicesSources />
    </div>
  );
}

export default CryptoAssetServicesPart1;
