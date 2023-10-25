function About() {
  return (
    <div
      id="about"
      className="bg-white container mx-auto py-12 px-12 max-w-screen-lg"
    >
      <h2 className="text-xl md:text-xl font-bold mb-4 text-center ">
        Über das Projekt
      </h2>
      <p className="text-gray-600 text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="mt-8 md:mt-8 text-center">
        <a
          href="https://github.com/jansteinbacher/pjs_cryptobanks"
          className="inline-block bg-green-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition"
        >
          📚 GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default About;
