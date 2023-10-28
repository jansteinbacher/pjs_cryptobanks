import ExpertInterviewIntroductionVideo from '../../../videos/expertInterviewIntroduction.mp4';

function CryptoAssetsExpertInterviewPart1() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Experteninterviews
      </h1>
      <div className="flex justify-center items-center mb-12">
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <video controls className="w-full h-full rounded-lg">
          <source src={ExpertInterviewIntroductionVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="mb-8 text-left">
        Die folgenden Experteninterviews dienen dir als Quelle für fundierte
        Einblicke, Analysen und Meinungen von Branchenführern, Visionären und
        Fachleuten, die in der Welt der Kryptoassets tätig sind. Du erhältst
        wertvolle Einblicke in die neuesten Entwicklungen, Trends und
        Herausforderungen im Bereich Kryptoassets. Du erfährst aus erster Hand,
        wie der Finanzsektor sich zu diesem neuen Bereich positioniert, wie
        dieser die Finanzbranche potenziell verändern wird und welche Chancen
        und Risiken Kryptoassets für die Banken bieten. Unsere befragten
        Expertinnen und Experten sind Pioniere in den Bereichen
        Blockchain-Technologie, Kryptowährungen, Tokenisierung von
        Vermögenswerten und vielem mehr. Sie teilen ihr Fachwissen, ihre
        Erfahrungen und Prognosen und helfen dabei, fundierte Entscheidungen zu
        treffen und das Verständnis für diese spannende und dynamische Branche
        zu vertiefen. Taucht mit uns ein in die Welt der Kryptoassets. Wir sind
        stolz darauf, dir qualitativ hochwertige Informationen und Einblicke zu
        bieten, um dich auf deinem Weg in die Welt der Kryptoassets zu
        unterstützen.
      </p>

      <p className="text-center">Viel Spaß beim Entdecken!</p>
    </div>
  );
}

export default CryptoAssetsExpertInterviewPart1;
