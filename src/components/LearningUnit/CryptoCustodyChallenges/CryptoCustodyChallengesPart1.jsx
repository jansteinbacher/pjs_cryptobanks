import Challenge from '../../../images/courseExpert/challengequestion.png';
import CryptoCustodyChallengesSources from './CryptoCustodyChallengesSources';
import { StoryBoxTobias } from '../../StoryBox';

function CryptoCustodyChallengesPart1() {
  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  const tobiasStory = [
    'Tobias begibt sich zusammen mit Simone auf eine Konferenz. Hier erfährt er einiges über die Verwahrung von Kryptoassets. Er stellt sich dennoch die Fragen welche Herausforderungen die Kryptoverwahrung mit sich bringt und wie es in der Zukunft mit der Verwahrung von Kryptoassets aussieht.',
    'Um Antworten diese Fragen zu bekommen, beginnt er Gespräche mit den Experten auf der Konferenz zu führen. Er kann hierbei ebenfalls einige Informationen für sich mitnehmen:',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Herausforderungen & Zukunftsaussichten
      </h1>

      {isComingFromPreviousPage && <StoryBoxTobias paragraphs={tobiasStory} />}

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Herausforderungen
      </h2>
      <div className="flex justify-center items-center">
        <img src={Challenge} alt="Challenge" className="w-full md:w-1/2" />
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Regulierung</h2>

      <p className="mb-4 text-left">
        Die Vielfalt und teilweise fehlende Klarheit über die regulatorischen
        Rahmenbedingungen stellen auch eine Herausforderung für die Verwahrung
        von Kryptoassets dar. Die Verwahrer müssen sich den dauerhaft ändernden
        Regulatoriken anpassen. Die Herausforderung hierbei sind die
        entstehenden Kosten, die sich aus der ständigen Anpassung von
        Sicherheitsmaßnahmen, Reports und Audits ergeben{' '}
        <a href="#sources">[1]</a>.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Datenschutz</h2>

      <p className="mb-4 text-left">
        Auch der Schutz der Daten von den jeweiligen Nutzern muss von den
        Verwahrungsstellen gewährleistet werden. Hierfür werden sie verpflichtet
        die Regulatorien zum Datenschutz einzuhalten <a href="#sources">[1]</a>.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Kosten</h2>

      <p className="mb-4 text-left">
        Wie bereits erwähnt, ergeben sich bereits einige Kosten aus der
        Einhaltung der Regulatorien. Darüber hinaus entstehen noch weitere
        Kosten aus der Identifikation einer Balance aus wettbewerbsfähigen
        Preisen für Verwahrungsdienstleistungen und den Ausgaben für den Betrieb
        und potentiellen Risiken <a href="#sources">[1]</a>.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Sicherheit</h2>

      <p className="mb-4 text-left">
        Die ständige Verbesserung der Sicherheit von Kryptoverwahrungs-Systemen
        stellt eine weitere Herausforderung dar. Um Hacker und Cyber-Bedrohungen
        fernzuhalten, müssen Maßnahmen zur sicheren Verwaltung privater
        Schlüssel und die Minimierung des Risikos von Insider-Bedrohungen
        eingesetzt werden <a href="#sources">[1]</a>.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Versicherung</h2>

      <p className="mb-4 text-left">
        Des Weiteren müssen Versicherungsprodukte geschaffen werden, die
        speziell auf die Kryptoverwahrung ausgerichtet sind{' '}
        <a href="#sources">[1]</a>.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Skalierbarkeit
      </h2>

      <p className="mb-4 text-left">
        Durch die wachsende Nachfrage in Bezug auf Kryptoverwahrung und der
        zunehmenden Komlexität auf dem Kryptoassets-Markt ist auch der Umgang
        mit dem starken Wachstum eine beträchtliche Schwierigkeit{' '}
        <a href="#sources">[1]</a>.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Transparenz</h2>

      <p className="mb-4 text-left">
        Zuletzt ist die Schaffung von Transparenz noch eine weitere
        Herausforderung. Hier soll dafür gesorgt werden mehr Klarheit in den
        Bereichen Reporting, Auditing, Verantwortlichkeiten und der Überwachung
        von Kryptoassets geschaffen werden <a href="#sources">[1]</a>.
      </p>

      <CryptoCustodyChallengesSources />
    </div>
  );
}

export default CryptoCustodyChallengesPart1;
