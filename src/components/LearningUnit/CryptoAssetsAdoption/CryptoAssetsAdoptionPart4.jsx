import Image1 from '../../../images/courseAdvanced/Informationsakquise_Kryptoassets.png';
import Image2 from '../../../images/courseAdvanced/Bank-Beratungsangebote.png';
import { StoryBoxLeo } from '../../StoryBox';

/**
 * Component for displaying part 4 of a section related to the adoption of Cryptoassets in society.
 * This section focuses on the methods students use to acquire information about cryptoassets and their interest in bank advisory services related to cryptoassets.
 * Depending on user navigation, it may include Leo's story as well.
 */

function CryptoAssetsAdoptionPart4() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const leoStory = [
    'Leo erkennt, dass bei der Art und Weise zur Akquirierung von Informationen bezüglich Kryptoassets die Beratung durch einen Bankmitarbeiter am wenigsten gefragt ist. Dennoch möchte er wissen, ob die Befragten grundsätzlich Interesse an Bank-Beratungsangeboten zu Kryptoassets haben. Dabei kommt er zu folgenden Ergebnissen:',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Beratungsangebote der Banken zum Thema Kryptoassets
      </h2>

      <div className="flex justify-center items-center mb-8">
        <img
          src={Image1}
          alt="Knockledge Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="font-bold mb-4">
        Unter den verschiedenen Arten der Informationsbeschaffung zum Thema
        Kryptoassets ist die Recherche mittels einer Webseite bzw. einem Blog
        mit einer Angabe von 35% die beliebteste Methode.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          Mit einer Angabe von nur <strong>6%</strong> besteht{' '}
          <strong>weniger Interesse an einer Bankberatung</strong>.
        </li>
        <li>
          <strong>23%</strong> würden sich über einen <strong>Podcast</strong>,{' '}
          <strong>20%</strong> über einen <strong>Online Kurs</strong> und{' '}
          <strong>16%</strong> über ein <strong>Finanzmagazin</strong>{' '}
          informieren.
        </li>
      </ul>
      {isComingFromPreviousPage && <StoryBoxLeo paragraphs={leoStory} />}
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image2}
          alt="Knockledge2 Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="font-bold mb-4">
        Auch hier wird deutlich, dass die Mehrheit, mit etwa 74%, grundsätzlich
        die Beratungsangebote der Bank eher weniger bzw. gar nicht beanspruchen
        würde.
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          Das könnte vor allem daran liegen, dass ca. <strong>76%</strong> der
          Befragten die{' '}
          <strong>
            von Banken zur Verfügung gestellten Informationen als inhaltlich
            unzureichend angesehen
          </strong>{' '}
          werden und deshalb lieber auf andere Informationsquellen
          zurückgegriffen wird.
        </li>
      </ul>
      <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Was bedeutet dies für deine Bank:
      </h3>
      <p className="mb-4">
        Innerhalb deiner Bank sollten konkrete Ansätze entwickelt werden, wie
        diese <strong>Beratungsangebote</strong> zu Kryptoassets für den Kunden{' '}
        <strong>ansprechender und inhaltlich ausführlicher</strong> gestaltet
        werden können, um wettbewerbsfähig zu bleiben.
      </p>
      <p className="mb-4">
        Dabei sollte vor allem auf Kundenpräferenzen geachtet werden.
      </p>
      <p className="mb-4">
        So wird aus den Grafiken &quot;Informationsakquise zu Kryptoassets&quot;
        und &quot;Bank-Beratungsangebote zu Kryptoassets&quot; deutlich, dass
        eine Bank ihre <strong>Online-Präsenz stärken</strong> und qualitativ
        hochwertige Inhalte zur Verfügung stellen sollte.
      </p>
      <p className="mb-12">
        Dies könnte sie z.B. indem sie eine{' '}
        <strong>
          interaktive Webseite aus Lerneinheiten, Videos, Podcasts oder
          Ausschnitten aus Finanzmagazinen
        </strong>{' '}
        erstellt.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart4;
