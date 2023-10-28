import Popularity from '../../../images/courseAdvanced/Bekanntheitsgrad Kryptoassets und Blockchain 1.png';
import { StoryBoxLeo } from '../../StoryBox';

function CryptoAssetsAdoptionPart1() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const leoStoryPart1 = [
    'Um die Akzeptanz von Kryptoassets in der Gesellschaft herauszufinden, beauftragt Simone den Werkstudenten Leo eine Umfrage durchzuführen.',
    'Mittels der Umfrage soll aufgezeigt werden, inwieweit Kryptoassets bereits in den Mainstream vorgedrungen sind und welche Faktoren die Akzeptanz in der Gesellschaft beeinflussen. Da gerade junge Leute für diese Thematik sehr zu begeistern sind, leitet Leo die Umfrage an seine Kommilitonen:innen bzw. an die Kurse, die er momentan belegt, weiter.',
  ];

  const leoStoryPart2 = [
    'Zunächst möchte Leo erst einmal herausfinden wie viele Studenten überhaupt schon einmal etwas von den Begriffen “Blockchain” und “Kryptoassets” gehört haben. Er kommt dabei zu folgenden Ergebnissen:',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Adaption von Kryptoassets in der Gesellschaft: Studie unter Studierenden
      </h1>

      <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Bekanntheitsgrad von Kryptoassets
      </h2>

      {isComingFromPreviousPage && <StoryBoxLeo paragraphs={leoStoryPart1} />}
      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Demographische Aspekte:
      </h3>
      <p className="font-bold mb-4">
        An der Umfrage haben insgesamt 58 Studenten teilgenommen.
      </p>

      <ul className="mb-12 list-disc ml-4">
        <li>Der Großteil kommt aus den wirtschaftlichen Studiengängen.</li>
        <li>
          <strong>55%</strong> der Befragten sind in den Studiengängen{' '}
          <strong>Management</strong> oder{' '}
          <strong>Wirtschaftswissenschaften</strong> eingeschrieben.
        </li>
        <li>
          <strong>38%</strong> sind in den Studiengängen{' '}
          <strong>Wirtschaftsinformatik</strong> bzw.{' '}
          <strong>Information Systems</strong> oder <strong>Informatik</strong>{' '}
          eingeschrieben.
        </li>
        <li>
          <strong>4%</strong> haben angegeben in einem{' '}
          <strong>anderen Studiengang</strong> immatrikuliert zu sein.
        </li>
        <li>
          Die Mehrheit, <strong>66%</strong>, gab an <strong>männlich</strong>{' '}
          zu sein.
        </li>
        <li>
          <strong>34%</strong> davon sind <strong>weiblich</strong>.
        </li>
      </ul>
      {isComingFromPreviousPage && <StoryBoxLeo paragraphs={leoStoryPart2} />}
      <div className="flex justify-center items-center mb-8">
        <img
          src={Popularity}
          alt="Popularity Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="font-bold mb-4">
        Unter den 58 Befragten hat die Mehrheit angegeben, bereits schon einmal
        die Begriffe “Blockchain” und “Kryptoassets” gehört zu haben. Auffällig
        ist, dass der Begriff “Blockchain”, also die dahinterliegende
        Technologie, unter den Studenten etwas bekannter ist.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          Nur sehr wenige sind mit den Begriffen jedoch noch nicht vertraut.
        </li>
        <li>
          So kennt{' '}
          <strong>
            nur eine Person aus den 58 Teilnehmern beide Begriffe nicht
          </strong>
          .
        </li>
        <li>
          Die weiteren sechs Personen sind{' '}
          <strong>nur mit dem “Kryptoassets”-Begriff nicht vertraut</strong>.
        </li>
        <li>
          Dennoch ist zu erkennen, dass{' '}
          <strong>Kryptoassets im Vergleich noch unbekannter sind</strong>.
        </li>
      </ul>
      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Was bedeutet dies für deine Bank:
      </h3>
      <p className="mb-4">
        Aus den durchgeführten Interviews mit den Experten wurde schnell
        deutlich, dass der Terminus &quot;Kryptoassets&quot; noch nicht klar
        definiert ist.
      </p>
      <p className="mb-4">
        Einige verstehen unter dem Begriff &quot;Kryptoassets&quot;
        ausschließlich Kryptowährungen, während andere ihn als Oberbegriff für
        verschiedene Vermögenswerte wie Kryptowährungen, Utility Token, NFTs
        usw. betrachten.
      </p>
      <p className="mb-12">
        Dies kann schnell für Verwirrung sorgen. Falls deine Bank, beabsichtigt,
        Kryptoassets anzubieten, ist es somit entscheidend, bereits zu Beginn
        eine <strong>klare Definition</strong> darzulegen.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart1;
