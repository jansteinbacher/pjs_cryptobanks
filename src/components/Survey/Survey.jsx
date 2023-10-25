import {
  CryptoAssetsAdoptionPart1,
  CryptoAssetsAdoptionPart2,
  CryptoAssetsAdoptionPart3,
  CryptoAssetsAdoptionPart4,
  CryptoAssetsAdoptionPart5,
  CryptoAssetsAdoptionPart6,
  CryptoAssetsAdoptionPart7,
  CryptoAssetsAdoptionPart8,
  CryptoAssetsAdoptionPart9,
  CryptoAssetsAdoptionPart10,
} from '../LearningUnit';

const sections = [
  {
    id: 1,
    component: CryptoAssetsAdoptionPart1,
    title: 'Bekanntheitsgrad von Kryptoassets',
  },
  {
    id: 2,
    component: CryptoAssetsAdoptionPart2,
    title: 'Kenntnisstand Kryptoassets',
  },
  {
    id: 3,
    component: CryptoAssetsAdoptionPart3,
    title: 'Informationsaufbau im Bereich Kryptoassets',
  },
  {
    id: 4,
    component: CryptoAssetsAdoptionPart4,
    title: 'Beratungsangebote der Banken zum Thema Kryptoassets',
  },
  {
    id: 5,
    component: CryptoAssetsAdoptionPart5,
    title: 'Gewünschte Bankberatungsangebote',
  },
  { id: 6, component: CryptoAssetsAdoptionPart6, title: 'Investitionen' },
  {
    id: 7,
    component: CryptoAssetsAdoptionPart7,
    title: 'Investitionen in Kryptoassets',
  },
  {
    id: 8,
    component: CryptoAssetsAdoptionPart8,
    title: 'Risikobereitschaft bei Kryptoassets',
  },
  {
    id: 9,
    component: CryptoAssetsAdoptionPart9,
    title: 'Verbesserungsvorschläge',
  },
  { id: 10, component: CryptoAssetsAdoptionPart10, title: 'Zusammenfassung' },
];

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
          {sections.map((section) => (
            <li key={section.id} className="hover:underline">
              <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
        </ul>
      </div>
      {sections.map((section) => (
        <div key={section.id} id={section.id}>
          <section.component />
        </div>
      ))}
    </div>
  );
}

export default Survey;
