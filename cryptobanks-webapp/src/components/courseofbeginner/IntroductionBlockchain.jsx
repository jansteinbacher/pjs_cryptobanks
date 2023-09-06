import React, { useState } from 'react';
import Blockchain from '../../images/courseBeginner/blockchain.png';
import dltvideo from '../../images/courseBeginner/DLT.mp4';



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

const IntroBlockchain = () =>{

  const articlesources = [
    "Ray, S. 2018.The Difference Between Blockchains & Distributed Ledger Technology. in: Towards Data Science. https://towardsdatascience.com/the-difference-between-blockchains-distributed-ledger-technology-42715a0fa92. [abgerufen am 24.08.2023].",
    "Sunyaev, A. und Sunyaev, A. 2020. Distributed ledger technology. Internet computing: Principles of distributed systems and emerging internet-based technologies, S. 265-299.",
    "Nakamoto, S. 2008. A peer-to-peer electronic cash system. https://bitcoin.org/bitcoin.pdf. [abgerufen am 24.08.2023].",
    "Bundesamt für Sicherheit in der Informationstechnik. 2023. Blockchain macht Daten praktisch unveränderbar. https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html. [abgerufen am 24.08.2023].]",
      ]

  return (
    <div className='container mx-auto py-12 px-12 max-w-screen-lg'>
     <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
     Blockchain-Technologie
     </h1>
    
     <ul className='mb-8 list-disc ml-4'>
      <li>Funktionsweise (Konsens, PoS, PoW)</li>
      <li>Unterschied zu Distributed Ledger Technology</li>
      <li>Anwendungsbereiche (Historie etc.)</li>
      <li>Herausforderungen / Zukunftsaussichten</li>
     </ul>




     <h2 className="text-lg font-semibold text-gray-800 mb-4">
     Funktionsweise
     </h2>
     <p className='mb-8 text-justify'>
      Eine der grundlegenden Technologien hinter digitalen Vermögenswerten ist die Blockchain. Um sein Verständnis zu vertiefen, beginnt Bernd, sich mit verschiedenen Aspekten der Blockchain auseinanderzusetzen. Durch die Blockchain-Technologie können Transaktionen, beispielsweise im Zahlungsverkehr mit Kryptowährungen, vertrauenswürdig und transparent ohne Einbeziehung einer zentralen Instanz überprüft werden.

      Bernd lernt, dass die Blockchain eine dezentrale, verteilte digitale Datenbank ist. Sie speichert Informationen in Blöcken und verknüpft diese Blöcke in einer chronologischen Reihenfolge, um eine unveränderliche Kette zu erstellen. Er sieht, dass die Blockchain auf verschiedenen Konsensmechanismen beruhen kann, darunter Proof of Work (PoW) und Proof of Stake (PoS).
    </p>
    <h3 className='text-lg font-smibold text-gray-600 mb-4'>Herausstellungsmerkmale der Blockchain-Technologie:</h3>

    <ul className='mb-8 list-disc ml-4'>
      <li>Unveränderliche Daten</li>
      <li>Für alle Nutzer transparente und nachvollziehbare Transaktionen</li>
      <li>Verteilte (und keine zentrale) sowie konsensuale Datenspeicherung</li>
      <li>Verzicht auf Mittelsmänner</li>
     </ul>

     <div className='flex justify-center items-center'>
     <img src={Blockchain} alt="Blockchain" className="w-full md:w-1/2 mb-4" />
     </div>
     <p className='mb-8 text-justify'>
     Die Blockchain-Technologie umfasst Permissioned und Permissionless Blockchains. 
     Beide sind dezentral und transparent. Permissioned Blockchains erfordern Zugriffsberechtigungen, 
     während Permissionless Blockchains für alle offen sind. Konsensmechanismen variieren, ebenso wie 
     Skalierbarkeit und Privatsphäre. Permissioned Blockchains passen in geschlossene Umgebungen wie 
     Unternehmensanwendungen. Permissionless Blockchains sind ideal für offene, dezentrale Anwendungen 
     wie Kryptowährungen und DeFi.
     </p>

     <h2 className="text-lg font-semibold text-gray-800 mb-4">
     Proof of Work
     </h2>
     <p className='mb-8 text-justify'>
     Proof of Work (PoW) ist ein Konsensmechanismus, der zum Beispiel im Bitcoin-Netzwerk verwendet wird. Miner lösen komplexe mathematische Rätsel, um neue Blöcke zur Blockchain hinzuzufügen. Dies erfordert erhebliche Rechenleistung und Energieaufwand. Der erste Miner, der das Rätsel löst, erhält die Belohnung und validiert die Transaktionen im Block.
     </p>

     <h2 className="text-lg font-semibold text-gray-800 mb-4">
     Proof of Stake
     </h2>
     <p className='mb-8 text-justify'>
     Proof of Stake (PoS) wird in Kryptowährungen wie Ethereum und Cardano eingesetzt. Statt Rechenleistung setzen Teilnehmer Kryptowährung als Stake ein. Zum Beispiel können Inhaber von Ethereum Token ihre Coins als Einsatz verwenden, um Blöcke zu erstellen. Die Wahrscheinlichkeit, ausgewählt zu werden, hängt von der Menge der gestakten Coins ab. PoS fördert den Kryptowährungsbesitz und reduziert den Energieverbrauch im Vergleich zu PoW.
     </p>

     <h2 className="text-lg font-semibold text-gray-800 mb-4">
     Distributed Ledger Technology
     </h2>
     <p className='mb-8 text-justify'>
     Während seiner Recherche zu Blochchain trifft Bernd häufig auf den Bergriff Distributed Ledger Technology (DLT). Ist Blockchain und DLT das Gleiche? Wenn nein, worin liegt der Unterschied? Wo findet DLT Anwendung? Wird es auch in seiner Branche, der Finanzbranche verwendet?
     </p>
     <p className='mb-8 text-justify'>
     Die Blockchain-Technologie und die Distributed Ledger Technology (DLT) teilen den Ansatz der dezentralisierten Datenverwaltung, bieten jedoch unterschiedliche Umsetzungen. Beide ermöglichen verteilte Datenspeicherung und Transaktionstransparenz, wobei die Blockchain spezifisch Transaktionen in Blöcken verknüpft, während DLT eine breitere Palette von Technologien umfasst. Der Unterschied erstreckt sich auch auf die angewendeten Konsensmechanismen – Proof of Work oder Proof of Stake in der Blockchain im Vergleich zu verschiedenen Ansätzen in der DLT. Letztendlich vereinen sie das Ziel der erhöhten Sicherheit und Transparenz, aber bieten unterschiedliche Wege, um die Bedürfnisse verschiedener Branchen anzusprechen.
      </p>

      <div className='flex justify-center items-center'>
      <video controls className="w-full md:w-1/2 h-full rounded-lg">
                <source src={dltvideo} type="video/mp4" />
                Your browser does not support the video tag.
      </video>
      </div>

    <h2 className="text-lg font-semibold text-gray-800 mb-4">
     Anwendungsbereiche
    </h2>
    <h3 className="text-lg text-gray-800 mb-4">
     Finanzsektor
    </h3>
    <p className='mb-8 text-justify'>
    Im Finanzsektor findet die Blockchain-Technologie breite Anwendung. Sie bildet die Grundlage für Kryptowährungen wie Bitcoin und Ether, die dezentrale digitale Werte darstellen. Durch die Technologie ermöglicht sich schnelle und kosteneffiziente grenzüberschreitende Transaktionen ohne Zwischenhändler. Darüber hinaus ermöglicht die Tokenisierung von Vermögenswerten, wie Immobilien und Wertpapiere, auf der Blockchain, diese digital darzustellen und zu handeln.
    </p>
    <h3 className="text-lg text-gray-800 mb-4">
    Smarte Verträge
    </h3>
    <p className='mb-8 text-justify'>
    Ein weiterer Anwendungsbereich sind smarte Verträge, die selbstausführende Verträge darstellen und automatisch ausgeführt werden, wenn die darin festgelegten Bedingungen erfüllt sind. Diese finden Einsatz im Versicherungswesen, wo automatisierte Ansprüche und Abwicklungen in Echtzeit erfolgen können. Auch im Lieferkettenmanagement werden smarte Verträge genutzt, um Lieferverträge und Zahlungen transparent und automatisch auszuführen. Im Immobilienbereich können Kauf- und Mietverträge durch intelligente Verträge vereinfacht und automatisiert werden.
    </p>
    <h3 className="text-lg text-gray-800 mb-4">
    Transportwesen und Supply-Chain-Management
    </h3>
    <p className='mb-8 text-justify'>
    Im Transportwesen und im Supply-Chain Management ermöglicht die Blockchain-Technologie die lückenlose Nachverfolgung von Produkten entlang der Lieferkette, was zu erhöhter Transparenz und Authentizität führt. Ebenso erleichtert die Blockchain den grenzüberschreitenden Handel, indem sie den Austausch von Informationen und Dokumenten zwischen verschiedenen Ländern rationalisiert. Im Bereich der Frachtverfolgung können Transporte und Lieferungen in Echtzeit verfolgt werden, was die Effizienz und Sicherheit verbessert.
    </p>

    <h2 className="text-lg font-semibold text-gray-800 mb-4">
    Herausforderungen der Technologie
    </h2>
    <p className='mb-8 text-justify'>
    Trotz ihres vielversprechenden Potenzials ist die Blockchain-Technologie nicht frei von Herausforderungen. Skalierbarkeit bleibt nach wie vor ein kritischer Punkt, da sie mit der steigenden Anzahl von Transaktionen zu kämpfen hat. Zudem erfordert die dezentrale Natur der Blockchain immense Energiemengen, was Bedenken hinsichtlich ihrer Umweltauswirkungen aufwirft. Die Komplexität der Technologie und regulatorische Unsicherheiten stellen ebenfalls Hindernisse dar, die es zu überwinden gilt. Während die Blockchain bedeutende Vorteile bietet, sind diese Herausforderungen nicht zu übersehen und erfordern eine sorgfältige Abwägung.
    </p>

    <h2 className="text-lg font-semibold text-gray-800 mb-4">
    Zukunft von Blockchain
    </h2>
    <p className='mb-8 text-justify'>
    Die Zukunft der Blockchain im Bankensektor verheißt eine grundlegende Veränderung der Finanzdienstleistungen. Durch Dezentralisierung können Peer-to-Peer-Transaktionen effizienter erfolgen, da Vermittler überflüssig werden. Dies führt zu schnelleren Abwicklungen und kosteneffektiveren Prozessen. Die Technologie fördert Transparenz und Vertrauen, wodurch Banken Betrugsrisiken minimieren und Kundenvertrauen stärken können. Neue Geschäftsmodelle und Produkte, wie die Tokenisierung von Vermögenswerten, eröffnen innovative Möglichkeiten. Trotz des Potenzials bestehen Herausforderungen hinsichtlich Skalierbarkeit, Datenschutz und Regulierung. Dennoch können Banken, die Blockchain effektiv nutzen, sich differenzieren und in einer digitalisierten Welt Wettbewerbsvorteile erzielen.
    </p>

    <Sources sources={articlesources}/>
    </div>

  );
};

export default IntroBlockchain;
