import React, { useState } from 'react';
import Challenges from '../images/courseBeginner/challenges.png';




const Sources = ({ sources}) => {
  const [showSources, setShowSources] = useState(false);

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  return (
    <div className="sources border border-gray-400 rounded p-4">
      <button className="text-lg font-semibold" id="sources" onClick={toggleSources}>
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

const IntroTrade = () =>{

  const articlesources = [
        "vgl. Meisner, H. (2021). Neue Herausforderungen in der Finanzsphäre. In: Finanzwirtschaft in der Internetökonomie. Springer Gabler, Wiesbaden. https://doi.org/10.1007/978-3-658-33715-5_7",
    "vgl. Kerscher, D. (2013). Bitcoin: Funktionsweise. Risiken und Chancen der digitalen Währung. Kemacon Verlag, Leipzig",
    "vgl. https://www.coindesk.com/business/2022/11/02/divisions-in-sam-bankman-frieds-crypto-empire-blur-on-his-trading-titan-alamedas-balance-sheet/ ",
    "vgl. Meisner, H. (2021). Neue Herausforderungen in der Finanzsphäre. In: Finanzwirtschaft in der Internetökonomie. Springer Gabler, Wiesbaden. https://doi.org/10.1007/978-3-658-33715-5_7",
    "Gorton, Gary B. and Zhang, Jeffery, Bank Runs During Crypto Winter (May 12, 2023). U of Michigan Law & Econ Research Paper, Available at SSRN: https://ssrn.com/abstract=4447703 or http://dx.doi.org/10.2139/ssrn.4447703",
    "vgl. de Vries, Alex, Ulrich Gallersdörfer, Lena Klaaßen, and Christian Stoll (2022). Revisiting Bitcoin’s carbon footprint. In: Joule 6, S. 498–502.",
    "vgl. Porsche Consulting",
    "ebd.",
    "ebd.",
  ]

  return (
    <div className='container mx-auto py-12 px-12 max-w-screen-lg'>
     <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
     Herausforderungen und Zukunftsaussichten von Kryptoassets
     </h1>
    
     <ul className='mb-8 list-disc ml-4'>
      <li>Herausforderungen von Kryptoassets</li>
      <li>Zukunftsaussichten von Kryptoassets</li>
     </ul>

     <p className='mb-8 text-justify'>
     Bernd ist sich nach all den bisher erlangten Informationen jedoch noch nicht sicher welche Unsicherheiten bzw. Risiken Kryptoassets mit sich bringen und ob es sich für die Zukunft lohnt, sich weiter mit dem Thema auseinanderzusetzen. Seine Kollegin Simone erzählt ihm von einer Diskussionsrunde, bei welcher verschiedene Experten ihre Standpunkte teilen. Bernd hört sich das einmal genauer an.
      </p>


     <h2 className="text-lg font-semibold text-gray-800 mb-4">
     Herausforderungen von Kryptoassets
     </h2>
     <p className='mb-8 text-justify'>
      Eine der bisher größten Herausforderungen der Blockchain-Technologie ist die Handhabung mit einer erhöhten Netzwerkauslastung. Durch erhöhtes Datenvolumen kann es zu einer Verzögerung von Transaktionen kommen. Dieses Problem wird als <span className='font-bold'> Skalierungsproblem </span> bezeichnet. Das Kapazitätsproblem geht darüber hinaus mit einem hohen Energieverbrauch und höheren Kosten einher. [1] 
     </p>

     <p className='mb-8 text-justify'>
     Des Weiteren sind <span className='font-bold'>fehlende Regulatorien</span> eine weitere Herausforderung von Kryptoassets. 
      So sind beispielsweise aufgrund von fehlenden regulatorischen Rahmenbedingungen Bitcoin vor Hackerangriffen nicht geschützt, was somit ein großes Risiko für das System darstellt. [2] Besonders ins Gewicht fällt der Skandal von FTX. Hierbei kam es zur unsachgemäßen Handhabung der Kundengelder, indem die Einzahlungen der Nutzer zur weiteren Investitionen verwendet wurde. Mit Offenlegung der dubiosen Geschäfte kam es zum Zusammenbruch, wodurch viele Investoren Geld verloren. [3]
     </p>

     <p className='mb-8 text-justify'>
     Auch die <span className='font-bold'>hohe Volatilität</span> bei Kryptowährungen stellt eine Herausforderung dar. Jede Veränderung am Markt oder in der Regulatorik bringt starke Preisschwankungen mit sich. [4] Beispielsweise können die die drei verschiedenen Kryptowinter genannt werden. Der Begriff Kryptowinter bezieht sich dabei auf ein extremes Tief auf dem gesamten Kryptowährungsmarkt. Die fallenden Preise des letzten Kryptowinter führten zu Probleme eines großen Krypto-Hedgefonds und einem Bank Run auf verschiedene Kryptounternehmen. Diese Entwicklung führte zur Insolvenz mehrerer großer Kryptounternehmen, was sowohl Haushalte als auch Unternehmen Verluste in Milliardenhöhe bescherte. Die Auswirkungen dieses Ereignisses sind lange für Krypto-Investoren spürbar. [5]
      </p>

    <p className='mb-8 text-justify'>
    Besonders der <span className='font-bold'>hohe Energieverbrauch</span> des Konsensmechanismus Proof of Work wird heiß diskutiert. Alleine das minen nach neuen Bitcoins könnte schätzungsweise für für 65,4 Megatonnen CO2 (MtCO2) pro Jahr verantwortlich sein, was vergleichbar ist mit den Länderemissionen, wie Griechenland. [6]
    </p>

    <div className='flex justify-center items-center'>
     <img src={Challenges} alt="CloudDefinition" className="w-full md:w-1/3 mb-4" />
     </div>

     <h2 className="text-lg font-semibold text-gray-800 mb-4">
     Zukunftsaussichten von Kryptoassets
     </h2>
     <p className='mb-8 text-justify'>
     Kryptoassets, wie Security Token Offerings (STOs) bieten die Möglichkeit einer neuen Art von Kapitalbeschaffung. Daneben können Non-Fungible Tokens (NFTs) den Handel und Investition in reale oder bisher illiquide Vermögenswerte ermöglichen. Zudem eröffnet es die Tür für Investitionen in neu gegründete kleine und mittlere Unternehmen (KMU) durch den Kauf von tokenisierten Anleihen oder Aktien. [7]
      </p>

     <p className='mb-8 text-justify'>
     Tokenisierung ermöglicht die digitale Darstellung und Aufteilung von Vermögenswerten. Dabei können die Nennwerte der Tokens flexibel angepasst werden, um den Bedürfnissen der Investoren besser gerecht zu werden. Außerdem können die Einnahmeströme aus Vermögenswerten automatisch unter den Inhabern der Tokens aufgeteilt werden. [8]
     </p>

     <p className='mb-8 text-justify'>
     Smart Contracts können bestimmte Aufgaben im MBO (Mid- and Back-Office) automatisieren und deutlich beschleunigen. Gleichzeitig kann der Bedarf an Intermediäre, wie zentralen Clearingstellen, reduziert werden. Des Weiteren führen atomare Trades zu einer erheblichen Reduzierung des Gegenparteirisikos. Dabei ermöglichen Smart Contracts den Austausch von Vermögenswerten (Security Tokens) mit Zahlungsmittel (Payment Tokens) in Echtzeit [9]  
      </p>
    


     

    <Sources sources={articlesources}/>
    </div>

  );
};

export default IntroTrade;
