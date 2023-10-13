import Experten from '../images/Experten.png';
import Umfrage from '../images/Umfrage.png';
import News from '../images/news.png';
import Myth from '../images/myth.png';

function Startpage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-12 px-12 max-w-screen-xl">
        <div className="grid grid-cols-1 py-16 md:grid-cols-2 gap-8 items-center rounded-lg border border-gray-300 p-8 hover:bg-green-100 mb-16">
          {/* Image */}
          <div className="md:col-span-1 flex justify-center ">
            <img src={Experten} alt="Experten" className="w-32 h-auto p-2" />
          </div>

          {/* Text Content */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Experteninterviews
            </h2>
            <p className="text-gray-600 mb-6">
              &ldquo;Wichtig ist das richtige Risikomanagement!&rdquo;
            </p>
            <a
              href="/interviews"
              className="inline-flex items-center space-x-2 bg-green-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-500 transition"
            >
              Zu den Experteninterviews &rarr;
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 py-16 md:grid-cols-2 gap-8 items-center rounded-lg border border-gray-300 p-8 hover:bg-green-100 mb-16">
          {/* Text Content */}
          <div className="md:col-span-1 px-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Umfrage</h2>
            <p className="text-gray-600 mb-6">
              Umfrage unter Studierenden zum Thema Kryptoassets
            </p>
            <a
              href="/survey"
              className="inline-flex items-center space-x-2 bg-green-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover.bg-green-500 transition"
            >
              Zur Umfrage &rarr;
            </a>
          </div>

          {/* Image */}
          <div className="md:col-span-1 flex justify-center ">
            <img src={Umfrage} alt="Umfrage" className="w-48 h-auto p-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 py-16 md:grid-cols-2 gap-8 items-center rounded-lg border border-gray-300 p-8 hover.bg-green-100 mb-16">
          {/* Image */}
          <div className="md:col-span-1 flex justify-center ">
            <img src={News} alt="News" className="w-32 h-auto p-2" />
          </div>

          {/* Text Content */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">News</h2>
            <p className="text-gray-600 mb-6">
              Die neusten Artikel aus der Welt von Krypto!
            </p>
            <a
              href="/news"
              className="inline-flex items-center space-x-2 bg-green-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover.bg-green-500 transition"
            >
              Zu den News &rarr;
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 py-16 md:grid-cols-2 gap-8 items-center rounded-lg border border-gray-300 p-8 hover.bg-green-100 mb-16">
          {/* Text Content */}
          <div className="md:col-span-1 px-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Myth Busters
            </h2>
            <p className="text-gray-600 mb-6">
              In der Welt von Krypto gibt es einige Mythen. Wir untersuchen
              diese und zeigen auf, was daran wahr ist und was doch nur ein
              Mythos bleibt.
            </p>
            <a
              href="/mythbusters"
              className="inline-flex items-center space-x-2 bg-green-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover.bg-green-500 transition"
            >
              Zum Artikel &rarr;
            </a>
          </div>

          {/* Image */}
          <div className="md:col-span-1 flex justify-center ">
            <img src={Myth} alt="Umfrage" className="w-32 h-auto p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Startpage;
