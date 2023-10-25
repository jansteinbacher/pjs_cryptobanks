import Image1 from '../../../images/courseAdvanced/Informationsakquise_Kryptoassets.png';
import Image2 from '../../../images/courseAdvanced/Bank-Beratungsangebote.png';

function CryptoAssetsAdoptionPart4() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

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
      <p className="mb-8">
        Unter den verschiedenen Arten der Informationsbeschaffung zum Thema
        Kryptoassets, ist die Recherche mittels einer Webseite bzw. einem Blog
        mit einer Angabe von 35% die beliebteste Methode, während mit einer
        Angabe von nur 6% weniger Interesse an einer Bankberatung besteht. 23%
        würden sich über einen Podcast, 20% über einen Online Kurs und 16% über
        ein Finanzmagazin informieren.
      </p>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify mb-4">
            Leo erkennt, dass bei der Art und Weise zur Akquirierung von
            Informationen bezüglich Kryptoassets die Beratung durch einen
            Bankmitarbeiter am wenigsten gefragt ist. Dennoch möchte er wissen,
            ob die Befragten grundsätzlich Interesse an Bank-Beratungsangeboten
            zu Kryptoassets haben. Dabei kommt er zu folgenden Ergebnissen:
          </p>
        </div>
      )}
      <div className="flex justify-center items-center mb-8">
        <img
          src={Image2}
          alt="Knockledge2 Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="mb-8">
        Auch hier wird deutlich, dass die Mehrheit, mit etwa 74%, grundsätzlich
        die Beratungsangebote der Bank eher weniger bzw. gar nicht beanspruchen
        würde. Das könnte vor allem daran liegen, dass ca. 76% der Befragten die
        von Banken zur Verfügung gestellten Informationen als inhaltlich
        unzureichend angesehen werden und deshalb lieber auf andere
        Informationsquellen zurückgegriffen wird.
      </p>
      <p className="mb-8">
        <strong>Was bedeutet dies für deine Bank:</strong>
        <br />
        Innerhalb deiner Bank sollten konkrete Ansätze entwickelt werden, wie
        diese Beratungsangebote zu Kryptoassets für den Kunden ansprechender und
        inhaltlich ausführlicher gestaltet werden können, um wettbewerbsfähig zu
        bleiben. Dabei sollte vor allem auf Kundenpräferenzen geachtet werden.
        So wird aus den Grafiken &quot;Informationsakquise zu Kryptoassets&quot;
        und &quot;Bank-Beratungsangebote zu Kryptoassets&quot; deutlich, dass
        eine Bank ihre Online-Präsenz stärken und qualitativ hochwertige Inhalte
        zur Verfügung stellen sollte. Dies könnte sie z.B. indem sie eine
        interaktive Webseite aus Lerneinheiten, Videos, Podcasts oder
        Ausschnitten aus Finanzmagazinen erstellt.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoptionPart4;
