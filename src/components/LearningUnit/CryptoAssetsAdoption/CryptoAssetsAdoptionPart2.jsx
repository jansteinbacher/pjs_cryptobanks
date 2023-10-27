import Knockledge from '../../../images/courseAdvanced/Wissensauspraegung_Kryptoassets_1.png';
import Knockledge2 from '../../../images/courseAdvanced/Kryptoassets_Kenntnisse.png';
import { StoryBoxLeo } from '../../StoryBox';

function CryptoAssetsAdoptionPart2() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const leoStory = [
    'Da die meisten jedoch schon einmal etwas von den Begriffen gehört haben, möchte Leo nun den derzeitigen Kenntnisstand zum Thema “Kryptoassets ermitteln. Dafür lässt er die Umfrageteilnehmer die Ausprägung ihres eigenen Kenntnisstands beurteilen. Darüber hinaus sollen die Teilnehmer angeben, welche Kryptoassets sie bereits kennen.',
  ];
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Kenntnisstand Kryptoassets
      </h2>

      {isComingFromPreviousPage && <StoryBoxLeo paragraphs={leoStory} />}
      <div className="flex justify-center items-center mb-8">
        <img
          src={Knockledge}
          alt="Knockledge Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="mb-8">
        Es ist zu erkennen, dass die Ausprägung des derzeitigen Wissensstands
        unter Studenten zum Thema Kryptoassets noch eher gering ausfällt. So
        besitzen etwa 80% der Befragten niedriges bis mittelmäßiges Wissen in
        diesem Bereich, während sich nur 20% besser mit der Thematik auskennen.
      </p>
      <div className="flex justify-center items-center mb-8">
        <img
          src={Knockledge2}
          alt="Knockledge2 Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="mb-8">
        Deutlich wird, dass jeder Teilnehmer schon einmal etwas zu den
        Kryptoassets gehört hat. Kryptowährungen sind dabei mit einer Angabe von
        100% die bekanntesten Assets. Außerdem kennen 51 (ca. 88%) der Befragten
        Non-fungible Token (NFT). Stablecoins ist unter 43% der Teilnehmenden
        bekannt, nahe gefolgt von Security Token mit etwa 35% und Utility Token
        mit etwa 26%. Eine Person hat darüber hinaus noch angegeben, dass sie
        noch weitere Kryptoassets kennt, die in dieser Umfrage aber nicht
        angegeben wurden.
      </p>
      <p className="mb-8">
        <strong>Was bedeutet dies für deine Bank:</strong>
        <br />
        Noch ist das Wissen von potentiellen Kunden geringer gehalten. Am
        Bekanntesten sind derzeit die Kryptowährungen, die, wie bereits vorher
        festgestellt wurde, häufig mit dem Oberbegriff &quot;Kryptoassets&quot;
        verwechselt werden. Wenn deine Bank Kryptoassets in ihr Portfolio
        integrieren möchte, sollte sie darauf achten, Aufklärung und Transparenz
        über die verschiedenen Kryptoassets bzw. ihre neuen Geschäftsmodelle zu
        schaffen.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart2;
