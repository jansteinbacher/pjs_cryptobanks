import Popularity from '../../../images/courseAdvanced/Bekanntheitsgrad Kryptoassets und Blockchain 1.png';

function CryptoAssetsAdoption() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      {isComingFromPreviousPage && (
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
          Adaption von Kryptoassets in der Gesellschaft: Studie unter
          Studierenden
        </h1>
      )}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
        Bekanntheitsgrad von Kryptoassets
      </h2>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify mb-4">
            Um die Akzeptanz von Kryptoassets in der Gesellschaft
            herauszufinden, beauftragt Simone den Werkstudenten Leo eine Umfrage
            durchzuführen. Mittels der Umfrage soll aufgezeigt werden, inwieweit
            Kryptoassets bereits in den Mainstream vorgedrungen sind und welche
            Faktoren die Akzeptanz in der Gesellschaft beeinflussen. Da gerade
            junge Leute für diese Thematik sehr zu begeistern sind, leitet Leo
            die Umfrage an seine Kommilitonen:innen bzw. an die Kurse, die er
            momentan belegt, weiter.
          </p>
        </div>
      )}
      <p className="mb-8">
        <strong>Demographische Aspekte:</strong>
        <br />
        An der Umfrage haben insgesamt 58 Studenten teilgenommen, wobei der
        Großteil aus den wirtschaftlichen Studiengängen kommen. 55% der
        Befragten sind in den Studiengängen Management oder
        Wirtschaftswissenschaften eingeschrieben, gefolgt von
        Wirtschaftsinformatik bzw. Information Systems oder Informatik mit 38%.
        4% haben angegeben in einem anderen Studiengang immatrikuliert zu sein.
        Die Mehrheit, 66%, gab an männlich zu sein, während 34% davon weilblich
        sind.
      </p>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Zunächst möchte Leo erst einmal herausfinden wie viele Studenten
            überhaupt schon einmal etwas von den Begriffen “Blockchain” und
            “Kryptoassets” gehört haben. Er kommt dabei zu folgenden
            Ergebnissen:
          </p>
        </div>
      )}
      <div className="flex justify-center items-center mb-8">
        <img
          src={Popularity}
          alt="Popularity Kryptoassets"
          className="w-full md:w-3/4"
        />
      </div>
      <p className="mb-8">
        Unter den 58 Befragten hat die Mehrheit angegeben, bereits schon einmal
        die Begriffe “Blockchain” und “Kryptoassets” gehört zu haben. Auffällig
        ist, dass der Begriff “Blockchain”, also die dahinterliegende
        Technologie, unter den Studenten etwas bekannter ist. Nur sehr wenige
        sind mit den Begriffen jedoch noch nicht vertraut. So kennt nur eine
        Person aus den 58 Teilnehmern beide Begriffe nicht. Die weiteren sechs
        Personen sind nur mit dem “Kryptoassets”-Begriff nicht vertraut. Dennoch
        ist zu erkennen, dass Kryptoassets im Vergleich noch unbekannter sind.
      </p>
      <p className="mb-8">
        <strong>Was bedeutet dies für deine Bank:</strong>
        <br />
        Aus den durchgeführten Interviews mit den Experten wurde schnell
        deutlich, dass der Terminus &quot;Kryptoassets&quot; noch nicht klar
        definiert ist (Zitat einfügen). Einige verstehen unter dem Begriff
        &quot;Kryptoassets&quot; ausschließlich Kryptowährungen, während andere
        ihn als Oberbegriff für verschiedene Vermögenswerte wie Kryptowährungen,
        Utility Token, NFTs usw. betrachten. Dies kann schnell für Verwirrung
        sorgen. Falls deine Bank, beabsichtigt, Kryptoassets anzubieten, ist es
        somit entscheidend, bereits zu Beginn eine klare Definition darzulegen.
      </p>
    </div>
  );
}

export default CryptoAssetsAdoption;
