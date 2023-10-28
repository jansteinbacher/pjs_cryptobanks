import Knockledge from '../../../images/courseAdvanced/Wissensauspraegung_Kryptoassets_1.png';
import Knockledge2 from '../../../images/courseAdvanced/Kryptoassets_Kenntnisse.png';
import { StoryBoxLeo } from '../../StoryBox';

/**
 * Component for displaying part 2 of a section related to the adoption of Cryptoassets in society.
 * This section focuses on assessing the knowledge level of surveyed students regarding cryptoassets and which specific cryptoassets they are familiar with.
 * Depending on user navigation, it may include Leo's story as well.
 */

function CryptoAssetsAdoptionPart2() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const leoStory = [
    'Da die meisten jedoch schon einmal etwas von den Begriffen gehört haben, möchte Leo nun den derzeitigen Kenntnisstand zum Thema “Kryptoassets ermitteln. Dafür lässt er die Umfrageteilnehmer die Ausprägung ihres eigenen Kenntnisstands beurteilen. Darüber hinaus sollen die Teilnehmer angeben, welche Kryptoassets sie bereits kennen.',
  ];
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
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
      <p className="font-bold mb-4">
        Es ist zu erkennen, dass die Ausprägung des derzeitigen Wissensstands
        unter Studenten zum Thema Kryptoassets noch eher gering ausfällt.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          So besitzen etwa{' '}
          <strong>80% der Befragten niedriges bis mittelmäßiges Wissen</strong>{' '}
          in diesem Bereich.
        </li>
        <li>
          Während sich{' '}
          <strong>nur 20% besser mit der Thematik auskennen</strong>.
        </li>
      </ul>

      <div className="flex justify-center items-center mb-8">
        <img
          src={Knockledge2}
          alt="Knockledge2 Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="font-bold mb-4">
        Deutlich wird, dass jeder Teilnehmer schon einmal etwas zu den
        Kryptoassets gehört hat.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          <strong>Kryptowährungen</strong> sind dabei mit einer Angabe von{' '}
          <strong>100%</strong> die bekanntesten Assets.
        </li>
        <li>
          Außerdem kennen{' '}
          <strong>51 (ca. 88%) der Befragten Non-fungible Token (NFT)</strong>.
        </li>
        <li>
          <strong>Stablecoins</strong> sind unter <strong>43%</strong> der
          Teilnehmenden bekannt, nahe gefolgt von{' '}
          <strong>Security Token</strong> mit etwa <strong>35%</strong> und{' '}
          <strong>Utility Token</strong> mit etwa <strong>26%</strong>.
        </li>
        <li>
          <strong>Eine Person</strong> hat darüber hinaus noch angegeben, dass
          sie noch weitere <strong>Kryptoassets</strong> kennt, die in dieser
          Umfrage aber nicht angegeben wurden.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Was bedeutet dies für deine Bank:
      </h3>
      <p className="mb-4">
        Noch ist das{' '}
        <strong>Wissen von potentiellen Kunden geringer gehalten</strong>.
      </p>
      <p className="mb-4">
        <strong>Am Bekanntesten sind derzeit die Kryptowährungen</strong>, die,
        wie bereits vorher festgestellt wurde, häufig mit dem Oberbegriff
        &quot;Kryptoassets&quot; verwechselt werden.
      </p>
      <p className="mb-12">
        Wenn deine Bank Kryptoassets in ihr Portfolio integrieren möchte, sollte
        sie darauf achten,{' '}
        <strong>
          Aufklärung und Transparenz über die verschiedenen Kryptoassets bzw.
          ihre neuen Geschäftsmodelle zu schaffen
        </strong>
        .
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart2;
