import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Sources from './Sources';

function MythsCryptoAssets() {
  const articlesources = [
    // Your source URLs
  ];

  const [myths, setMyths] = useState([
    {
      id: uuidv4(),
      title: 'Mythos 1: Hoher Energieverbrauch',
      content:
        'Ein häufiger Mythos ist, dass Kryptoassets wie Bitcoin aufgrund ihres hohen Energieverbrauchs umweltschädlich sind. Tatsächlich ist der Energieverbrauch ein wichtiger Aspekt, aber es gibt Bestrebungen, den Konsensmechanismus zu ändern und effizientere Lösungen zu entwickeln.',
      isOpen: false,
    },
    {
      id: uuidv4(),
      title: 'Mythos 2: Volatilität',
      content:
        'Ein weiterer Mythos betrifft die Volatilität von Kryptowährungen. Obwohl Kryptoasset-Preise schwanken können, haben sie auch das Potenzial für beträchtliche Gewinne und sind Teil eines sich entwickelnden Finanzmarktes.',
      isOpen: false,
    },
    // Add more myths as needed...
  ]);

  const toggleMyth = (index) => {
    const updatedMyths = [...myths];
    updatedMyths[index].isOpen = !updatedMyths[index].isOpen;
    setMyths(updatedMyths);
  };

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter') {
      toggleMyth(index);
    }
  };

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
        Mythen über Kryptoassets
      </h1>

      {/* Introduction */}
      <p className="mb-8 text-justify">
        Hier können Sie einige gängige Mythen über Kryptoassets entdecken und
        erfahren, warum sie möglicherweise nicht so schlimm sind, wie sie
        erscheinen. Denken Sie über den Mythos nach und erfahren Sie eine
        objektive Einschätzung dazu, wenn Sie auf den Mythos klicken!
      </p>

      {myths.map((myth) => (
        <div className="mb-8" key={myth.id}>
          <button
            type="button"
            className="text-lg font-semibold text-gray-800 mb-4 cursor-pointer"
            onClick={() => toggleMyth(myth.id)}
            onKeyPress={(e) => handleKeyPress(e, myth.id)}
          >
            {myth.title}
          </button>
          {myth.isOpen && <p className="text-justify">{myth.content}</p>}
        </div>
      ))}

      {/* Sources */}
      <Sources sources={articlesources} />
    </div>
  );
}

export default MythsCryptoAssets;
