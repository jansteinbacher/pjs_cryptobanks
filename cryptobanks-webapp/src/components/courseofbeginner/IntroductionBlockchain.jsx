import React, { useState } from "react";
import Blockchain from "../../images/courseBeginner/blockchain.png";
import dltvideo from "../../images/courseBeginner/DLT.mp4";

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

const IntroBlockchain = () => {
  const articlesources = [
    "Ray, S. 2018.The Difference Between Blockchains & Distributed Ledger Technology. in: Towards Data Science. https://towardsdatascience.com/the-difference-between-blockchains-distributed-ledger-technology-42715a0fa92. [abgerufen am 24.08.2023].",
    "Sunyaev, A. und Sunyaev, A. 2020. Distributed ledger technology. Internet computing: Principles of distributed systems and emerging internet-based technologies, S. 265-299.",
    "Nakamoto, S. 2008. A peer-to-peer electronic cash system. https://bitcoin.org/bitcoin.pdf. [abgerufen am 24.08.2023].",
    "Bundesamt für Sicherheit in der Informationstechnik. 2023. Blockchain macht Daten praktisch unveränderbar. https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html. [abgerufen am 24.08.2023].]",
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Blockchain-Technologie
      </h1>

      <ul className="mb-12 list-disc ml-4">
        <li>Funktionsweise (Konsens, PoS, PoW)</li>
        <li>Abgrenzung zur Distributed-Ledger-Technology</li>
        <li>Anwendungsbereiche (Historie etc.)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Funktionsweise
      </h2>
      <div className="p-4 mb-8 bg-green-200 rounded-lg">
        <p className=" italic text-justify">
          Bernd hat nun ein solides Verständnis für Kryptoassets aufbauen
          können. Um sein Wissen zu vertiefen, beginnt Bernd, sich mit der
          zugrundeliegenden Technologie der Blockchain auseinanderzusetzen.
        </p>
      </div>
      <p className="mb-8">
        Eine der grundlegenden Technologien hinter Kryptoassets ist die
        Blockchain. Durch die Blockchain-Technologie können Transaktionen,
        beispielsweise im Zahlungsverkehr mit Kryptowährungen, vertrauenswürdig
        und transparent ohne Einbeziehung einer zentralen Instanz überprüft
        werden. Bernd lernt, dass die Blockchain eine dezentrale, verteilte
        digitale Datenbank ist. Sie speichert Informationen in Blöcken und
        verknüpft diese Blöcke in einer chronologischen Reihenfolge, um eine
        unveränderliche Kette zu erstellen. Er sieht, dass die Blockchain auf
        verschiedenen Konsensmechanismen beruhen kann, darunter Proof of Work
        (PoW) und Proof of Stake (PoS).
      </p>

      <p className="font-semibold text-gray-600 mb-4">
        Herausstellungsmerkmale der Blockchain-Technologie:
      </p>

      <ul className="mb-8 list-disc ml-4">
        <li>Unveränderliche Daten</li>
        <li>Für alle Nutzer transparente und nachvollziehbare Transaktionen</li>
        <li>
          Verteilte (und keine zentrale) sowie konsensuale Datenspeicherung
        </li>
        <li>Verzicht auf Mittelsmänner</li>
      </ul>

      <div className="flex justify-center items-center">
        <img
          src={Blockchain}
          alt="Blockchain"
          className="w-full md:w-1/2 mb-4"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Permissioned vs. Permissionless
      </h3>
      <p className="mb-12 text-justify">
        Die Blockchain-Technologie umfasst Permissioned und Permissionless
        Blockchains. Beide sind dezentral und transparent. Permissioned
        Blockchains erfordern Zugriffsberechtigungen, während Permissionless
        Blockchains für alle offen sind. Konsensmechanismen variieren, ebenso
        wie Skalierbarkeit und Privatsphäre. Permissioned Blockchains passen in
        geschlossene Umgebungen wie Unternehmensanwendungen. Permissionless
        Blockchains sind ideal für offene, dezentrale Anwendungen wie
        Kryptowährungen und DeFi.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Proof of Work
      </h3>

      <p className="mb-12 text-justify">
        Proof of Work (PoW) ist ein Konsensmechanismus, der zum Beispiel im
        Bitcoin-Netzwerk verwendet wird. Miner lösen komplexe mathematische
        Rätsel, um neue Blöcke zur Blockchain hinzuzufügen. Dies erfordert
        erhebliche Rechenleistung und Energieaufwand. Der erste Miner, der das
        Rätsel löst, erhält die Belohnung und validiert die Transaktionen im
        Block.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Proof of Stake
      </h3>
      <p className="mb-12 text-justify">
        Proof of Stake (PoS) wird in Kryptowährungen wie Ethereum und Cardano
        eingesetzt. Statt Rechenleistung setzen Teilnehmer Kryptowährung als
        Stake ein. Zum Beispiel können Inhaber von Ethereum Token ihre Coins als
        Einsatz verwenden, um Blöcke zu erstellen. Die Wahrscheinlichkeit,
        ausgewählt zu werden, hängt von der Menge der gestakten Coins ab. PoS
        fördert den Kryptowährungsbesitz und reduziert den Energieverbrauch im
        Vergleich zu PoW.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Abgrenzung zur Distributed-Ledger-Technologie
      </h2>
      <div className="p-4 mb-8 bg-green-200 rounded-lg">
        <p className="italic text-justify">
          Während seiner Recherche zu Blochchain trifft Bernd häufig auf den
          Bergriff Distributed Ledger Technology (DLT). Ist Blockchain und DLT
          das Gleiche? Wenn nein, worin liegt der Unterschied? Wo findet DLT
          Anwendung? Wird es auch in seiner Branche, der Finanzbranche
          verwendet?
        </p>
      </div>
      <p className="mb-12 text-justify">
        Die Blockchain-Technologie und die Distributed Ledger Technology (DLT)
        teilen den Ansatz der dezentralisierten Datenverwaltung, bieten jedoch
        unterschiedliche Umsetzungen. Beide ermöglichen verteilte
        Datenspeicherung und Transaktionstransparenz, wobei die Blockchain
        spezifisch Transaktionen in Blöcken verknüpft, während DLT eine breitere
        Palette von Technologien umfasst. Der Unterschied erstreckt sich auch
        auf die angewendeten Konsensmechanismen – Proof of Work oder Proof of
        Stake in der Blockchain im Vergleich zu verschiedenen Ansätzen in der
        DLT. Letztendlich vereinen sie das Ziel der erhöhten Sicherheit und
        Transparenz, aber bieten unterschiedliche Wege, um die Bedürfnisse
        verschiedener Branchen anzusprechen.
      </p>

      <div className="flex justify-center items-center mb-12">
        <video controls className="w-full md:w-1/2 h-full rounded-lg">
          <source src={dltvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Anwendungsbereiche
      </h2>
      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <p className=" italic text-justify">
          Bernd ist von der Blockchain-Technologie fasziniert und beginnt nun,
          sich für ihre möglichen Anwendungsbereiche zu interessieren. Während
          seiner Recherche stößt er auf ein informativen Blogartikel, der
          verschiedene Anwendungsfälle dieser Technologie vorstellt.
        </p>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Tokenisierung
      </h3>
      <p className="mb-12 text-justify">
        Die Tokenisierung ist eine Anwendung der Blockchain-Technologie, bei der
        digitale Vermögenswerte in tokenisierter Form auf einer dezentralen
        Blockchain-Plattform erstellt und verwaltet werden. Dies ermöglicht die
        Umwandlung physischer oder virtueller Vermögenswerte in digitale Tokens,
        die in der Blockchain registriert und nachverfolgt werden können. Diese
        Technologie steigert auch die Liquidität und den Handel erheblich. Zum
        Beispiel kann eine Immobilie in viele kleine Tokens aufgeteilt werden,
        wodurch Anleger Bruchteile dieser Vermögenswerte kaufen und verkaufen
        können.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Smarte Verträge und dezentrales Finanzwesen
      </h3>
      <p className="mb-12 text-justify">
        Mit dem Aufkommen vieler neuerer Blockchains wie Ethereum ist es
        möglich, Anwendungen auf der Blockchain mithilfe von sogenannten Smart
        Contracts zu erstellen. Ein Smart Contract ist ein selbstausführender
        Code, der eine Aktion auslöst, sobald vordefinierte Bedingungen erfüllt
        sind. Sie tragen zur Dezentralisierung des Finanzwesens bei, indem sie
        die Vermittler, die traditionell zur Entscheidungsfindung notwendig
        sind, ersetzen. Um Informationen von außerhalb der Blockchain zu
        beziehen, nutzen Smart Contracts sogenannte Orakel, die diese Daten
        bereitstellen. [5]
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Transportwesen und Supply-Chain-Management
      </h3>
      <p className="mb-12 text-justify">
        Im Transportwesen und im Supply-Chain Management ermöglicht die
        Blockchain-Technologie die lückenlose Nachverfolgung von Produkten
        entlang der Lieferkette, was zu erhöhter Transparenz und Authentizität
        führt. Ebenso erleichtert die Blockchain den grenzüberschreitenden
        Handel, indem sie den Austausch von Informationen und Dokumenten
        zwischen verschiedenen Ländern rationalisiert. Im Bereich der
        Frachtverfolgung können Transporte und Lieferungen in Echtzeit verfolgt
        werden, was die Effizienz und Sicherheit verbessert.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default IntroBlockchain;
