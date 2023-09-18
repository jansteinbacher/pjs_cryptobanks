import dltvideo from "../../images/courseBeginner/DLT.mp4";

const CourseAdvancedIntroduction = () => {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        Willkommen im Fortgeschrittenen-Kurs
      </h1>
      <p className="mb-12">
        Hallo und herzlich willkommen im Fortgeshrittenen-Kurs zu Kryptoassets!
        Du hast dich für diesen Kurs entschieden, da du ein grundlegendes
        Verständnis zum Thema Kryptoassets erhalten möchtest? Zudem
        interessierst du dich für die Einbindung von Kryptoassets in
        traditionelle Finanzprodukte und möchtest Kundenbedürfnisse im Bereich
        Kryptoassets verstehen? Dann ist der Beginner-Kurs genau das richtige
        für dich. Aus der Perspeltive von Bernd, dem Geschäftsführer der
        fikitven Silberbach & Söhne Bank tauchst du in die Welt der Kryptoassets
        ein.
      </p>

      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Ein Blick in die Anwendungsmöglichkeiten von Kryptoassets
        </h2>
        <p className=" italic text-justify mb-4">
          Simone, Bernds Mitarbeiterin, arbeitet bereits seit 5 Jahren als
          Projektmanagerin bei der Bank. Bernd hat Simone die Aufgabe gegeben,
          Anwendungsmöglichkeiten von Kryptoassets als potentiell neuen
          Geschäftbereich zu evaluieren. Da Simone bereits über fundierte
          Grundkenntnisse zu Kryptoassets verfügt, machte sie sich daran, ein
          tieferes Verständnis für das wichtige Thema der Kryptoregulierung zu
          entwickeln. Sie war sich bewusst, dass die Integration von
          Kryptoassets in die traditionelle Finanzwelt regulatorische Aspekte
          mit sich brachte, die es zu verstehen galt.
        </p>
        <p className=" italic text-justify mb-8">
          Lerne Simone jetzt näher kennen und entdecke gemeinsam mit ihr die
          Anwendungsmöglichkeiten von Kryptoassets:
        </p>
        <div>
          <video controls className="w-full h-full rounded-lg">
            <source src={dltvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a href="/course-advanced">
          <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
            Beginne die Reise
          </button>
        </a>
      </div>
    </div>
  );
};

export default CourseAdvancedIntroduction;
