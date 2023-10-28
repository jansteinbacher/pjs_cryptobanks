import Image1 from '../../../images/courseAdvanced/Investitionsrisiko.png';
import Image2 from '../../../images/courseAdvanced/InstitutionKryptoasset-Investitionen.png';
import { StoryBoxLeo } from '../../StoryBox';

/**
 * Component for displaying part 8 of a section related to the adoption of Cryptoassets in society.
 * This section focuses on survey participants' perceptions of the risk associated with investing in Cryptoassets and their preferred platforms for conducting Kryptoasset transactions.
 * Depending on user navigation, it may include Leo's story as well.
 */

function CryptoAssetsAdoptionPart8() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const leoStoryPart1 = [
    'Da einige der Befragten noch nicht in die digitalen Assets investiert haben, frägt sich Leo, woran das wohl liegen könnte. Er lässt daher die Teilnehmer beurteilen, wie sie das Risiko bei einer Investition in Kryptoassets einschätzen.',
  ];

  const leoStoryPart2 = [
    'Leo ist auch interessiert daran zu erfahren, ob die Teilnehmer über die Bank ihre Kryptotransaktionen durchführen würden, oder andere Plattformen dafür bevorzugen. Anhand von diesen Informationen wünscht er sich einen Einblick in die Präferenzen potentieller Kunden zu erhalten und daraus Lösungsmaßnahmen und Strategien abzuleiten, die seiner Bank zugutekommen und diese weiterhin am Markt konkurrenzfähig bleibt.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Risikobereitschaft bei Kryptoassets
      </h2>

      {isComingFromPreviousPage && <StoryBoxLeo paragraphs={leoStoryPart1} />}
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image1}
          alt="Knockledge Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="font-bold mb-4">
        Auffällig ist, dass jeder der 58 Befragten, der Investition in
        Kryptoassets ein gewisses Risiko zuordnet.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          So schätzen <strong>33%</strong> das Investitionsrisiko als{' '}
          <strong>sehr hoch</strong>, <strong>53%</strong> als{' '}
          <strong>hoch</strong> und <strong>14%</strong> als{' '}
          <strong>mittelmäßig</strong> ein.
        </li>
        <li>
          <strong>Keiner der Befragten</strong> ordnet der Investition in die
          digitalen Assets ein <strong>niedriges Risiko</strong> zu.
        </li>
      </ul>
      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Was bedeutet dies für deine Bank:
      </h3>
      <p className="mb-12">
        Angesichts der Tatsache, dass eine Investition in Kryptoassets unter
        allen Befragten als risikoreich eingestuft wird, sollte deine Bank
        darauf abzielen Sicherheit zu gewährleisten. Dies könnte sie umsetzen,
        indem sie{' '}
        <strong>
          Transparenz schafft, Beratung anbietet, über potentielle Risken
          aufklärt und mittels Sicherheitsmaßnahmen gezielt den Gefahren
          entgegensteuert
        </strong>
        .
      </p>
      {isComingFromPreviousPage && <StoryBoxLeo paragraphs={leoStoryPart2} />}
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image2}
          alt="Knockledge2 Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="font-bold mb-4">
        Bei der Frage, wo die Befragten grundsätzlich in Kryptoassets
        investieren würden, wurden folgende Ergebnisse angezeigt.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          Die Mehrheit, <strong>45%</strong>, würde über{' '}
          <strong>Kryptobörsen</strong>, wie bspw. Coinbase, ihre Kryptoassets
          handeln.
        </li>
        <li>
          <strong>33%</strong> würden über <strong>Neo Broker</strong>{' '}
          investieren.
        </li>
        <li>
          <strong>17%</strong> würden das Angebot von <strong>Banken</strong>{' '}
          wahrnehmen.
        </li>
      </ul>
      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Was bedeutet dies für deine Bank:
      </h3>
      <p className="mb-12">
        Um die Wettbewerbsfähigkeit deiner Bank zu gewährleisten, ist es von
        großer Bedeutung, dass diese ihre{' '}
        <strong>Informationen und Dienstleistungen gezielt anpasst</strong>, um
        mit den Neo Brokern oder Kryptobörsen mithalten zu können. Anhand von{' '}
        <strong>
          innovativen Geschäftsmodellen, Kooperationen zu Kryptobörsen und einer
          sorgfältigen Auswahl an Beratungsangeboten
        </strong>
        , kann deine Bank neben der Bindung ihrer derzeitigen Kunden auch
        Neukundengewinnung garantieren.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart8;
