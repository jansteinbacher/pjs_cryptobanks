import BerndVideo from "../videos/courseOfBeginner/characterBerndIntroduction.mp4";

const CourseBeginnerIntroduction = () => {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        Willkommen im Beginner-Kurs
      </h1>
      <p className="mb-12">
        Hallo und herzlich willkommen im Beginner-Kurs zu Kryptoassets! Du hast
        dich für diesen Kurs entschieden, da du ein grundlegendes Verständnis
        zum Thema Kryptoassets erhalten möchtest? Zudem interessierst du dich
        für die Einbindung von Kryptoassets in traditionelle Finanzprodukte und
        möchtest Kundenbedürfnisse im Bereich Kryptoassets verstehen? Dann ist
        der Beginner-Kurs genau das richtige für dich. Aus der Perspeltive von
        Bernd, dem Geschäftsführer der fikitven Silberbach & Söhne Bank tauchst
        du in die Welt der Kryptoassets ein.
      </p>

      <div className="p-6 mb-12 bg-green-200 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Bernds Entdeckung der Krypto-Welt: Ein Blick über den Horizont der
          Tradition
        </h2>
        <p className=" italic text-justify mb-4">
          Bernd ist seit über zwei Jahrzehnten ein fester Bestandteil der
          traditionellen, lokalen Silberbach & Söhne Bank. Er kennt die Welt der
          klassischen Finanzprodukte in- und auswendig. Doch tief in ihm regt
          sich Neugier, als er von der aufkommenden Welt der Kryptoassets hört.
          Ein Bereich, der weit über seine bisherigen Kenntnisse hinausgeht und
          doch das Potenzial hat, die Finanzlandschaft zu verändern.
        </p>
        <p className=" italic text-justify font-semibold mb-8">
          Lerne Bernd jetzt näher kennen und entdecke gemeinsam mit ihm die Welt
          der Kryptoassets:
        </p>
        <div>
          <video controls className="w-full h-full rounded-lg">
            <source src={BerndVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a href="/course-beginner">
          <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
            Beginne die Reise
          </button>
        </a>
      </div>
    </div>
  );
};

export default CourseBeginnerIntroduction;
