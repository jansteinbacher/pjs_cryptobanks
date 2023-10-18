import Sources from '../../Sources';

const sources = [
  {
    id: '1',
    text: 'Z. Jaroucheh and G. Baraq, “Crypto Assets Custody: Taxonomy, Components, and Open Challenges,” 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), Dubai, United Arab Emirates, 2023, pp. 1-6.',
  },
  {
    id: '2',
    text: 'V. Di Nicola, R. Longo, M. Federico and R. Gaetano, “Resilient Custody of Crypto-Assets, and Threshold Multisignatures,” Mathematics, vol. 8, no. 10, p. 1773, 2020.',
  },
  {
    id: '3',
    text: 'S. Suratkar, M. Shirole and S. Bhirud, “Cryptocurrency Wallet: A Review,” 2020 4th International Conference on Computer, Communication and Signal Processing (ICCCSP), Chennai, India, 2020, pp. 1-7.',
  },
  {
    id: '4',
    text: 'A. J. Cabrera-Gutiérrez, E. Castillo, A. Escobar-Molero, J. A. Álvarez-Bermejo, D. P. Morales and L. Parrilla, “Integration of Hardware Security Modules and Permissioned Blockchain in Industrial IoT Networks,” in IEEE Access, vol. 10, pp. 114331-114345, 2022.',
  },
  {
    id: '5',
    text: 'H. Rezaeighaleh and C. C. Zou, “New Secure Approach to Backup Cryptocurrency Wallets,” 2019 IEEE Global Communications Conference (GLOBECOM), Waikoloa, HI, USA, 2019.',
  },
  {
    id: '6',
    text: 'A. Shamir, “How to share a secret,” Communications of the ACM, vol. 22, no. 11, pp. 612-613, 1979.',
  },
  {
    id: '7',
    text: 'J. Han, M. Song, H. Eom, Y. Son,  Mansub Song; Hyeonsang Eom and Yongseok Son “An efficient multi-signature wallet in blockchain using bloom filter,” Proceedings of the 36th Annual ACM Symposium on Applied Computing (SAC 21), Association for Computing Machinery, New York, NY, USA, pp. 273–281, 2021',
  },
  {
    id: '8',
    text: 'S. Ricci, Petr Dzurenda, Raúl Casanova-Marqués and Petr Číka, “Threshold Signature for Privacy-Preserving Blockchain,” Lecture notes in business information processing, pp. 100–115, Jan. 2022',
  },
];

function CryptoCustodyApplicationAreasSources() {
  return <Sources sources={sources} />;
}

export default CryptoCustodyApplicationAreasSources;
