import Image1 from '../../../images/courseAdvanced/Getaetigte_Investitionen.png';
import Image2 from '../../../images/courseAdvanced/EigeneErfahrungKryptoassets.png';

function CryptoAssetsAdoptionPart7() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Investitionen in Kryptoassets
      </h2>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify mb-4">
            Für den folgenden Bereich erweisen sich vor allem die Teilnehmer,
            die bereits in Kryptoassets schon einmal investiert haben, als
            besonders interessant für Leo. Er möchte nämlich herausfinden,
            welche die meistgenutzten digitalen Assets sind. Zudem interessiert
            ihn die persönliche Erfahrung der Investoren mit den Kryptoassets.
            Dies ermöglicht ihm Präferenzen der Kunden oder Trends im
            Kryptomarkt zu identifizieren und somit konkrete Empfehlungen zur
            Einbindung der digitalen Assets in die eigene Bank geben.
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
        Von 23 Teilnehmern, die angegeben haben bereits in Kryptoassets zu
        investieren, fallen Bitcoin mit 37% und Ethereum mit 33% unter die
        beliebtesten digitalen Assets. 20% davon legen Altcoins an. Nur sehr
        wenige der Befragten haben angegeben auch in NFTs (4%) oder in andere
        Kryptoassets (6%) zu investieren.
      </p>
      <p className="mb-8">
        <strong>Was bedeutet dies für deine Bank:</strong>
        <br />
        Der Fokus deiner Bank sollte vor allem auf der Bereitstellung von
        Dienstleistungen in Bezug auf die Kryptowährungen “Bitcoin” und
        “Ethereum” liegen. Da auch einige in Altcoins investieren, sollte deine
        Bank sich ebenso Gedanken machen, diese in ihr Portfolio aufzunehmen.
        Zunächst einmal sollte deine Bank ihr Angebot allerdings sorgfältig
        auswählen und eher reduziert halten, um den Kunden einen reibungslosen
        Umgang damit zu gewährleisten. Nichtsdestotrotz besteht für deine Bank
        die Option über andere digitale Assets, wie bspw. NFTs, Informationen
        bereitzustellen.
      </p>
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image2}
          alt="Knockledge2 Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="mb-8">
        Die meisten Befragten, nämlich 57%, beurteilen ihre getätigten
        investitionen in Kryptoassets als positiv oder sogar sehr positiv. 26%
        stehen dem neutral gegenüber, während lediglich 17% eine eher negative
        Erfahrung mit Investitionen in Kryptoassets gemacht haben.
        Interessanterweise hat jedoch keiner der Teilnehmer eine sehr negative
        Erfahrung damit erlebt.
      </p>
      <p className="mb-8">
        <strong>Was bedeutet dies für deine Bank:</strong>
        <br />
        Da die Mehrheit positive Erfahrungen mit der Investition in Kryptoassets
        gemacht hat, könnte deine Bank diese Chance nutzen, das Kundenklientel
        weiterhin zu assistieren und somit an sich zu binden. Vor allem aber
        sollte sie bei den Kunden, die dem Ganzen eher neutral gegenüberstehen
        oder schlechte Erfahrungen gemacht haben, mittels qualitativ
        hochwertiger Informationsbereitstellung und eines attraktiven Angebots
        an Dienstleistungen Sicherheit und Vertrauen aufbauen, um diese
        ebenfalls von einer Investition zu überzeugen.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart7;
