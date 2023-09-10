import React, { useState } from "react";
import CryptoAssetsDefinition from "../../images/courseBeginner/CryptoAssetsDefinition.png";
import Nagamoto from "../../images/courseBeginner/nagamoto.png";
import Rocket from "../../images/courseBeginner/rocket.png";
import Currencies from "../../images/courseBeginner/currencies.png";
import Token from "../../images/courseBeginner/token.png";

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

const CryptoAssets = () => {
  const articlesources = [
    "vgl. Nakamoto (2008)",
    "Nakamoto, S. 2008. Bitcoin: A peer-to-peer electronic cash system, 9 https:// bitco in. org/ bitco in. pdf.",
    "Olbrecht, A., Pieters, G. Crypto-Currencies and Crypto-Assets: An Introduction. Eastern Econ J 49, 201–205 .2023. https://doi.org/10.1057/s41302-023-00246-1",
    "ebd.",
    "Vgl. dazu RENNING, BKR 2020, 23, 24; MAUME, in: Maume/Maute, Kryptowerte-HdB, 1 Aufl, 2020, § 12, 19 ff.; zur steuerrechtlichen Einordnung PRINZ, StuB 2019, 257, 257 ff.",
    "Nakamoto, S. 2008. Bitcoin: A peer-to-peer electronic cash system, 9 https:// bitco in. org/ bitco in. pdf.",
    "Treiblmaier, H. 2020. „Toward More Rigorous Blockchain Research: Recommendations for Writing Blockchain Case Studies,” in: Treiblmaier, H., Clohessy, T. (eds) Blockchain and Distributed Ledger Technology Use Cases. Progress in IS. Springer, Cham. https://doi.org/10.1007/978-3-030-44337-5_1",
    "Bundesamt für Sicherheit in der Informationstechnik. 2023. Blockchain und Kryptowährungen. Retrieved from https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html",
    "Jain, S.M. 2023. „Blockchain.,” In: A Brief Introduction to Web3. Apress, Berkeley, CA. https://doi.org/10.1007/978-1-4842-8975-4_2",
    "Baum, A. 2020. „Tokenisation–the future of real estate investment.,” The Future of Real Estate Initiative, 61.",
    "Christodoulou, K., Katelaris, L., Themistocleous, M., Christodoulou, P. und Iosif, E. 2022. „NFTs and the Metaverse Revolution: Research Perspectives and Open Challenges.,” in: Lacity, M.C.,",
    "Zheng, M., Sandner, P. 2022. „Asset Tokenization of Real Estate in Europe.,” In: Lacity, M.C., Treiblmaier, H. (eds) Blockchains and the Token Economy. Technology, Work and Globaliza-tion. Palgrave Macmillan, Cham. https://doi.org/10.1007/978-3-030-95108-5_7",
    "Christodoulou, K., Katelaris, L., Themistocleous, M., Christodoulou, P. und Iosif, E. 2022. „NFTs and the Metaverse Revolution: Research Perspectives and Open Challenges.,” in: Lacity, M.C.",
    "vgl. Gusmann A, Weisenberger F. 2018. Initial Coin Offerings, Tokens im Kontext der Shared Economy.BearingPoint",
    "Hönig, M. 2020. Funktionsweise von Coins und Token. In: ICO und Kryptowährungen. Springer Gabler, Wiesbaden. https://doi.org/10.1007/978-3-658-27688-1_4",
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        Grundverständnis zu Kryptoassets
      </h1>

      <ul className="mb-12 list-disc ml-4">
        <li>
          Der geschichtliche Hintergrund zu Kryptoassets (Satoshi Nakamoto)
        </li>
        <li>Definition Kryptoassets</li>
        <li>Blockchain (Teaser)</li>
        <li>Tokenisierung</li>
        <li>Coin vs. Token</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Der geschichtliche Hintergrund zu Kryptoassets (Satoshi Nakamoto)
      </h2>
      <div className="p-4 mb-8 bg-green-200 rounded-lg">
        <p className="italic text-justify">
          Voller Neugierde macht sich Bernd auf die Suche nach Informationen zum
          Thema Kryptoassets, um seinen Wissensdurst zu stillen. In der
          Betriebskantine hat er ein Gespräch zwischen Simone und Tobias zu dem
          Thema mitbekommen. Er hatte die beiden beauftragt sich ebenfalls mit
          dem Thema Kryptoassets auseinanderzusetzen, um ein breites Wissen zu
          Kryptoassets zu bekommen und letzlich eine fundierte Entscheidung für
          oder gegen die Integration von Kryptoassets in seine Bank zu treffen.
          Bernd konnte nicht widerstehen, sich in das Gespräch einzubringen.
          "Entschuldigt, dass ich mich einmische, aber ich habe auch viele
          Fragen. Zum Beispiel, wer ist Nakamoto? Ich habe diesen Namen in
          Zusammenhang mit Kryptoassets gehört, aber ich bin mir nicht sicher,
          wer oder was das ist." Simone lächelte und erklärte: "Nakamoto ist der
          Pseudonym eines unbekannten Schöpfers von Bitcoin. Niemand weiß
          wirklich, wer hinter diesem Namen steckt. Es ist wie eine mysteriöse
          Figur, die die Krypto-Revolution gestartet hat." Tobias fügte hinzu:
          "Genau, Nakamoto veröffentlichte das Whitepaper für Bitcoin im Jahr
          2008 und startete 2009 das Bitcoin-Netzwerk. Aber seitdem ist seine
          Identität ein Rätsel geblieben."
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src={Nagamoto} alt="Nagamoto" className="w-full md:w-1/2 mb-8" />
      </div>

      <p className="mb-12 text-justify">
        Seit der Einführung von der Kryptowährung Bitcoin (BTC) 2009, basierend
        auf Konzepten, die im Whitepaper von Satoshi Nakamoto
        <a href="#sources">[1]</a> skizziert wurden, hat sich die Welt der
        blockchainbasierten digitalen Token rasant entwickelt. Bis heute ist die
        Identität des Pseudonyms Satoshi Nakamoto unbekannt. Seine Identität
        unterliegt vielen Mythen und Theorien. Es ist möglich, dass seine
        Identität für immer unbekannt bleibt. Inzwischen ist die Zahl an
        verschiedenen Token weltweit auf über 22.000 angewachsen. Die Vision
        Nakamotos war es traditionelle Fiatwährungen zukünftig durch
        kryptografiegestützte, digitale Währungen ­– auch Kryptowährungen
        genannt ­– zu ersetzen.<a href="#sources">[2]</a>,{" "}
        <a href="#sources">[3]</a> Die ursprüngliche Vision Nakamotos hat sich
        mittlerweile hin zu einem umfassenden Ökosystem kryptografischer
        Vermögenswerte entwickelt, die allgemein als Kryptoassets bezeichnet
        werden. Diese Kryptoassets umfassen nun ein breites Anwendungsspektrum,
        dass nicht nur die ursprünglichen Idee der digitalen Währung aufgreift.
        Es erweitert diese um eine umfassendere Palette an kryptografischer
        Lösungen, darunter tokenisierte Mechanismen zur Automatisierung
        rechtlicher Verträge (Smart Contracts) und sogar die Schaffung
        unveränderlicher Besitznachweise für digitale Kunst (Non-Fungible
        Tokens, NFTs). <a href="#sources">[4]</a>
        Mehr dazu in Kapitel 3 „Arten von Kryptoassets und ihre Verbindung zu
        traditionellen Finanzprodukten”.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Definition Kryptoassets
      </h2>
      <div className="p-4 mb-8 bg-green-200 rounded-lg">
        <p className=" italic text-justify">
          Nach der Pause öffnete Bernd seinen Laptop und beginnt mit einer
          simplen Google-Suche: "Was sind Kryptoassets?" Innerhalb von Sekunden
          erschienen zahlreiche Ergebnisse. Er stößt auf eine Definition, die
          ihm einen klaren Überblick verschaffte.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={CryptoAssetsDefinition}
          alt="CloudDefinition"
          className="w-full md:w-1/2 mb-8"
        />
      </div>
      <p className="mb-12 text-justify">
        Nach § 1 Abs. 11 S. 4 KWG ist ein Kryptowert ein digitaler, von keiner
        öffentlichen Stelle unterstützter Wert ohne gesetzlichen Status einer
        Währung, der gleichwohl als Tausch-, Zahlungs- oder Anlagegegenstand
        akzeptiert wird und elektronisch übertragen, gespeichert und gehandelt
        werden kann.<a href="#sources">[5]</a> Ähnlich, – nur mit Bezug zur
        Distributed-Ledger-Technologie (DLT) – definiert die EU-Verordnung über
        Märkte in Kryptowerte (sog. MiCA).
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Blockchain - Was ist das?
      </h2>
      <div className="p-4 mb-8 bg-green-200 rounded-lg">
        <p className="italic text-justify">
          Während seiner Recherche stößt Bernd auf den Bergriff Blockchain. Doch
          was ist das nochmal? Als aufmerksamer Leser und Zuhörer weiß Bernd
          inzwischen, dass die Blockchain-Technologie von mutmaßlich einer oder
          mehreren Personen unter dem Pseudonym Satoshi Nakamoto in dem
          Whitepaper beschrieben wurde. Es wird darin dargestellt, wie
          Transaktionen, Hashes und Nonces zu einer blockbasierten Datenstruktur
          zusammengefasst werden können. Innerhalb dieser Datenstruktur können
          die separaten Blöcke mit Hilfe des Hashes eines vorherigen Blocks
          miteinander verknüpft werden. <a href="#sources">[6]</a>,{" "}
          <a href="#sources">[7]</a>
        </p>
      </div>
      <p className="mb-12 text-justify">
        Mittels der Blockchain-Technologie können Daten, wie beispielweise
        Transaktionen, in einer verteilten Infrastruktur ohne eine zentrale
        Instanz nachvollziehbar und manipulationssicher verwaltet werden. Sie
        basiert auf Kryptographie, um Daten zu sichern und die Identität der
        Anwendenden zu überprüfen.<a href="#sources">[8]</a>
        Die Blockchain-Technologie basiert auf einem Peer-to-Peer Netzwerk. Dies
        bedeutet, dass es nicht auf einer zentralen Behörde fundiert, welche den
        System verwaltet. Die Computer, die zu dem Peer-to-Peer Netzwerk
        gehören, sind meist dezentral verteilt und werden in der Fachliteratur
        teils auch als Full Nodes bezeichnet.<a href="#sources">[9]</a>
        Es gibt zwei verschiedene Arten der Blockchain, die Permissioned
        Blockchain und die Permissionless Blockchain. Mehr dazu in Kapitel 2.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Tokenisierung
      </h2>
      <div className="p-4 mb-8 bg-green-200 rounded-lg">
        <p className="italic text-justify">
          Bernds Wissensreise führte ihn immer tiefer in die Welt der
          Kryptoassets. Doch bei einem bestimmten Begriff hatte er noch einige
          Fragezeichen im Kopf: "Tokenisierung". Dieses Wort war in vielen
          Zusammenhängen gefallen, aber er konnte es nirgends zuordnen.
        </p>
      </div>
      <div className="flex mb-8 justify-center items-center">
        <img src={Currencies} alt="Token" className="w-full md:w-1/2 mb-4" />
      </div>
      <p className="mb-12 text-justify">
        Tokenisierung wird als der Digitalisierungsprozess eines materiellen
        oder immateriellen Vermögenswertes definiert. Es besteht die Möglichkeit
        jeden Vermögenswert oder jedes Recht in Form eines Token zu speichern.
        Dieser Token wird algorithmisch erzeugt, digital dargestellt und kann
        über ein Blockchain-Netzwerk gehandelt werden.
        <a href="#sources">[10]</a>,<a href="#sources">[11]</a>
        Wichtig ist jedoch, dass hierbei die unterschiedlichen Rechtslagen und
        Rahmenbedingungen eines Landes zu berücksichtigen ist, in dem der Token
        den Vermögenswert darstellt. Nur wenn die zuständigen Landesbehörden das
        Konzept der Tokenisierung anerkennen, kann dieser unter gesetzlichem
        Rahmen wirksam sein <a href="#sources">[12]</a>. Ethereum Request for
        Comments (ERC) ist ein bekannter Standard für die Erstellung
        tokenisierter Formen virtueller Vermögenswerte{" "}
        <a href="#sources">[13]</a>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Coin vs. Token
      </h2>
      <div className="p-4 mb-8 bg-green-200 rounded-lg">
        <p className="italic text-justify">
          Bernd hat inzwischen bereits einige Informationen auf seiner
          Wissensreise durch de Welt der Kryptoassets sammeln können. Doch es
          gibt immer noch Aspekte, die ihm nicht vollständig klar sind. Ein
          solcher Aspekt ist der Unterschied zwischen "Coin" und "Token". Er
          wusste, dass es wichtig ist, diese Begriffe zu verstehen, um die
          Vielfalt der Kryptoassets zu erfassen. Bernd tippt also "Unterschied
          zwischen Coin und Token" in die Suchleiste ein. Die Suchergebnisse
          führen ihn zu einer klaren Erklärung.
        </p>
      </div>
      <div className="flex justify-center mb-8 items-center">
        <img src={Token} alt="Token" className="w-full md:w-1/2 mb-4" />
      </div>
      <p className="mb-12 italic text-justify">
        Token unterscheiden sich von Coins. Während der Coin primär als
        Zahlungsmittel verwendet wird und eine rein digitale Währung darstellt,
        habenToken breitere Anwendungsmöglichkeiten. Sie sind daher nicht als
        „klassischer“ Coin einzustufen (vgl. Gusmann und Weisenberger 2018)
        <a href="#sources">[14]</a>. Die wohl bekanntesten Coins sind der
        Bitcoin, basierend auf der Bitcoin-Blockchain, und der Ethercoin, der
        Coin der Ethereum-Blockchain. Coins, die nach der ersten Kryptowährung,
        dem Bitcoin, auf den Markt gekommen sind, bezeichnet man auch als
        Bitcoin Alternative oder Alt Coin. Token und Coin stehen in einem engen
        Zusammenhang, denn die Transaktionskosten der Token werden mit Coins
        gezahlt <a href="#sources">[15]</a>.
        <br />
        Mit einem tiefen Verständnis für den Unterschied zwischen Coins und
        Tokens setzte Bernd seinen Weg des Lernens und Entdeckens fort. Er
        wusste, dass jedes Puzzleteilchen, das er verstand, ihn näher an die
        vollständige Erkenntnis der Welt der Kryptoassets heranbrachte.
      </p>
      <Sources sources={articlesources} />
      <div className="p-4 mt-12 mb-8 bg-green-200 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Bereit für deine erste Wissenschallenge?
        </h2>
        <div className="flex justify-center items-center">
          <img src={Rocket} alt="Token" className="w-full md:w-1/2 mb-8" />
        </div>
        <p className="mb-12 italic text-justify">
          Hey Du! <br />
          Du hast inzwischen die Grundlagen zu Kryptoassets gelernt und dein
          Wissen erweitert – das ist wirklich beeindruckend! Jetzt ist es an der
          Zeit, dein Können auf die Probe zu stellen. Denke daran, dass wahres
          Verstehen erst durch Anwendung erreicht wird. Das folgende Quiz hat
          zum Ziel dein Wissen zu festigen. Du hast nun die Gelegenheit, dein
          erworbenes Wissen unter Beweis zu stellen. Worauf wartest du noch?
          Drücke auf den “Weiter”- Button und zeige dir selbst, wie viel du
          erreicht hast. Wir glauben an dich! Los geht's!
        </p>
      </div>
    </div>
  );
};

export default CryptoAssets;
