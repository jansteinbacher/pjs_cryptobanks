import React, { useState } from "react";
import Nagamoto from "../../../images/courseBeginner/nagamoto.png";
import Bernd from "../../../images/courseBeginner/charakterBernd.png";
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
    "S. Nakamoto, “A peer-to-peer electronic cash system,” bitcoin.org, 2008. [Online]. Available: https://bitcoin.org/en/bitcoin-paper. [Accessed Sept. 21, 2023].",
    "A. Olbrecht and G. Pieters, “Crypto-currencies and crypto-assets: An introduction,” Eastern Economic Journal, vol. 49, no. 2, pp. 201–205, 2023.",
    "Vgl. dazu RENNING, BKR 2020, 23, 24; MAUME, in: Maume/Maute, Kryptowerte-HdB, 1 Aufl, 2020, § 12, 19 ff.; zur steuerrechtlichen Einordnung PRINZ, StuB 2019, 257, 257 ff.",
    "S. Nakamoto, “A peer-to-peer electronic cash system,” Bitcoin, https://bitcoin.org/en/bitcoin-paper (accessed Sep. 21, 2023).",
    "H. Treiblmaier, “Toward more rigorous blockchain research: Recommendations for writing Blockchain Case Studies,” Progress in IS, vol. 2, no. 3. pp. 1–15, 2020.",
    "Bundesamt für Sicherheit in der Informationstechnik, “Blockchain Macht Daten Praktisch Unveränderbar,” Bundesamt für Sicherheit in der Informationstechnik. [Online]. Available: https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html. [Accessed Sept. 21, 2023].",
    "S. M. Jain, “Blockchain,” in A Brief Introduction to Web3. Berkley, CA: Apress, 2022, pp. 11–26",
    "A. Baum, “Tokenization—The Future of Real Estate Investment?,” The Journal of Portfolio Management, vol. 47, no. 10, pp. 41–61, 2021.",
    "K. Christodoulou, L. Katelaris, M. Themistocleous, P. Christodoulou, and E. Iosif, “NFTs and the Metaverse Revolution: Research Perspectives and open challenges,” in Blockchains and the Token Economy, M. C. Lacity, H. Treibmeier, Eds. Cham: Palgrave Macmillan, 2022, pp. 139–178.",
    "M. Zheng and P. Sander, “Asset Tokenization of Real Estate in Europe.,” in Blockchains and the Token Economy, M. C. Lacity, H. Treibmeier, Eds. Cham: Palgrave Macmillan, 2022, pp. 139–178.",
    "A Gussmann und F. Weisenberger, “Initial Coin Offerings, Tokens im Kontext der Shared Economy,“ BearingPoint, Frankfurt/Main, Germany, 2018. [Online]. Available: https://www.bearingpoint.com/files/Initial_Coin_Offerings.pdf?download=0&itemId=517162. [Accessed Sept. 21, 2023]",
    "M. Hönig, “Funktionsweise von Coins und token,” in ICO und Kryptowährungen. Wiesbaden: Springer Gabler, 2019, pp. 33–40.",
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
      <div className="p-4 mb-8 bg-green-200 rounded-lg flex items-start">
        <img src={Bernd} alt="Charakterbild" className="w-1/12 h-auto mr-4" />
        <p className="italic text-justify flex-grow">
          Voller Neugierde macht sich Bernd auf die Suche nach Informationen zum
          Thema Kryptoassets, um seinen Wissensdurst zu stillen. In der
          Betriebskantine hat er ein Gespräch zwischen Simone und Tobias zu dem
          Thema mitbekommen. Er hatte die beiden beauftragt sich ebenfalls mit
          dem Thema Kryptoassets auseinanderzusetzen, um ein breites Wissen zu
          Kryptoassets zu bekommen und letztlich eine fundierte Entscheidung für
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
        auf Konzepten, die im Whitepaper von Satoshi Nakamoto skizziert wurden,
        hat sich die Welt der blockchainbasierten digitalen Token rasant
        entwickelt. Bis heute ist die Identität des Pseudonyms Satoshi Nakamoto
        unbekannt <a href="#sources">[1]</a>. Seine Identität unterliegt vielen
        Mythen und Theorien. Es ist möglich, dass seine Identität für immer
        unbekannt bleibt. Inzwischen ist die Zahl an verschiedenen Token
        weltweit auf über 22.000 angewachsen. Die Vision Nakamotos war es
        traditionelle Fiatwährungen zukünftig durch kryptografiegestützte,
        digitale Währungen ­– auch Kryptowährungen genannt ­– zu ersetzen{" "}
        <a href="#sources">[1]</a>, <a href="#sources">[2]</a>. Die
        ursprüngliche Vision Nakamotos hat sich mittlerweile hin zu einem
        umfassenden Ökosystem kryptografischer Vermögenswerte entwickelt, die
        allgemein als Kryptoassets bezeichnet werden. Diese Kryptoassets
        umfassen nun ein breites Anwendungsspektrum, dass nicht nur die
        ursprünglichen Idee der digitalen Währung aufgreift. Es erweitert diese
        um eine umfassendere Palette an kryptografischer Lösungen, darunter
        tokenisierte Mechanismen zur Automatisierung rechtlicher Verträge (Smart
        Contracts) und sogar die Schaffung unveränderlicher Besitznachweise für
        digitale Kunst (Non-Fungible Tokens, NFTs) <a href="#sources">[2]</a>.
        Mehr dazu in Kapitel 3 „Arten von Kryptoassets und ihre Verbindung zu
        traditionellen Finanzprodukten”.
      </p>
      <Sources sources={articlesources} />
    </div>
  );
};

export default IntroductionCryptoAssetsPart1;
