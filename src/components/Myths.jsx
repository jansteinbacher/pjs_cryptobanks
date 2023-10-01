import React, { useState } from 'react';
import Sources from './Sources'; // Assuming you have a Sources component


const MythsCryptoAssets = () => {
  const articlesources = [
    "vgl. Meisner, H. (2021). Neue Herausforderungen in der Finanzsphäre. In: Finanzwirtschaft in der Internetökonomie. Springer Gabler, Wiesbaden. https://doi.org/10.1007/978-3-658-33715-5_7",
    "vgl. Kerscher, D. (2013). Bitcoin: Funktionsweise. Risiken und Chancen der digitalen Währung. Kemacon Verlag, Leipzig",
    "vgl. https://www.coindesk.com/business/2022/11/02/divisions-in-sam-bankman-frieds-crypto-empire-blur-on-his-trading-titan-alamedas-balance-sheet/ ",
    "vgl. Meisner, H. (2021). Neue Herausforderungen in der Finanzsphäre. In: Finanzwirtschaft in der Internetökonomie. Springer Gabler, Wiesbaden. https://doi.org/10.1007/978-3-658-33715-5_7",
    "Gorton, Gary B. and Zhang, Jeffery, Bank Runs During Crypto Winter (May 12, 2023). U of Michigan Law & Econ Research Paper, Available at SSRN: https://ssrn.com/abstract=4447703 or http://dx.doi.org/10.2139/ssrn.4447703",
    "vgl. de Vries, Alex, Ulrich Gallersdörfer, Lena Klaaßen, and Christian Stoll (2022). Revisiting Bitcoin’s carbon footprint. In: Joule 6, S. 498–502.",
    "vgl. Porsche Consulting",
    "ebd.",
    "ebd.",
  ];

  const [myths, setMyths] = useState([
    {
      title: 'Mythos 1: Hoher Energieverbrauch',
      content:
        'Ein häufiger Mythos ist, dass Kryptoassets wie Bitcoin aufgrund ihres hohen Energieverbrauchs umweltschädlich sind. Tatsächlich ist der Energieverbrauch ein wichtiger Aspekt, aber es gibt Bestrebungen, den Konsensmechanismus zu ändern und effizientere Lösungen zu entwickeln.',
      isOpen: false,
    },
    {
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

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
        Mythen über Kryptoassets
      </h1>

      {/* Introduction */}
      <p className="mb-8 text-justify">
        Hier können Sie einige gängige Mythen über Kryptoassets entdecken und erfahren, warum sie möglicherweise nicht so schlimm sind, wie sie erscheinen.
        Denken Sie über den Mythos nach und erfahren Sie eine objektive Einschätzung dazu, wenn Sie auf den Mythos klicken!
      </p>

      {myths.map((myth, index) => (
        <div className="mb-8" key={index}>
          <h2 className="text-lg font-semibold text-gray-800 mb-4" onClick={() => toggleMyth(index)}>
            {myth.title}
          </h2>
          {myth.isOpen && (
            <p className="text-justify">{myth.content}</p>
          )}
        </div>
      ))}

      {/* Sources */}
      <Sources sources={articlesources} />
    </div>
  );
};

export default MythsCryptoAssets;