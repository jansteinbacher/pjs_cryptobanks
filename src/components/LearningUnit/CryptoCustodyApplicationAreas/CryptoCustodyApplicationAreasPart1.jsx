import { useState } from 'react';
import PropTypes from 'prop-types';
import Anwendungsbereiche from '../../../images/courseExpert/overviewAnwendungsbereiche.png';

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
function CryptoCustodyApplicationAreasPart1() {
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

      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Simone hat Tobias beauftragt, sich intensiver mit verschiedenen
            Lösungen zur Verwahrung von Kryptoassets auseinanderzusetzen. Dies
            bildet den Auftakt zur Integration von Kryptoassets in das
            hauseigene Bankensystem. Um einen ersten Einblick in die
            Kryptoasset-Verwahrung zu gewinnen, untersucht Tobias, die
            Verwahrlösung, welche er privat zur Investition in Kryptoassets
            nutzt. Hierbei macht er Gebrauch von seinem intelligenten
            Browser-Plugin, das es ihm ermöglicht, mit der Maus über
            Webseiteninhalte zu fahren und weitere Informationen abzurufen.
          </p>
        </div>
      )}

      <p className="mb-8">
        Die sichere Verwahrung von Kryptoassets bildet einen essenziellen
        Grundpfeiler für die sich entwickelnde Kryptoasset-Wirtschaft. Ganz
        gleich, ob es sich um Kryptowährungen, NFTs oder Security Tokens handelt
        – die Gewährleistung einer sicheren Aufbewahrung des privaten Schlüssels
        sowie die authentifizierte Genehmigung und Signierung von Transaktionen
        sind grundlegend. Die Kryptoasset-Verwahrlösungen können in mehrerer
        Klassen eingeteilt werden, basierend auf fünf Schlüsseldimensionen oder
        Perspektiven <a href="#sources">[1]</a>. Im Folgenden werden die
        einzelnen Klassen näher beleuchtet.
      </p>

      <div className="flex justify-center items-center mb-8">
        <img
          src={Anwendungsbereiche}
          alt="Anwendungsbereiche"
          className="w-full md:w-1/2"
        />
      </div>

      <Sources sources={articlesources} />
    </div>
  );
}

export default CryptoCustodyApplicationAreasPart1;
