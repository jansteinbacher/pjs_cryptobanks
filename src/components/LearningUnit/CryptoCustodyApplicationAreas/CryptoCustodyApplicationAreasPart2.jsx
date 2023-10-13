import { useState } from 'react';
import PropTypes from 'prop-types';

function Sources({ sources }) {
  const [showSources, setShowSources] = useState(false);

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  return (
    <div className="sources border border-gray-400 rounded p-4">
      <button
        type="button"
        className="text-lg font-semibold"
        id="sources"
        onClick={toggleSources}
      >
        Quellen:
      </button>
      {showSources && (
        <div className="source-list leading-relaxed mt-4">
          <ul>
            {sources.map((source) => (
              <li key={source.id}>
                [{source.id}] {source.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Sources.propTypes = {
  sources: PropTypes.shape({
    map: PropTypes.func,
    length: PropTypes.number,
  }).isRequired,
};

function CryptoCustodyApplicationAreasPart2() {
  const articlesources = [
    'Z. Jaroucheh and G. Baraq, “Crypto Assets Custody: Taxonomy, Components, and Open Challenges,” 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), Dubai, United Arab Emirates, 2023, pp. 1-6.',
    'V. Di Nicola, R. Longo, M. Federico and R. Gaetano, “Resilient Custody of Crypto-Assets, and Threshold Multisignatures,” Mathematics, vol. 8, no. 10, p. 1773, 2020.',
    'S. Suratkar, M. Shirole and S. Bhirud, “Cryptocurrency Wallet: A Review,” 2020 4th International Conference on Computer, Communication and Signal Processing (ICCCSP), Chennai, India, 2020, pp. 1-7.',
    'A. J. Cabrera-Gutiérrez, E. Castillo, A. Escobar-Molero, J. A. Álvarez-Bermejo, D. P. Morales and L. Parrilla, “Integration of Hardware Security Modules and Permissioned Blockchain in Industrial IoT Networks,” in IEEE Access, vol. 10, pp. 114331-114345, 2022.',
    'H. Rezaeighaleh and C. C. Zou, “New Secure Approach to Backup Cryptocurrency Wallets,” 2019 IEEE Global Communications Conference (GLOBECOM), Waikoloa, HI, USA, 2019.',
    'A. Shamir, “How to share a secret,” Communications of the ACM, vol. 22, no. 11, pp. 612-613, 1979.',
    'J. Han, M. Song, H. Eom, Y. Son,  Mansub Song; Hyeonsang Eom and Yongseok Son “An efficient multi-signature wallet in blockchain using bloom filter,” Proceedings of the 36th Annual ACM Symposium on Applied Computing (SAC 21), Association for Computing Machinery, New York, NY, USA, pp. 273–281, 2021',
    'S. Ricci, Petr Dzurenda, Raúl Casanova-Marqués and Petr Číka, “Threshold Signature for Privacy-Preserving Blockchain,” Lecture notes in business information processing, pp. 100–115, Jan. 2022',
  ];

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

      <p className="mb-8">
        Innerhalb des Self-Custody liegt die gesamte Verantwortung für die
        Sicherheit und den Schutz des privaten Schlüssels beim Nutzer. Der
        Vorteil dieses Ansatzes liegt in der uneingeschränkten Kontrolle über
        die Kryptoassets, da keine dritte Partei involviert ist. Hingegen
        besteht der Nachteil darin, dass bei unsachgemäßer Verwaltung des
        privaten Schlüssels der Zugang zu den Kryptoassets unwiederbringlich
        verloren gehen kann <a href="#sources">[2]</a>.
      </p>

      <p className="mb-8">
        Im Gegensatz dazu wird bei der Full-Custody die Kontrolle über die
        Kryptoassets an eine dritte Partei abgegeben. Somit hat der Nutzer
        keinen Zugriff auf seinen eigenen privaten Schlüssel und muss
        dementsprechend Transaktionen, Geschäfte und andere Aktivitäten über
        einen Dritten abwickeln <a href="#sources">[2]</a>. Diese Form der
        Verwahrung hat den Vorteil, dass die Verwahrer klassischerweise
        reguliert sind und dadurch eine zusätzliche Sicherheit für größere
        Mengen an Kryptoassets vorhanden ist. Dem Gegenüber besteht das Risiko,
        das bei einem Hack auf Seiten des Verwahrers, die Kryptoassets verloren
        gehen können <a href="#sources">[1]</a>.
      </p>

      <p className="mb-8">
        Eine Zwischenlösung stellt die Semi-Custody dar{' '}
        <a href="#sources">[1]</a>. Diese vereint die Kontrolle und Sicherheit
        der Self-Custody mit dem Komfort sowie zusätzlichen Sicherheit der
        Full-Custody. Dabei kommen verschiedene private Schlüssel zum Einsatz –
        zum Beispiel einer für den Nutzer und einer für den Verwahrer{' '}
        <a href="#sources">[2]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
}

export default CryptoCustodyApplicationAreasPart2;
