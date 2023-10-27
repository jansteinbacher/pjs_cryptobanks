import CryptoCustodyApplicationAreasSources from './CryptoCustodyApplicationAreasSources';

function CryptoCustodyApplicationAreasPart2() {
  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Anwedungsbereiche - Arten von Verwahrlösungen
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Verantwortung
      </h2>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Tobias grübelt über die generelle Verteilung der Verantwortung
            bezüglich der Sicherung und des Managements seiner Kryptoassets. Als
            engagierter Krypto-Investor bewahrt er seine Kryptoassets in einer
            Wallet auf, die er über einen privaten Schlüssel kontrolliert.
            Hierfür setzt er ein Browser-Plugin ein, das ihm unabhängig von der
            besuchten Webseite Zugriff auf seine Kryptoassets ermöglicht. Die
            Tatsache, dass ein Bekannter aus seinem Krypto-Investorenkreis
            bereits einen solchen Schlüssel verloren hat – was zu einem Verlust
            des Zugangs zu seinen Kryptoassets führte –, wirft bei Tobias
            zusätzliche Fragen auf.
          </p>
        </div>
      )}

      <p className="mb-4 text-justify">
        Innerhalb des <strong>Self-Custody</strong> liegt die gesamte
        Verantwortung für die Sicherheit und den Schutz des privaten Schlüssels
        beim Nutzer. Der Vorteil dieses Ansatzes liegt in der uneingeschränkten
        Kontrolle über die Kryptoassets, da keine dritte Partei involviert ist.
        Hingegen besteht der Nachteil darin, dass bei unsachgemäßer Verwaltung
        des privaten Schlüssels der Zugang zu den Kryptoassets unwiederbringlich
        verloren gehen kann <a href="#sources">[2]</a>.
      </p>

      <p className="mb-4 text-justify">
        Im Gegensatz dazu wird bei der <strong>Full-Custody</strong> die
        Kontrolle über die Kryptoassets an eine dritte Partei abgegeben. Somit
        hat der Nutzer keinen Zugriff auf seinen eigenen privaten Schlüssel und
        muss dementsprechend Transaktionen, Geschäfte und andere Aktivitäten
        über einen Dritten abwickeln <a href="#sources">[2]</a>. Diese Form der
        Verwahrung hat den Vorteil, dass die Verwahrer klassischerweise
        reguliert sind und dadurch eine zusätzliche Sicherheit für größere
        Mengen an Kryptoassets vorhanden ist. Dem Gegenüber besteht das Risiko,
        das bei einem Hack auf Seiten des Verwahrers, die Kryptoassets verloren
        gehen können <a href="#sources">[1]</a>.
      </p>

      <p className="mb-12 text-justify">
        Eine Zwischenlösung stellt die <strong>Semi-Custody</strong> dar{' '}
        <a href="#sources">[1]</a>. Diese vereint die Kontrolle und Sicherheit
        der Self-Custody mit dem Komfort sowie zusätzlichen Sicherheit der
        Full-Custody. Dabei kommen verschiedene private Schlüssel zum Einsatz –
        zum Beispiel einer für den Nutzer und einer für den Verwahrer{' '}
        <a href="#sources">[2]</a>.
      </p>

      <CryptoCustodyApplicationAreasSources />
    </div>
  );
}

export default CryptoCustodyApplicationAreasPart2;
