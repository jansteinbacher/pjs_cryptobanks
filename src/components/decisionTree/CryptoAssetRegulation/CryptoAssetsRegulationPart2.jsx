import React, { useState } from "react";

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

const CryptoAssetsRegulationPart2 = () => {
  const articlesources = [
    "Deloitte, “The future of Crypto-Assets in a Regulated environment,” deloitte.com, 2021. [Online]. Available: https://www2.deloitte.com/nl/nl/pages/risk/articles/the-future-of-crypto-assets-in-a-regulated-environment.html. [Accessed: Sept. 22, 2023].",
    "C. Boeth, “Krypto-Assets im Investment Management - Regulatorischer Rahmen von Krypto Assets und Anwendungsmöglichkeiten der Technologie für Investment Manager,” deloitte.com, 2021. [Online]. Available: https://www2.deloitte.com/de/de/pages/financial-services/articles/krypto-assets-im-investment-management-regulatory.html. [Accessed: Sept. 22, 2023].",
    "Bundesanstalt für Finanzdienstleistungsaufsicht, “Europäische MiCA-Verordnung: Regel-Fundament für Kryptowerte,” Bundesanstalt für Finanzdienstleistungsaufsicht. [Online]. Available: https://www.bafin.de/SharedDocs/Veroeffentlichungen/DE/Fachartikel/2023/fa_bj_2305_Mica.html. [Accessed Sept. 21, 2023].",
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Europäische MiCA-Verordnung
      </h2>

      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://pixabay.com/de/illustrations/recht-und-ordnung-gesetz-klausel-6311493/"
        >
          Bild folgt noch
        </a>
      </div>

      <p className="mb-8">
        Dank der Einigung auf den MiCA-Entwurf wird dieser zukünftig die oben
        genannten Initiativen mehr unterstützen. MiCA wird Unklarkeiten mindern,
        gemeinsame Definitionen liefern sowie "Grauzonen" ausschließen. Mittels
        MiCA werden die regulatorischen Anforderungen vereint, sodass nationale
        Vorschriften ersetzt werden können. Es wird eine Art "Passporting" für
        EU-weites Handeln eingeführt, sodass eine nationale Registierung obsolet
        wird. Weitere potenzielle Vorteile der Verordnung sind die Verbesserung
        des Marktes hin zu einem sicheren Umfeld für Anbieter und Nutzer, die
        Optimierung des Verbraucherschutz sowie die strenger Regulierung mit dem
        Ziel der Reduktion des Marktmissbrauch.  Die grundlegenden Anforderungen
        gelten für die Ausgabe aller Kryptoassets. Für die Ausgabe von
        Stablecoins gelten strengere Anforderungen. Die Geldwäsche- und
        Terrorismusbekämpfungs-Gesetzgebung (AML/CTF) ist in MiCA nicht
        enthalten, daher ist die bereits bestehende AML/CTF-Gesetzgebung auf
        Krypto-Vermögensdienstleister (KVDs) anwendbar. Dies verschafft
        traditionellen Finanzdienstleistungsunternehmen (FSIs) aufgrund ihrer
        Compliance-Erfahrung einen Vorteil. Emittenten von
        Kryptoasset-Dienstleister werden mehreren Verpflichtungen unterliegen.
        Darunter fällt beispielsweise die Verpflichtung, vor der Emission ein
        Whitepaper zu erstellen, einschließlich der Haftung für den Inhalt des
        Whitepapers, der Eintragung als juristische Person und der Genehmigung
        durch eine Aufsichtsbehörde. KVDs müssen auch Standardanforderungen und
        dienstleistungsspezifische Anforderungen erfüllen{" "}
        <a href="#sources">[2]</a>. Außerdem ist mit Hilfe von MiCA zukünftig
        eine risikogerechte Regulierung von Kryptoassets möglich. MiCA sorgt für
        eine risikogerechte Regulierung. Die Absicht besteht darin, die
        Sicherheit von Anlegern zu erhöhen und zur reibungslosen Funktion der
        Märkte beizutragen. Die Verordnung gewährleistet Rechtssicherheit für
        Innovationen im Bereich der DLT. Bestimmungen für Kryptowerte, die sich
        auf Vermögenswerte und E-Geld-Token (auch als Stablecoins bekannt)
        beziehen, sollen voraussichtlich ab Juli 2024 wirksam werden. Der
        Großteil der MiCA-Verordnung tritt vorraussichtlich erst zu Beginn des
        Jahres 2025 in Kraft <a href="#sources">[3]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoAssetsRegulationPart2;
