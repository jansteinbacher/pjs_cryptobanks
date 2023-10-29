import stateofknowledge from '../../../images/courseAdvanced/Vertiefung_Wissensstand.png';
import { StoryBoxLeo } from '../../StoryBox';

/**
 * Component for displaying part 3 of a section related to the adoption of Cryptoassets in society.
 * This section focuses on assessing students' interest in deepening their knowledge about cryptoassets and how they acquire information on this topic.
 * Depending on user navigation, it may include Leo's story as well.
 */

function CryptoAssetsAdoptionPart3() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const leoStory = [
    'Im nächsten Abschnitt der Umfrage möchte Leo herausfinden, wie die Studenten die Informationen im Bereich “Kryptoassets” akquirieren. Dazu möchte er zunächst einmal abschätzen, ob die Studenten überhaupt daran interessiert sind ihr Wissen bezüglich Kryptoassets zu vertiefen.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Informationsaufbau im Bereich Kryptoassets
      </h2>

      {isComingFromPreviousPage && <StoryBoxLeo paragraphs={leoStory} />}
      <div className="flex justify-center items-center mb-8">
        <img
          src={stateofknowledge}
          alt="stateofknowledge Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="font-bold mb-4">
        Die Hälfte der befragten Studenten, etwa 50%, ist daran interessiert,
        sich vermehrt mit dem Thema Kryptoassets auseinanderzusetzen.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          <strong>22%</strong> sind sich diesbezüglich{' '}
          <strong>noch unsicher</strong>.
        </li>
        <li>
          Ca. <strong>28%</strong> sind nicht{' '}
          <strong>daran interessiert</strong>, ihre bisherigen{' '}
          <strong>Kenntnisse weiter zu vertiefen.</strong>
        </li>
      </ul>
      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Was bedeutet dies für deine Bank:
      </h3>
      <p className="mb-4">
        Deine Bank sollte versuchen mithilfe von{' '}
        <strong>einfacher und ausführlicher Informationsdarstellung</strong>{' '}
        noch weitere Individuen, die derzeit von der Thematik noch überwältigt
        bzw. abgeschreckt sind, abzuholen.
      </p>
      <p className="mb-12">
        Wie sie das tun kann, wird im Folgenden aufgezeigt.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart3;
