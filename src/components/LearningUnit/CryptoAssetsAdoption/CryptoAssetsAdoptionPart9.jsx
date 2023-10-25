import Image1 from '../../../images/courseAdvanced/verbesserungsvorschlaege.png';

function CryptoAssetsAdoptionPart9() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Verbesserungsvorschläge
      </h2>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify mb-4">
            Zum Abschluss der Umfrage möchte sich Leo noch
            Verbesserungsvorschläge einholen, die ihm ein besseres Verständnis
            darüber geben, welche Erwartungen die potentiellen Kunden an seine
            Bank haben könnten. Dies ermöglicht es ihm, den Erwartungshaltungen
            entgegenzukommen und Kundzufriedenheit sicherzustellen, sodass die
            Bank letztendlich von langfristigen Kundenbeziehungen und dem
            Zuwachs neuer Kunden profitiert.
          </p>
        </div>
      )}
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image1}
          alt="Knockledge Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="mb-8">
        10 der 58 Teilnehmer haben Verbesserungsvorschläge angegeben. So gab es
        Empfehlungen für eine verbesserte Aufklärung in Bezug auf die Risiken,
        die die digitalen Assets mit sich bringen. Außerdem sollte Klarheit über
        die Regulierungen bezüglich Kryptoassets geschaffen bzw. grundsätzlich
        besser reguliert werden. Generell sollte eine erhöhte Transparenz
        dargeboten werden. Ein Teilnehmer weist darauf hin, dass eine Bank
        Dienstleistungen zum Anlegen von Bitcoin anbieten sollte. Ein Weiterer
        schlägt eine KI-basierte App vor, die den Verlust von einer großen Menge
        an Geld verhindert, da diese als benutzerfreundlich betrachtet wird.
        Darüber hinaus sollte eine Bank für Neukunden ein leichtes Onboarding
        und ausführliche Informationen zur Kryptoverwahrung, sowie den Vor- und
        Nachteilen von Wallet-Lösungen zur Verfügung stellen. Zwei der 10
        Rückmeldungen deuten darauf hin, dass eine Investition in Kryptoasset
        als nicht sinnvoll erachtet wird.
      </p>
      <p className="mb-8">
        <strong>Was bedeutet dies für deine Bank:</strong>
        <br />
        Diese Vorschläge bieten deiner Bank einen wertvollen Einblick in die
        Präferenzen der potentiellen Anleger. Eine Umsetzung dieser kann beim
        Kunden Vertrauen schaffen und deine Bank konkurrenzstark machen.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart9;
