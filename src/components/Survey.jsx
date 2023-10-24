import {
  CryptoAssetsAdoption1,
  CryptoAssetsAdoption2,
  CryptoAssetsAdoption3,
  CryptoAssetsAdoption4,
  CryptoAssetsAdoption5,
  CryptoAssetsAdoption6,
  CryptoAssetsAdoption7,
  CryptoAssetsAdoption8,
  CryptoAssetsAdoption9,
  CryptoAssetsAdoption10,
} from './LearningUnit';

function Survey() {
  return (
    <div>
      <div className="container mx-auto py-12 px-12 max-w-screen-lg">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
          Adaption von Kryptoassets in der Gesellschaft: Studie unter
          Studierenden
        </h1>
        <p className="text-xl font-bold">Übersicht:</p>

        <ul className="list-disc ml-4 mt-4">
          <li className="hover:underline">
            <a href="#1">Bekanntheitsgrad von Kryptoassets</a>
          </li>
          <li className="hover:underline">
            <a href="#2">Kenntnisstand Kryptoassets</a>
          </li>
          <li className="hover:underline">
            <a href="#3">Informationsaufbau im Bereich Kryptoassets</a>
          </li>
          <li className="hover:underline">
            <a href="#4">Beratungsangebote der Banken zum Thema Kryptoassets</a>
          </li>
          <li className="hover:underline">
            <a href="#5">Gewünschte Bankberatungsangebote</a>
          </li>
          <li className="hover:underline">
            <a href="#6">Investitionen</a>
          </li>
          <li className="hover:underline">
            <a href="#7">Investitionen in Kryptoassets</a>
          </li>
          <li className="hover:underline">
            <a href="#8">Risikobereitschaft bei Kryptoassets</a>
          </li>
          <li className="hover:underline">
            <a href="#9">Verbesserungsvorschläge</a>
          </li>
          <li className="hover:underline">
            <a href="#10">Zusammenfassung</a>
          </li>
        </ul>
      </div>
      <div id="1">
        <CryptoAssetsAdoption1 />
      </div>
      <div id="2">
        <CryptoAssetsAdoption2 />
      </div>
      <div id="3">
        <CryptoAssetsAdoption3 />
      </div>
      <div id="4">
        <CryptoAssetsAdoption4 />
      </div>
      <div id="5">
        <CryptoAssetsAdoption5 />
      </div>
      <div id="6">
        <CryptoAssetsAdoption6 />
      </div>
      <div id="7">
        <CryptoAssetsAdoption7 />
      </div>
      <div id="8">
        <CryptoAssetsAdoption8 />
      </div>
      <div id="9">
        <CryptoAssetsAdoption9 />
      </div>
      <div id="10">
        <CryptoAssetsAdoption10 />
      </div>
    </div>
  );
}

export default Survey;
