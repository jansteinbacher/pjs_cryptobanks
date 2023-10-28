import Image1 from '../../../images/courseAdvanced/Art_WeiseBankberatung.png';
import Image2 from '../../../images/courseAdvanced/Aufbereitung_Informationen.png';
import { StoryBoxLeo } from '../../StoryBox';

/**
 * Component for displaying part 5 of a section related to the adoption of Cryptoassets in society.
 * This section focuses on the desired bank advisory services and information presentation preferences of the survey participants.
 * Depending on user navigation, it may include Leo's story as well.
 */

function CryptoAssetsAdoptionPart5() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const leoStory = [
    'Leo erkennt, dass bei der Art und Weise zur Akquirierung von Informationen bezüglich Kryptoassets die Beratung durch einen Bankmitarbeiter am wenigsten gefragt ist. Dennoch möchte er wissen, ob die Befragten grundsätzlich Interesse an Bank-Beratungsangeboten zu Kryptoassets haben. Dabei kommt er zu folgenden Ergebnissen:',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Gewünschte Bankberatungsangebote
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
        Über eine Online-Lernplattform bzw. Tutorials würden sich 33% der
        Befragten und somit der Großteil über Kryptoassets informieren.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          <strong>Marktstudien, Fallstudien oder Erfahrungsberichte</strong>{' '}
          sind für <strong>24%</strong> der Teilnehmer, die bevorzugte Art und
          Weise sich Wissen darüber anzueignen, nahe gefolgt von einem{' '}
          <strong>eingefügten Extra-Bereich im Online-Banking mit 21%</strong>.
        </li>
        <li>
          <strong>15%</strong> würden ein{' '}
          <strong>Gespräch mit einem Bankberater</strong> als Informationsquelle
          nutzen.
        </li>
      </ul>
      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Was bedeutet dies für deine Bank:
      </h3>
      <p className="mb-4">
        Der Grund dafür, dass die wenigsten ein persönliches Beratungsgespräch
        durch einen Bankmitarbeiter bevorzugen, könnte darin liegen, dass
        digitale Informationsquellen als komfortabler empfunden werden.
      </p>
      <p className="mb-4">
        Die Nachfrager können also die Art und Weise der Wissensaneignung in
        ihrer selbstbestimmten Zeit aussuchen. Darüber hinaus können diese
        jederzeit auf Informationen, die sie benötigen, zurückgreifen.
      </p>
      <p className="mb-4">
        Bei einem persönlichen Beratungsgespräch können Informationen überhört
        oder schnell vergessen werden.
      </p>
      <p className="mb-12">
        Nichtsdestotrotz sollten{' '}
        <strong>
          Beratungsgespräche, vor allem für Kunden, die persönliche
          Unterstützung benötigen
        </strong>
        , von Seiten deiner Bank angeboten werden .
      </p>
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image2}
          alt="Knockledge2 Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="font-bold mb-4">
        Die unter den Teilnehmern bevorzugte Darstellung der Informationen zu
        den eigenen Kryptoassets wäre eine Funktion zum Integrieren der Wallets,
        die mit etwa 41% favorisiert wird.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          Zu <strong>36%</strong> wünschen sich die Befragten eine{' '}
          <strong>
            Integration der Informationen in die Aufteilungsansicht der
            Ersparnisse
          </strong>{' '}
          als einen zusätzlichen Bereich.
        </li>
        <li>
          Darüber hinaus gilt das{' '}
          <strong>
            Morning Star Rating, also ein Sterne-Rating der Kryptoassets, mit
            22%
          </strong>{' '}
          ebenfalls als eine ansprechende Darstellungsmethode.
        </li>
      </ul>
      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Was bedeutet dies für deine Bank:
      </h3>
      <p className="mb-4">
        Um einen Überblick über die eigenen Kryptoassets und die vorgenommenen
        Transaktionen zu behalten, könnte deine Bank entweder eine reibungslose{' '}
        <strong>Integration von Wallets</strong> in Betracht ziehen oder diese{' '}
        <strong>
          Informationen in der Aufteilungsansicht bei den Ersparnissen anzeigen
        </strong>
        , sodass die finanzielle Situation genau im Blick gehalten und verwaltet
        werden kann.
      </p>
      <p className="mb-4">
        Zudem ermöglicht ein <strong>Sterne-Rating</strong> dem Kunden Vertrauen
        bzgl. der Sicherheit der jeweiligen digitalen Assets aufzubauen, was ihm
        somit <strong>bei der Wahl seiner Kryptoassets unterstützen</strong>{' '}
        kann.
      </p>
      <p className="mb-12">
        Diese Erkenntnisse sollte deine Bank dazu ermutigen, ihre
        Dienstleistungen entsprechend anzupassen, sodass Kunden Aufklärung und
        Sicherheit verspüren und somit vermehrt in Kryptoassets investieren. Das
        trägt sowohl zur Kundenzufriedenheit als auch zur Wettbewerbsfähigkeit
        deiner Bank bei.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart5;
