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

function CryptoCustodyApplicationAreasPart4() {
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
        Konnektivität
      </h2>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Einerseits profitiert Tobias von der Benutzerfreundlichkeit, die ihm
            das Browser-Plugin für den bequemen Zugriff auf seine Kryptoassets
            bietet. Andererseits hegt er wiederholt Bedenken hinsichtlich der
            potenziellen Gefahr von Cyberangriffen aufgrund der ständigen
            Internetverbindung. In Anbetracht dieser Überlegungen stellt er sich
            die Frage nach den vielfältigen Optionen für den Zugriff auf
            Kryptoassets
          </p>
        </div>
      )}

      <p className="mb-8">
        Eine Hot Wallet ist direkt mit dem Internet verbunden und ermöglicht
        somit einen bequemen und sofortigen Zugriff auf Kryptoassets. Dieser
        Verbindungstyp wird typischerweise für alltägliche Transaktionen
        genutzt, bei denen eine einfache Erreichbarkeit vonnöten ist. Hot
        Wallets gibt es in verschiedenen Ausführungen. Sie lassen sich in
        Software Wallets unterscheiden, die auf Computern oder mobilen
        Endgeräten installiert werden, und Web Wallets, die über den Browser
        zugänglich sind. Allerdings birgt die kontinuierliche Internetverbindung
        das Risiko von Cyberattacken, weshalb es ratsam ist, nur eine begrenzte
        Menge an Kryptoassets in einer Hot Wallet aufzubewahren{' '}
        <a href="#sources">[3]</a>.
      </p>

      <p className="mb-8">
        Im Kontrast dazu ist die Cold Wallet nicht mit dem Internet verbunden
        und daher im Vergleich zu Hot Wallets sicherer vor potenziellen
        Cyberangriffen. Aus diesem Grund werden Cold Wallets bevorzugt, um
        größere Mengen an Kryptoassets sicher aufzubewahren. Diese Variante der
        Aufbewahrung zeigt verschiedene Ausprägungen, insbesondere Hardware
        Wallets und Paper Wallets. Während bei Hardware Wallets der private
        Schlüssel auf einem physischen Gerät gesichert wird, erfolgt bei Paper
        Wallets die Speicherung des Schlüssels durch das Drucken des Schlüssels
        auf einem Stück Papier <a href="#sources">[3]</a>.
      </p>

      <p className="mb-8">
        Eine Zwischenlösung stellt die Warm Wallet dar. Diese vereint die
        Zugänglichkeit von Hot Wallet mit der Sicherheit der Cold Wallet.
        Demnach sind diese Verwahrlösungen mit dem Internet verbunden, bieten
        aber Sicherheitsmaßnahmen gegen Cyberangriffen{' '}
        <a href="#sources">[1]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
}

export default CryptoCustodyApplicationAreasPart4;
