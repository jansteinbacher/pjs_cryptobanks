import React, { useState } from 'react';
import Challenges from '../../../images/courseBeginner/challenges.png';

const Sources = ({ sources }) => {
  const [showSources, setShowSources] = useState(false);

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  return (
    <div className="sources border border-gray-400 rounded p-4">
      <button
        className="text-lg font-semibold"
        id="sources"
        onClick={toggleSources}
      >
        Quellen:
      </button>
      {showSources && (
        <div className="source-list leading-relaxed mt-4">
          <ul>
            {sources.map((source, index) => (
              <li id={index + 1} key={index}>
                [{index + 1}] {source}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const OpportunitiesAndChallengesPart1 = () => {
  const articlesources = [
    'H. Meisner, “Neue Herausforderungen in der Finanzsphäre,” in Finanzwirtschaft in der Internetökonomie. Wiesbaden: Springer Gabler, 2021, pp. 179–218.',
    'D. Kerscher, Bitcoin: Funktionsweise, Risiken und Chancen der digitalen Währung. Dingolfing: Kemacon UG, 2014',
    'I. Allison, “Divisions in Sam Bankman-Fried’s Crypto Empire Blur on His Trading Titan Alameda’s Balance Sheet,” The Atlanta Journal Constitution, Nov. 2, 2022. [Online], Available: https://www.coindesk.com/business/2022/11/02/divisions-in-sam-bankman-frieds-crypto-empire-blur-on-his-trading-titan-alamedas-balance-sheet/. [Accessed Sept. 22, 2023].',
    'G. B. Gorton and J. Zhang, Bank Runs During Crypto Winter. To be published.  [Online]. Available: http://dx.doi.org/10.2139/ssrn.4447703. [Accessed: Sept. 22, 2023].',
    'A. de Vries, U. Gallersdörfer, L. Klaaßen, C. Stoll, “Revisiting Bitcoin’s carbon footprint,” Joule, vol. 6, pp. 498–502, 2022.',
    'M. Tewes, M. Bauer, G. Holz, “Security Tokenization,” Porsche Consulting, 2023. [Online]. Available: https://www.porsche-consulting.com/sites/default/files/2023-07/digital_assets_c_porsche_consulting_2023_0.pdf. [Accessed: Sept. 22, 2023].',
  ];

  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course'
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        Herausforderungen und Zukunftsaussichten von Kryptoassets
      </h1>

      <ul className="mb-12 list-disc ml-4">
        <li>Herausforderungen von Kryptoassets</li>
        <li>Zukunftsaussichten von Kryptoassets</li>
      </ul>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className="italic text-justify">
            Bernd ist sich nach all den bisher erlangten Informationen jedoch
            noch nicht sicher welche Unsicherheiten bzw. Risiken Kryptoassets
            mit sich bringen und ob es sich für die Zukunft lohnt, sich weiter
            mit dem Thema auseinanderzusetzen. Seine Kollegin Simone erzählt ihm
            von einer Diskussionsrunde, bei welcher verschiedene Experten ihre
            Standpunkte teilen. Gespannt darauf, reserviert Bernd sich einen
            Platz und freut sich auf die Gelegenheit, mehr Klarheit über die
            Risiken und Chancen von Kryptoassets zu erhalten. Während der
            Diskussion hört er aufmerksam zu, wie die Experten ihre Perspektiven
            teilen.
          </p>
        </div>
      )}

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Herausforderungen von Kryptoassets
      </h2>

      <p className="mb-8 text-justify">
        Eine der bisher größten Herausforderungen der Blockchain-Technologie ist
        die Handhabung mit einer erhöhten Netzwerkauslastung. Durch erhöhtes
        Datenvolumen kann es zu einer Verzögerung von Transaktionen kommen.
        Dieses Problem wird als{' '}
        <span className="font-bold"> Skalierungsproblem </span> bezeichnet. Das
        Kapazitätsproblem geht darüber hinaus mit einem hohen Energieverbrauch
        und höheren Kosten einher <a href="#sources">[1]</a>.
      </p>

      <p className="mb-8 text-justify">
        Des Weiteren sind{' '}
        <span className="font-bold">fehlende Regulatorien</span> eine weitere
        Herausforderung von Kryptoassets. So sind beispielsweise aufgrund von
        fehlenden regulatorischen Rahmenbedingungen Bitcoin vor Hackerangriffen
        nicht geschützt, was somit ein großes Risiko für das System darstellt{' '}
        <a href="#sources">[2]</a>. Besonders ins Gewicht fällt der Skandal von
        FTX. Hierbei kam es zur unsachgemäßen Handhabung der Kundengelder, indem
        die Einzahlungen der Nutzer zur weiteren Investitionen verwendet wurde.
        Mit Offenlegung der dubiosen Geschäfte kam es zum Zusammenbruch, wodurch
        viele Investoren Geld verloren<a href="#sources">[3]</a>.
      </p>

      <p className="mb-8 text-justify">
        Auch die <span className="font-bold">hohe Volatilität</span> bei
        Kryptowährungen stellt eine Herausforderung dar. Jede Veränderung am
        Markt oder in der Regulatorik bringt starke Preisschwankungen mit sich{' '}
        <a href="#sources">[1]</a>. Beispielsweise können die die drei
        verschiedenen Kryptowinter genannt werden. Der Begriff Kryptowinter
        bezieht sich dabei auf ein extremes Tief auf dem gesamten
        Kryptowährungsmarkt. Die fallenden Preise des letzten Kryptowinter
        führten zu Probleme eines großen Krypto-Hedgefonds und einem Bank Run
        auf verschiedene Kryptounternehmen. Diese Entwicklung führte zur
        Insolvenz mehrerer großer Kryptounternehmen, was sowohl Haushalte als
        auch Unternehmen Verluste in Milliardenhöhe bescherte. Die Auswirkungen
        dieses Ereignisses sind lange für Krypto-Investoren spürbar{' '}
        <a href="#sources">[4]</a>.
      </p>

      <p className="mb-12 text-justify">
        Besonders der <span className="font-bold">hohe Energieverbrauch</span>{' '}
        des Konsensmechanismus Proof of Work wird heiß diskutiert. Alleine das
        minen nach neuen Bitcoins könnte schätzungsweise für für 65,4 Megatonnen
        CO2 (MtCO2) pro Jahr verantwortlich sein, was vergleichbar ist mit den
        Länderemissionen, wie Griechenland <a href="#sources">[5]</a>.
      </p>

      <div className="flex justify-center items-center">
        <img
          src={Challenges}
          alt="CloudDefinition"
          className="w-full md:w-1/3 mb-12"
        />
      </div>

      <Sources sources={articlesources} />
    </div>
  );
};

export default OpportunitiesAndChallengesPart1;
