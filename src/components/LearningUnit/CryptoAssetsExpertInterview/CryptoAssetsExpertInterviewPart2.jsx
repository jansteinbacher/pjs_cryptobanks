import Adam from '../../../images/experts/adam.jpeg';
import Maria from '../../../images/experts/maria.jpeg';
import Jonathan from '../../../images/experts/jonathan.jpeg';
import Niclas from '../../../images/experts/niclas.jpeg';
import Marc from '../../../images/experts/marc.jpeg';
import Placeholder from '../../../images/experts/placeholder.jpg';
import './CryptoAssetsExpertInterview.css';

function CryptoAssetsExpertInterviewPart2() {
  // An array of image objects with unique IDs
  const imageList = [
    { id: 'expert1', src: Adam },
    { id: 'expert2', src: Maria },
    { id: 'expert3', src: Jonathan },
    { id: 'expert4', src: Niclas },
    { id: 'expert5', src: Marc },
    { id: 'expert6', src: Placeholder },
    { id: 'expert7', src: Placeholder },
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Experten</h2>

      <div className="image-container flex mb-8">
        {imageList.map((image) => (
          <img
            key={image.id}
            className="mr-5 rounded-image"
            src={image.src}
            alt={image.id}
            width="110" // Set the width of the image
          />
        ))}
      </div>
      <p className="mb-8 text-center">
        von links nach rechts: <br />
        Maria-Therese Bless, Marc Henniges, Jonathan Leßmann, Niclas Voigt, Adam
        Zgraja <br />
        Weitere Interviewpartner ohne Bild:
        <br /> Stefan Teis und Matthias Niemietz
      </p>
      <p className="mb-8 text-left">
        Jeder unserer Interviewpartner verfügt über eine einzigartige
        Perspektive und bietet wertvolle Einsichten in die Welt der
        Kryptoassets. Ihre Erfahrungen, Meinungen und Prognosen sind von
        unschätzbarem Wert und tragen dazu bei, fundierte Entscheidungen zu
        treffen und ein tieferes Verständnis für diese aufstrebende Branche zu
        entwickeln. Wir laden dich ein, die Profile unserer Interviewpartner zu
        erkunden und von ihrem Fachwissen zu profitieren. Diese inspirierenden
        Persönlichkeiten sind maßgeblich an der Gestaltung der Zukunft der
        Finanzwelt beteiligt und teilen gerne ihr Wissen und ihre Einblicke.
      </p>
      <p className="mb-8 text-left">
        Die Aufrechterhaltung der Anonymität unserer Experten liegt uns am
        Herzen. Daher findest du folgend anonymiserte Kernaussagen aus den von
        uns geführten Interviews zu den Themen: Auswirkungen von Kryptoassets
        auf das Geschäftsmodell von Banken, Integration von Kryptoassets in das
        traditionelle Bankensystem, Arten und Herausforderungen von
        Kryptoasset-Dienstleistungen, Potentielle Akzeptanzbarrieren von
        Kryptoassets, Regulatorisches Optimierungspotenzial und internationaler
        Vergleich im Zusammenhang mit Kryptoassets, Wissensmanagement in der
        Bankenbranche in Bezug auf Kryptoassets.
      </p>
      <p>
        <span className="font-bold text-left">
          Steckbriefe zu unseren Interviewpartnern
        </span>{' '}
        findest du am Ende unserer Interviewreihe.
      </p>
    </div>
  );
}

export default CryptoAssetsExpertInterviewPart2;
