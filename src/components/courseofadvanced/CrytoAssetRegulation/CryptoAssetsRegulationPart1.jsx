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
    "Deloitte, “The future of Crypto-Assets in a Regulated environment,” deloitte.com, 2021. [Online]. Available: https://www2.deloitte.com/nl/nl/pages/risk/articles/the-future-of-crypto-assets-in-a-regulated-environment.html. [Accessed: Sept. 22, 2023].",
    "C. Boeth, “Krypto-Assets im Investment Management - Regulatorischer Rahmen von Krypto Assets und Anwendungsmöglichkeiten der Technologie für Investment Manager,” deloitte.com, 2021. [Online]. Available: https://www2.deloitte.com/de/de/pages/financial-services/articles/krypto-assets-im-investment-management-regulatory.html. [Accessed: Sept. 22, 2023].",
    "Bundesanstalt für Finanzdienstleistungsaufsicht, “Europäische MiCA-Verordnung: Regel-Fundament für Kryptowerte,” Bundesanstalt für Finanzdienstleistungsaufsicht. [Online]. Available: https://www.bafin.de/SharedDocs/Veroeffentlichungen/DE/Fachartikel/2023/fa_bj_2305_Mica.html. [Accessed Sept. 21, 2023].",
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
        Krypto-Vermögenswerte zu kaufen und zu verkaufen{" "}
        <a href="#sources">[1]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoAssetsRegulationPart1;
