import Image1 from '../../../images/courseAdvanced/Getaetigte_Investitionen.png';
import Image2 from '../../../images/courseAdvanced/EigeneErfahrungKryptoassets.png';
import { StoryBoxLeo } from '../../StoryBox';

/**
 * Component for displaying part 7 of a section related to the adoption of Cryptoassets in society.
 * This section focuses on survey participants' past investments in Cryptoassets, their preferences for specific digital assets (e.g., Bitcoin, Ethereum), and their experiences with those investments.
 * Depending on user navigation, it may include Leo's story as well.
 */

function CryptoAssetsAdoptionPart7() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const leoStory = [
    'Für den folgenden Bereich erweisen sich vor allem die Teilnehmer, die bereits in Kryptoassets schon einmal investiert haben, als besonders interessant für Leo. Er möchte nämlich herausfinden, welche die meistgenutzten digitalen Assets sind.',
    'Zudem interessiert ihn die persönliche Erfahrung der Investoren mit den Kryptoassets. Dies ermöglicht ihm Präferenzen der Kunden oder Trends im Kryptomarkt zu identifizieren und somit konkrete Empfehlungen zur Einbindung der digitalen Assets in die eigene Bank geben.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Investitionen in Kryptoassets
      </h2>

      {isComingFromPreviousPage && <StoryBoxLeo paragraphs={leoStory} />}
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image1}
          alt="Knockledge Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="font-bold mb-4">
        Von 23 Teilnehmern, die angegeben haben bereits in Kryptoassets zu
        investieren, fallen Bitcoin mit 37% und Ethereum mit 33% unter die
        beliebtesten digitalen Assets.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          <strong>20%</strong> davon legen <strong>Altcoins</strong> an.
        </li>
        <li>
          Nur sehr wenige der Befragten haben angegeben auch in{' '}
          <strong>NFTs (4%)</strong> oder in{' '}
          <strong>andere Kryptoassets (6%)</strong> zu investieren.
        </li>
      </ul>
      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Was bedeutet dies für deine Bank:
      </h3>
      <p className="mb-4">
        Der <strong>Fokus</strong> deiner Bank sollte vor allem auf der
        Bereitstellung von Dienstleistungen in Bezug auf die Kryptowährungen{' '}
        <strong>“Bitcoin” und “Ethereum”</strong> liegen.
      </p>
      <p className="mb-4">
        Da auch einige in Altcoins investieren, sollte deine Bank sich ebenso
        Gedanken machen, diese in ihr Portfolio aufzunehmen.
      </p>
      <p className="mb-4">
        Zunächst einmal sollte deine Bank ihr{' '}
        <strong>Angebot allerdings sorgfältig auswählen</strong> und eher
        reduziert halten, um den Kunden einen reibungslosen Umgang damit zu
        gewährleisten.
      </p>
      <p className="mb-12">
        Nichtsdestotrotz besteht für deine Bank die{' '}
        <strong>Option über andere digitale Assets</strong>, wie{' '}
        <strong>bspw. NFTs</strong>, Informationen bereitzustellen.
      </p>
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image2}
          alt="Knockledge2 Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="font-bold mb-4">
        Die meisten Befragten, nämlich 57%, beurteilen ihre getätigten
        Investitionen in Kryptoassets als positiv oder sogar sehr positiv.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          <strong>26%</strong> stehen dem <strong>neutral</strong> gegenüber.
        </li>
        <li>
          Lediglich <strong>17%</strong> haben eine eher{' '}
          <strong>negative Erfahrung</strong> mit Investitionen in Kryptoassets
          gemacht.
        </li>
        <li>
          Interessanterweise hat jedoch{' '}
          <strong>keiner der Teilnehmer eine sehr negative Erfahrung</strong>{' '}
          damit erlebt.
        </li>
      </ul>
      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Was bedeutet dies für deine Bank:
      </h3>
      <p className="mb-4">
        Da die Mehrheit positive Erfahrungen mit der Investition in Kryptoassets
        gemacht hat, könnte deine Bank diese{' '}
        <strong>
          Chance nutzen, das Kundenklientel weiterhin zu assistieren und somit
          an sich zu binden
        </strong>
        .
      </p>
      <p className="mb-12">
        Vor allem aber sollte sie bei den Kunden, die dem Ganzen eher neutral
        gegenüberstehen oder schlechte Erfahrungen gemacht haben, mittels
        qualitativ{' '}
        <strong>
          hochwertiger Informationsbereitstellung und eines attraktiven Angebots
          an Dienstleistungen Sicherheit und Vertrauen aufbauen
        </strong>
        , um diese ebenfalls von einer Investition zu überzeugen.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart7;
