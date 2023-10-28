import Image1 from '../../../images/courseAdvanced/Investition_Kryptoassets.png';
import Image2 from '../../../images/courseAdvanced/Investition2.png';
import { StoryBoxLeo } from '../../StoryBox';

function CryptoAssetsAdoptionPart6() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const leoStory = [
    'Leo hat nun einige Erkenntnisse zu den Bereichen des derzeitigen Wissenstands zu Kryptoassets und der Art der Informationsbeschaffung dieser gewinnen können. Im letzten Abschnitt der Umfrage interessiert sich Leo besonders dafür, wer bereits schon einmal in Kryptoassets investiert hat und wie die eigene Erfahrung diesbezüglich eingeschätzt wird.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Investitionen
      </h2>

      {isComingFromPreviousPage && <StoryBoxLeo paragraphs={leoStory} />}
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image1}
          alt="Knockledge Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="font-bold mb-4">
        23 der 58 Teilnehmer, also ca. 40%, haben schon einmal in Kryptoassets
        investiert.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          Die Frage, ob grundsätzlich in der Zukunft{' '}
          <strong>Interesse an einer Investition in Kryptoassets</strong>{' '}
          besteht, haben <strong>30 (52%)</strong> bejaht.
        </li>
        <li>Die Mehrheit würde also zukünftig in Kryptoassets investieren.</li>
      </ul>
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image2}
          alt="Knockledge2 Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="mb-12 font-bold">
        Von den 35 Teilnehmern, die derzeitig noch nicht Kryptoassets anlegen,
        haben 16 Personen (46%) angegeben, in Zukunft darin investieren zu
        wollen.
      </p>
      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Was bedeutet dies für deine Bank:
      </h3>
      <p className="mb-12">
        Das Interesse in Kryptoassets zu investieren wächst. Deine Bank sollte
        auf diese <strong>steigende Nachfrage reagieren</strong>, indem sie ihr
        <strong>
          Informationsangebot zu Kryptoassets erweitert und entsprechende
          Dienstleistungen anbietet
        </strong>
        . Deine Bank kann dem Kunden somit in seinen Investitionsentscheidungen
        unterstützen und dadurch für mehr Kundenzufriedenheit sorgen.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart6;
