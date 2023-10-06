import React, { useState } from 'react';
import Challenge from '../../../images/courseExpert/challengequestion.png';

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

const CryptoCustodyChallengesPart1 = () => {
  const articlesources = [
    'Z. Jaroucheh and G. Baraq, “Crypto Assets Custody: Taxonomy, Components, and Open Challenges,” 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), Dubai, United Arab Emirates, 2023, pp. 1-6.',
    'T. Reindl, “Nasdaq: Kryptoverwahrung noch für dieses Jahr geplant,” BTC-ECHO, Mar. 24, 2023. [Online]. Available: https://www.btc-echo.de/schlagzeilen/nasdaq-kryptoverwahrung-noch-im-zweiten-quartal-geplant-161586/. [Accessed: Sept. 29, 2023].',
    'C. Thuo, “US-Ausschuss verabschiedet Gesetz zur Krypto-Verwahrung – Chancer-Vorverkauf beschleunigt sich,” invezz.com, Jul. 31, 2023. [Online]. Available: https://invezz.com/de/news/2023/07/31/us-ausschuss-gesetz-krypto-verwahrung-chancer-vorverkauf-beschleunigt/. [Accessed: Sept. 29, 2023]',
  ];

  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Herausforderungen & Zukunftsaussichten
      </h1>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Tobias begibt sich zusammen mit Simone auf eine Konferenz. Hier
            erfährt er einiges über die Verwahrung von Kryptoassets. Er stellt
            sich dennoch die Fragen welche Herausforderungen die
            Kryptoverwahrung mit sich bringt und wie es in der Zukunft mit der
            Verwahrung von Kryptoassets aussieht. Um Antworten diese Fragen zu
            bekommen, beginnt er Gespräche mit den Experten auf der Konferenz zu
            führen. Er kann hierbei ebenfalls einige Informationen für sich
            mitnehmen:
          </p>
        </div>
      )}

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Herausforderungen
      </h2>
      <div className="flex justify-center items-center">
        <img src={Challenge} alt="Challenge" className="w-full md:w-1/2" />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Regulierung</h2>

      <p className="mb-8">
        Die Vielfalt und teilweise fehlende Klarheit über die regulatorischen
        Rahmenbedingungen stellen auch eine Herausforderung für die Verwahrung
        von Kryptoassets dar. Die Verwahrer müssen sich den dauerhaft ändernden
        Regulatoriken anpassen. Die Herausforderung hierbei sind die
        entstehenden Kosten, die sich aus der ständigen Anpassung von
        Sicherheitsmaßnahmen, Reports und Audits ergeben{' '}
        <a href="#sources">[1]</a>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Datenschutz</h2>

      <p className="mb-8">
        Auch der Schutz der Daten von den jeweiligen Nutzern muss von den
        Verwahrungsstellen gewährleistet werden. Hierfür werden sie verpflichtet
        die Regulatorien zum Datenschutz einzuhalten <a href="#sources">[1]</a>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Kosten</h2>

      <p className="mb-8">
        Wie bereits erwähnt, ergeben sich bereits einige Kosten aus der
        Einhaltung der Regulatorien. Darüber hinaus entstehen noch weitere
        Kosten aus der Identifikation einer Balance aus wettbewerbsfähigen
        Preisen für Verwahrungsdienstleistungen und den Ausgaben für den Betrieb
        und potentiellen Risiken <a href="#sources">[1]</a>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Sicherheit</h2>

      <p className="mb-8">
        Die ständige Verbesserung der Sicherheit von Kryptoverwahrungs-Systemen
        stellt eine weitere Herausforderung dar. Um Hacker und Cyber-Bedrohungen
        fernzuhalten, müssen Maßnahmen zur sicheren Verwaltung privater
        Schlüssel und die Minimierung des Risikos von Insider-Bedrohungen
        eingesetzt werden <a href="#sources">[1]</a>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Versicherung
      </h2>

      <p className="mb-8">
        Des Weiteren müssen Versicherungsprodukte geschaffen werden, die
        speziell auf die Kryptoverwahrung ausgerichtet sind{' '}
        <a href="#sources">[1]</a>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Skalierbarkeit
      </h2>

      <p className="mb-8">
        Durch die wachsende Nachfrage in Bezug auf Kryptoverwahrung und der
        zunehmenden Komlexität auf dem Kryptoassets-Markt ist auch der Umgang
        mit dem starken Wachstum eine beträchtliche Schwierigkeit{' '}
        <a href="#sources">[1]</a>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Transparenz</h2>

      <p className="mb-8">
        Zuletzt ist die Schaffung von Transparenz noch eine weitere
        Herausforderung. Hier soll dafür gesorgt werden mehr Klarheit in den
        Bereichen Reporting, Auditing, Verantwortlichkeiten und der Überwachung
        von Kryptoassets geschaffen werden <a href="#sources">[1]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoCustodyChallengesPart1;
