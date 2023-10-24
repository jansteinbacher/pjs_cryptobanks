import Image1 from '../../../images/courseAdvanced/Art_WeiseBankberatung.png';
import Image2 from '../../../images/courseAdvanced/Aufbereitung_Informationen.png';

function CryptoAssetsAdoption() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Gewünschte Bankberatungsangebote
      </h2>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify mb-4">
            Leo möchte erfahren wie Bankberatungsangebote dargstellt werden
            können, damit sich der Kunde angesprochen fühlt.
          </p>
        </div>
      )}
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image1}
          alt="Knockledge Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="mb-8">
        Über eine Online-Lernplattform bzw. Tutorials würden sich 33% der
        Befragten und somit der Großteil über Kryptoassets informieren.
        Marktstuden, Fallstudien oder Erfahrungsberichte sind für 24% der
        Teilnehmer, die bevorzugte Art und Weise sich Wissen darüber anzueignen,
        nahe gefolgt von einem eingefügten Extra-Bereich im Online-Banking mit
        21%. 15% würden ein Gespräch mit einem Bankberater als
        Informationsquelle nutzen.
      </p>
      <p className="mb-8">
        <strong>Was bedeutet dies für deine Bank:</strong>
        <br />
        Der Grund dafür, dass die wenigsten ein persönliches Beratungsgespräch
        durch einen Bankmitarbeiter bevorzugen, könnte darin liegen, dass
        digitale Informationsquellen als komfortabler empfunden werden. Die
        Nachfrager können also die Art und Weise der Wissensaneignung in ihrer
        selbstbestimmten Zeit aussuchen. Darüber hinaus können diese jederzeit
        auf Informationen, die sie benötigen, zurückgreifen. Bei einem
        persönlichen Beratungsgespräch können Informationen überhört oder
        schnell vergessen werden. Nichtsdestotrotz sollten Beratungsgespräche,
        vor allem für Kunden, die persönliche Unterstützung benötigen, von
        Seiten deiner Bank angeboten werden.
      </p>
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image2}
          alt="Knockledge2 Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="mb-8">
        Die unter den Teilnehmern bevorzugte Darstellung der Informationen zu
        den eigenen Kryptoassets wäre eine Funktion zum Integrieren der Wallets,
        die mit etwa 41% favorisiert wird. Zu 36% wünschen sich die Befragten
        eine Integration der Informationen in die Aufteilungsansicht der
        Ersparnisse als einen zusätzlichen Bereich. Darüber hinaus gilt das
        Morning Star Rating, also ein Sterne-Rating der Kryptoassets, mit 22%
        ebenfalls als eine ansprechende Darstellungsmethode.
      </p>
      <p className="mb-8">
        <strong>Was bedeutet dies für deine Bank:</strong>
        <br />
        Um einen Überblick über die eigenen Kryptoassets und die vorgenommenen
        Transaktionen zu behalten, könnte deine Bank entweder eine reibungslose
        Integration von Wallets in Betracht ziehen oder diese Informationen in
        der Aufteilungsansicht bei den Ersparnissen anzeigen, sodass die
        finanzielle Situation genau im Blick gehalten und verwaltet werden kann.
        Zudem ermöglicht ein Sterne-Rating dem Kunden Vertrauen bzgl. der
        Sicherheit der jeweiligen digitalen Assets aufzubauen, was ihm somit bei
        der Wahl seiner Kryptoassets unterstützen kann. Diese Erkenntnisse
        sollte deine Bank dazu ermutigen, ihre Dienstleistungen entsprechend
        anzupassen, sodass Kunden Aufklärung und Sicherheit verspüren und somit
        vermehrt in Kryptoassets investieren. Das trägt sowohl zur
        Kundenzufriedenheit als auch zur Wettbewerbsfähigkeit deiner Bank bei.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoption;
