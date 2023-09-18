import React, { useState } from "react";
import Regulation from "../../../images/courseAdvanced/regulation.jpg";

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

const CryptoAssetsRegulationPart1 = () => {
  const articlesources = [
    "Ray, S. 2018.The Difference Between Blockchains & Distributed Ledger Technology. in: Towards Data Science. https://towardsdatascience.com/the-difference-between-blockchains-distributed-ledger-technology-42715a0fa92. [abgerufen am 24.08.2023].",
    "Sunyaev, A. und Sunyaev, A. 2020. Distributed ledger technology. Internet computing: Principles of distributed systems and emerging internet-based technologies, S. 265-299.",
    "Nakamoto, S. 2008. A peer-to-peer electronic cash system. https://bitcoin.org/bitcoin.pdf. [abgerufen am 24.08.2023].",
    "Bundesamt für Sicherheit in der Informationstechnik. 2023. Blockchain macht Daten praktisch unveränderbar. https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html. [abgerufen am 24.08.2023].]",
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Regulatorische Landschaft auf nationaler und internationaler Ebene
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Regulatorische Landschaft
      </h2>
      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <p className=" italic text-justify">
          Um ihr Wissen auf diesem Gebiet zu vertiefen, trifft sich Simone mit
          ihrer Freundin Julia, einer Rechtsanwältin für Aufsichtsrecht und
          Investmentfonds mit Fokus auf Themen rund um Krypto & Distributed
          Ledger Technology (DLT). Julia war bekannt für ihre Expertise in
          regulatorischen Angelegenheiten im Bereich der Kryptoassets, und
          Simone war gespannt darauf, von ihrer Erfahrung zu profitieren. Julia
          teilte erste Einblicke in die aktuellen Debatten über die
          Klassifizierung von Kryptoassets, die Regelungen und die
          Verpflichtungen. Sie erklärte, wie diese Aspekte die Legitimität und
          den reibungslosen Betrieb der Kryptoindustrie beeinflussen könnten.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={Regulation}
          alt="Regulation of Crypto Assets"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://pixabay.com/de/illustrations/recht-und-ordnung-gesetz-klausel-6311493/"
        >
          Pixabay
        </a>
      </div>

      <p className="mb-8">
        Der gegenwärtige rechtliche Rahmen ist auf Grund der Neuheit der
        Thematik noch in einem unausgereiften Zustand. Dies ermöglicht
        nationalen Regulierungsbehörden, wie in Deutschland bspw. die BaFin,
        uneinheitlich zu handeln und führt zu erhöhten Compliance-Kosten. Die
        derzeitigen Gesetze fokussieren sich hauptsächlich auf die Bekämpfung
        von Geldwäsche und Terrorismusfinanzierung (AML/CTF), während Aspekte
        des Verbraucherschutzes und der Prävention von Marktmissbrauch
        vergleichsweise noch weniger Berücksichtigung finden. Angesichts der
        wachsenden Popularität des Krypto-Asset-Marktes gibt es des Weiteren
        einen zunehmenden Bedarf und Wunsch nach verstärkter Regulierung, um die
        wirtschaftliche Stabilität zu gewährleisten. Obgleich der
        regulatorischen Komplexität des Marktumfelds sind bereits zahlreiche
        Marktteilnehmer im Bereich der Kryptoassets in Europa und weltweit
        aktiv. Einige Banken experimentieren mit der Ausgabe von
        On-Chain-Anleihe-Token. Ein Bankenkonsortium hat eine Infrastruktur
        geschaffen, die es anderen Plattformen ermöglicht, ihre
        Krypto-Vermögenswerte nach Abschluss des Handels zu verwalten. Einige
        Privatbanken bieten separate Dienste an, die es ihren Kunden erlauben,
        Krypto-Vermögenswerte zu kaufen und zu verkaufen. [1]
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoAssetsRegulationPart1;
