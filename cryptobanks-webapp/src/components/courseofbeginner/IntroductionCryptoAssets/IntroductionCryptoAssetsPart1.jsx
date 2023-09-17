import React, { useState } from "react";
import Nagamoto from "../../../images/courseBeginner/nagamoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
        {showSources ? (
          <>
            Quellen einklappen <FontAwesomeIcon icon={faArrowDown} />
          </>
        ) : (
          <>
            Quellen ausklappen <FontAwesomeIcon icon={faArrowRight} />
          </>
        )}
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

const IntroductionCryptoAssetsPart1 = () => {
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
      <Sources sources={articlesources} />
    </div>
  );
};

export default IntroductionCryptoAssetsPart1;
