import Sources from '../../Sources';

const sources = [
  {
    id: '1',
    text: 'Z. Jaroucheh and G. Baraq, “Crypto Assets Custody: Taxonomy, Components, and Open Challenges,” 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), Dubai, United Emirates, 2023, pp. 1-6.',
  },
  {
    id: '2',
    text: 'T. Reindl, “Nasdaq: Kryptoverwahrung noch für dieses Jahr geplant,” BTC-ECHO, Mar. 24, 2023. [Online]. Available: https://www.btc-echo.de/schlagzeilen/nasdaq-kryptoverwahrung-noch-im-zweiten-quartal-geplant-161586/. [Accessed: Sept. 29, 2023].',
  },
  {
    id: '3',
    text: 'C. Thuo, “US-Ausschuss verabschiedet Gesetz zur Krypto-Verwahrung – Chancer-Vorverkauf beschleunigt sich,” invezz.com, Jul. 31, 2023. [Online]. Available: https://invezz.com/de/news/2023/07/31/us-ausschuss-gesetz-krypto-verwahrung-chancer-vorverkauf-beschleunigt/. [Accessed: Sept. 29, 2023]',
  },
];

function CryptoCustodyChallengesSources() {
  return <Sources sources={sources} />;
}

export default CryptoCustodyChallengesSources;
