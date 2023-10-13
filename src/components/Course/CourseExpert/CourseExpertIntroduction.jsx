import TobiasVideo from '../../../videos/characterTobiasIntroduction.mp4';

function CourseExpertIntroduction() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        Willkommen im Experten-Kurs
      </h1>
      <p className="mb-12">
        Du hast dich für diesen Kurs entschieden, weil du bereits über ein
        solides Verständnis von Kryptoassets verfügst und nun bereit bist,
        tiefer in die Welt der praktischen Anwendungsfälle einzutauchen. In
        diesem Abschnitt werden wir uns mit einem konkreten Anwendungsfall
        befassen, der die Grundlage für viele weitere spannende Aspekte bildet:
        die Kryptoasset-Verwahrung. In diesem Kurs werden wir gemeinsam in die
        tiefere Welt der Kryptoassets eintauchen, und zwar aus der Perspektive
        von Tobias, einem Produktmanager der fiktiven Silberbach & Söhne Bank.
      </p>

      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Ein Blick in die Kryptoassset-Verwahrung
        </h2>
        <p className=" italic text-justify mb-4">
          Tobias ist seit mehreren Jahren als Produktmanager in der Bank tätig.
          Simone hat ihm die spannende Aufgabe übertragen, die
          Kryptoasset-Verwahrung als ein neues Finanzprodukt in das Bankensystem
          zu integrieren. Aufgrund von Tobias bereits fundierten
          Grundkenntnissen im Bereich Kryptoassets, hat er sich entschlossen,
          sein Verständnis für die Kryptoasset-Verwahrung noch weiter zu
          vertiefen.
        </p>
        <p className=" italic text-justify mb-8">
          Lerne Tobias jetzt näher kennen und entdecke gemeinsam mit ihm die
          Kryptoasset-Verwahrung:
        </p>
        <div>
          {/* eslint-disable jsx-a11y/media-has-caption */}
          <video controls className="w-full h-full rounded-lg">
            <source src={TobiasVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a href="/course-expert?from=expert-course">
          <button
            type="button"
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Beginne die Reise
          </button>
        </a>
      </div>
    </div>
  );
}

export default CourseExpertIntroduction;
