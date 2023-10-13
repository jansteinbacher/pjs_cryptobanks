import SimoneVideo from '../../../videos/characterSimoneIntroduction.mp4';

function CourseAdvancedIntroduction() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        Willkommen im Fortgeschrittenen-Kurs
      </h1>
      <p className="mb-12">
        Hallo und herzlich willkommen im Fortgeschrittenen-Kurs zu Kryptoassets!
        Du hast dich für diesen Kurs entschieden, weil du bereits über ein
        grundlegendes Verständnis von Kryptoassets verfügst und nun tiefer in
        die Materie eintauchen möchtest. Du möchtest verstehen, wie die
        regulatorische Landschaft auf nationaler und internationaler Ebene
        aussieht und wie sie Kryptoassets beeinflusst? Du interessierst dich für
        die Vielfalt der Kryptoasset-Dienstleistungen, die auf dem Markt
        verfügbar sind? Du möchtest einen umfassenden Einblick in die aktuellen
        Trends und die gesellschaftliche Akzeptanz von Kryptoassets erhalten?
        Dann bist du im Fortgeschrittenen-Kurs genau richtig. In diesem Kurs
        werden wir gemeinsam in die tiefere Welt der Kryptoassets eintauchen,
        und zwar aus der Perspektive von Simone, einer Projektmanagerin der
        fiktiven Silberbach & Söhne Bank.
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
          entwickeln. Sie ist sich bewusst, dass die Integration von
          Kryptoassets in die traditionelle Finanzwelt regulatorische Aspekte
          mit sich bringt, die es zu verstehen gilt.
        </p>
        <p className=" italic text-justify mb-8">
          Lerne Simone jetzt näher kennen und entdecke gemeinsam mit ihr die
          Anwendungsmöglichkeiten von Kryptoassets:
        </p>
        <div>
          {/* eslint-disable jsx-a11y/media-has-caption */}
          <video controls className="w-full h-full rounded-lg">
            <source src={SimoneVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a href="/course-advanced?from=advanced-course">
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

export default CourseAdvancedIntroduction;
