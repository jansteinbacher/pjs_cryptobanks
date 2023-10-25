import Image1 from '../../../images/courseAdvanced/Investitionsrisiko.png';
import Image2 from '../../../images/courseAdvanced/InstitutionKryptoasset-Investitionen.png';

function CryptoAssetsAdoptionPart8() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Risikobereitschaft bei Kryptoassets
      </h2>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify mb-4">
            Da einige der Befragten noch nicht in die digitalen Assets
            investiert haben, frägt sich Leo, woran das wohl liegen könnte. Er
            lässt daher die Teilnehmer beurteilen, wie sie das Risiko bei einer
            Investition in Kryptoassets einschätzen.
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
        Auffällig ist, dass jeder der 58 Befragten, der Investition in
        Kryptoassets ein gewisses Risiko zuordnet. So schätzen 33% das
        Investitionsrisiko als sehr hoch, 53% als hoch und 14% als mittelmäßig
        ein. Keiner der Befragten ordnet der Investition in die digitalen Assets
        ein niedriges Risiko zu.
      </p>
      <p className="mb-8">
        <strong>Was bedeutet dies für deine Bank:</strong>
        <br />
        Angesichts der Tatsache, dass eine Investition in Kryptoassets unter
        allen Befragten als risikoreich eingestuft wird, sollte deine Bank
        darauf abzielen Sicherheit zu gewährleisten. Dies könnte sie umsetzen,
        indem sie Transparenz schafft, Beratung anbietet, über potentielle
        Risken aufklärt und mittels Sicherheitsmaßnahmen gezielt den Gefahren
        entgegensteuert.
      </p>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify mb-4">
            Leo ist auch interessiert daran zu erfahren, ob die Teilnehmer über
            die Bank ihre Kryptotransaktionen durchführen würden, oder andere
            Plattformen dafür bevorzugen. Anhand von diesen Informationen
            wünscht er sich einen Einblick in die Präferenzen potentieller
            Kunden zu erhalten und daraus Lösungsmaßnahmen und Strategien
            abzuleiten, die seiner Bank zugutekommen und diese weiterhin am
            Markt konkurrenzfähig bleibt.
          </p>
        </div>
      )}
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image2}
          alt="Knockledge2 Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="mb-8">
        Bei der Frage, wo die Befragten grundsätzlich in Kryptoassets
        investieren würden, wurden folgende Ergebnisse angezeigt. Die Mehrheit,
        45%, würde über Kryptobörsen, wie bspw. Coinbase, ihre Kryptoassets
        handeln. 33% würden über Neo Broker investieren und 17% würden das
        Angebot von Banken wahrnehmen.
      </p>
      <p className="mb-8">
        <strong>Was bedeutet dies für deine Bank:</strong>
        <br />
        Um die Wettbewerbsfähigkeit deiner Bank zu gewährleisten, ist es von
        großer Bedeutung, dass diese ihre Informationen und Dienstleistungen
        gezielt anpasst, um mit den Neo Brokern oder Kryptobörsen mithalten zu
        können. Anhand von innovativen Geschäftsmodellen, Kooperationen zu
        Kryptobörsen und einer sorgfältigen Auswahl an Beratungsangeboten, kann
        deine Bank neben der Bindung ihrer derzeitigen Kunden auch
        Neukundengewinnung garantieren.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart8;
