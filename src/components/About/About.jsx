function About() {
  return (
    <div
      id="about"
      className="bg-white container mx-auto py-12 px-12 max-w-screen-lg"
    >
      <h2 className="text-xl md:text-xl font-bold mb-8 text-center ">
        Über das Projekt
      </h2>
      <p className="text-gray-600 text-justify">
        Die E-Learning-Plattform ist ein Projektseminar am Lehrstuhl für BWL und
        Wirtschaftsinformatik von Prof. Dr. A. Winkelmann an der Universität
        Würzburg. Sie hat zum Ziel, Bankmitarbeiter ein umfassendes Verständnis
        für die Integration von Kryptoassets in herkömmliche Bankensysteme zu
        vermitteln.
      </p>

      <div className="mt-8 md:mt-8 text-center">
        <a
          href="https://github.com/jansteinbacher/pjs_cryptobanks"
          className="inline-flex items-center space-x-2 bg-green-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-500 transition"
        >
          Zum GitHub Repository &rarr;
        </a>
      </div>
    </div>
  );
}

export default About;
