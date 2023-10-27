import { useState } from 'react';
import Sources from './Sources';
import FactCheckPic from '../images/FactCheck.jpg';

function FactCheck() {
  const articlesources = [
    // Your source URLs
  ];

  const [myths, setMyths] = useState([
    {
      id: 0,
      title: 'Fact Check 1: Kryptoassets sind anonym',
      content:
        'Ein weit verbreiteter Irrtum ist, dass Kryptoassets wie Bitcoin vollständig anonym sind. In Wirklichkeit sind sie pseudonym, was bedeutet, dass Transaktionen auf einer öffentlichen Blockchain verfolgt werden können. Dies hat Auswirkungen auf die Privatsphäre der Benutzer und erfordert zusätzliche Schritte zur Anonymisierung.',
      isOpen: false,
    },
    {
      id: 1,
      title: 'Fact Check 2: Kryptoassets sind nur für illegale Aktivitäten',
      content:
        'Eine weitere Fehlvorstellung ist, dass Kryptoassets hauptsächlich für kriminelle Aktivitäten wie Geldwäsche und illegale Online-Märkte verwendet werden. Tatsächlich werden Kryptoassets in verschiedenen legitimen Branchen eingesetzt, einschließlich Finanzdienstleistungen, Technologie und Handel.',
      isOpen: false,
    },
    {
      id: 2,
      title:
        'Fact Check 3: Kryptoassets sind nur für technisch versierte Personen',
      content:
        'Es wird oft angenommen, dass man über fortgeschrittene technische Kenntnisse verfügen muss, um Kryptoassets zu nutzen. In Wirklichkeit sind Kryptoassets für Benutzer mit unterschiedlichem technischen Hintergrund zugänglich. Es gibt benutzerfreundliche Brieftaschen und Plattformen, die den Einstieg erleichtern.',
      isOpen: false,
    },
    {
      id: 3,
      title:
        'Fact Check 4: Kryptoassets verursachen einen zu hohen Energieverbrauch',
      content:
        'Ein weitverbreiteter Mythos besagt, dass Kryptoassets zwangsläufig einen exzessiven Energieverbrauch verursachen. Während es stimmt, dass einige Kryptowährungen, wie Bitcoin, energieintensive Proof-of-Work-Konsensmechanismen verwenden, ist dies nicht auf alle Kryptoassets anwendbar. Erstens entwickeln viele Kryptowährungen alternative Konsensmechanismen, wie Proof-of-Stake oder Delegated Proof-of-Stake, die weitaus weniger Energie verbrauchen als Proof-of-Work-Systeme. Zweitens arbeiten die Krypto- und Blockchain-Communities daran, umweltfreundlichere Technologien und Lösungen zu implementieren. Infolgedessen gibt es bereits zahlreiche Projekte, die sich aktiv für die Reduzierung des Energieverbrauchs und die Nutzung erneuerbarer Energiequellen einsetzen. Es ist wichtig zu beachten, dass nicht alle Kryptoassets denselben Energieverbrauch aufweisen, und nicht alle Kryptowährungen sind gleichermaßen energieintensiv. Die Unterscheidung zwischen verschiedenen Kryptoassets und deren Umweltauswirkungen ist entscheidend, um eine fundierte Meinung über dieses Thema zu bilden. Es ist ein Bereich, der sich weiterentwickelt und in dem Fortschritte erzielt werden, um den Energieverbrauch zu reduzieren.',
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
      <div className="flex items-center justify-content mb-12">
        <div className="w-full md:w-2/3 mr-12">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
            Fact Check zu Kryptoassets
          </h1>

          {/* Introduction */}
          <p className="mb-8 text-justify">
            Hier können Sie einige gängige Mythen über Kryptoassets entdecken
            und erfahren, warum sie möglicherweise nicht so schlimm sind, wie
            sie erscheinen. Denken Sie über den Mythos nach und erfahren Sie
            eine objektive Einschätzung dazu, wenn Sie auf den Mythos klicken!
          </p>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/3">
          <img
            src={FactCheckPic}
            alt="faktencheck"
            className="rounded-3xl max-h-[20rem] mb-8 "
          />
        </div>
      </div>

      {myths.map((myth) => (
        <div
          className="sources border border-gray-400 rounded p-4 mb-12"
          key={myth.id}
        >
          <button
            type="button"
            className="text-lg font-semibold text-gray-800 mb-4 cursor-pointer hover:underline"
            onClick={() => toggleMyth(myth.id)}
            onKeyPress={(e) => handleKeyPress(e, myth.id)}
          >
            {myth.title} {myth.isOpen ? '↓' : '→'}
          </button>
          {myth.isOpen && <p className="text-justify">{myth.content}</p>}
        </div>
      ))}

      {/* Sources */}
      <Sources sources={articlesources} />
    </div>
  );
}

export default FactCheck;
