import stateofknowledge from '../../../images/courseAdvanced/Vertiefung_Wissensstand.png';

function CryptoAssetsAdoptionPart3() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Informationsaufbau im Bereich Kryptoassets
      </h2>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify mb-4">
            Im nächsten Abschnitt der Umfrage möchte Leo herausfinden, wie die
            Studenten die Informationen im Bereich “Kryptoassets” aquirieren.
            Dazu möchte er zunächst einmal abschätzen, ob die Studenten
            überhaupt daran interessiert sind ihr Wissen bezüglich Kryptoassets
            zu vertiefen.
          </p>
        </div>
      )}
      <div className="flex justify-center items-center mb-8">
        <img
          src={stateofknowledge}
          alt="stateofknowledge Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="mb-8">
        Die Hälfte der befragten Studenten, etwa 50%, ist daran interessiert,
        sich vermehrt mit dem Thema Kryptoassets auseinanderzusetzen. 22% sind
        sich diesbezüglich noch unsicher. Ca. 28% sind nicht daran interessiert,
        ihre bisherigen Kentnisse weiter zu vertiefen.
      </p>
      <p className="mb-8">
        <strong>Was bedeutet dies für deine Bank:</strong>
        <br />
        Deine Bank sollte versuchen mithilfe von einfacher und ausführlicher
        Informationsdarstellung noch weitere Individuen, die derzeit von der
        Thematik noch überwältigt bzw. abgeschreckt sind, abzuholen. Wie sie das
        tun kann, wird im Folgenden aufgezeigt.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart3;
