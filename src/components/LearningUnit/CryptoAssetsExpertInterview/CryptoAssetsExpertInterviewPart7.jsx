import ExpertInsights from '../../ExpertInsights';
import ExpertOpinion from '../../ExpertOpinion';

function CryptoAssetsExpertInterviewPart7() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Wissensmanagement in der Bankenbranche bezüglich Kryptoassets:
      </h2>
      <ExpertOpinion
        paragraphs={[
          '„Also ich muss zum Beispiel immer nachweisen, dass ich als Geschäftsführer dieses Geschäft, das ich betreibe, auch verstehe und dafür qualifiziert bin, dass ich mich fachlich eigne. Und wenn ich dann auf einmal Kryptowerte verwahre, muss ich eben begründen können, dass ich verstehe, was ich da mache. Also ich schauen muss mit Seminaren oder so. Also da bastelt man so ein bisschen im Lebenslauf oder man guckt in den Lebenslauf und denkt sich was hatte hier IT-Bezug, welche Fortbildung, welche meinetwegen auch Schulkurse oder so hat jemand belegt, um ja damit wir jetzt nachweisen können, dass er dieses Wissen hat.”',
        ]}
      />
      <ExpertInsights
        title="Interne Wissensentwicklung:"
        items={[
          'Banken befinden sich in einer Lernphase, wenn es um Kryptoassets geht, und bauen internes Wissen auf.',
          'Ein Mangel an Verständnis für Kryptoassets und digitale Vermögenswerte besteht in vielen Banken, insbesondere auf höheren Führungsebenen.',
          'Die Integration von Kryptoassets erfordert sowohl technisches Fachwissen als auch Kenntnisse über traditionelle Bankgeschäfte.',
          'Die Bankenbranche ist traditioneller und langsamer bei der Einführung neuer Technologien.',
          'Der Wissensaufbau erfordert interne Schulungsprogramme und gezielte Nachwuchsförderung.',
        ]}
      />
      <ExpertInsights
        title="Akquisition von Wissen:"
        items={[
          'Banken ziehen externe Berater und Experten hinzu, um sich Fachkenntnisse in Kryptoassets anzueignen.',
          'Einige Banken beteiligen sich an Krypto-Unternehmen oder übernehmen diese, um direkten Zugang zu Fachwissen zu erhalten.',
          'Partnerschaften mit Krypto-Unternehmen ermöglichen den Wissensaustausch und den Zugriff auf Fachkenntnisse.',
        ]}
      />
      <ExpertInsights
        title="Identifikation des vorhandenen Wissensstands:"
        items={[
          'Der Wissensstand in Bezug auf Kryptoassets kann in Banken stark variieren.',
          'Einige Banken haben kein vorhandenes Wissen oder Verständnis für Kryptoassets, was auf den Anfangsstatus der Integration hinweist.',
          'Bildungsbarrieren können den Wissensaufbau behindern, was Schulungen und Schulungsprogramme erforderlich macht.',
          'Einige Banken verfügen bereits über ein umfassendes Wissen im Bereich Kryptoassets und haben Fortschritte bei der Integration gemacht.',
          'In einigen Fällen werden Prozesse im Zusammenhang mit Kryptoassets ausgelagert, was auf einen Mangel an internem Wissen hinweisen kann.',
        ]}
      />
      <p className="font-bold">
        Die Identifikation des aktuellen Wissensstands und die gezielte
        Entwicklung von Fachkenntnissen sind entscheidend für den erfolgreichen
        Umgang mit Kryptoassets in der Bankenbranche.
      </p>
    </div>
  );
}

export default CryptoAssetsExpertInterviewPart7;
