import Image1 from '../../../images/courseAdvanced/verbesserungsvorschlaege.png';
import { StoryBoxLeo } from '../../StoryBox';

function CryptoAssetsAdoptionPart9() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const leoStory = [
    'Zum Abschluss der Umfrage möchte sich Leo noch Verbesserungsvorschläge einholen, die ihm ein besseres Verständnis darüber geben, welche Erwartungen die potentiellen Kunden an seine Bank haben könnten.',
    'Dies ermöglicht es ihm, den Erwartungshaltungen entgegenzukommen und Kundzufriedenheit sicherzustellen, sodass die Bank letztendlich von langfristigen Kundenbeziehungen und dem Zuwachs neuer Kunden profitiert.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Verbesserungsvorschläge
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
        10 der 58 Teilnehmer haben Verbesserungsvorschläge angegeben.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          So gab es Empfehlungen für eine{' '}
          <strong>verbesserte Aufklärung in Bezug auf die Risiken</strong>, die
          die digitalen Assets mit sich bringen.
        </li>
        <li>
          Außerdem sollte{' '}
          <strong>
            Klarheit über die Regulierungen bezüglich Kryptoassets geschaffen
            bzw. grundsätzlich besser reguliert
          </strong>{' '}
          werden.
        </li>
        <li>
          Generell sollte eine <strong>erhöhte Transparenz</strong> dargeboten
          werden.
        </li>
        <li>
          Ein Teilnehmer weist darauf hin, dass eine{' '}
          <strong>Bank Dienstleistungen zum Anlegen von Bitcoin</strong>{' '}
          anbieten sollte.
        </li>
        <li>
          Ein Weiterer schlägt eine{' '}
          <strong>
            KI-basierte App vor, die den Verlust von einer großen Menge an Geld
            verhindert
          </strong>
          , da diese als benutzerfreundlich betrachtet wird.
        </li>
        <li>
          Darüber hinaus sollte eine Bank{' '}
          <strong>
            für Neukunden ein leichtes Onboarding und ausführliche Informationen
            zur Kryptoverwahrung, sowie den Vor- und Nachteilen von
            Wallet-Lösungen
          </strong>{' '}
          zur Verfügung stellen.
        </li>
        <li>
          <strong>Zwei der 10 Rückmeldungen</strong> deuten darauf hin, dass
          eine <strong>Investition in Kryptoassets als nicht sinnvoll</strong>{' '}
          erachtet wird.
        </li>
      </ul>
      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Was bedeutet dies für deine Bank:
      </h3>
      <p className="mb-12">
        Diese Vorschläge bieten deiner Bank einen wertvollen Einblick in die
        Präferenzen der potentiellen Anleger. Eine Umsetzung dieser kann{' '}
        <strong>
          beim Kunden Vertrauen schaffen und deine Bank konkurrenzstark machen
        </strong>
        .
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart9;
