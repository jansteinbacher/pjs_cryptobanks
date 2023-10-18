import Sources from '../../Sources';

const sources = [
  {
    id: '1',
    text: 'Z. Jaroucheh and G. Baraq, “Crypto Assets Custody: Taxonomy, Components, and Open Challenges,” 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), Dubai, United Arab Emirates, 2023, pp. 1-6.',
  },
  {
    id: '2',
    text: 'Y. Lindell, “Fast Secure Multiparty ECDSA with Practical Distributed Key Generation and Applications to Cryptocurrency Custody,” in Proceedings of the 2018 ACM SIGSAC Conference on Computer and Communications Security, A. Nof, Ed., New York, NY, United States: Association for Computing Machinery, Oct. 2018, pp. 1837–1854.',
  },
  {
    id: '3',
    text: 'S.-F. Hsieh and G. Brennan, “Issues, risks, and challenges for auditing crypto asset transactions,” International Journal of Accounting Information Systems, p. 100569, Aug. 2022.',
  },
  {
    id: '4',
    text: 'J. Han, M. Song, H. Eom, Y. Son,  Mansub Song; Hyeonsang Eom and Yongseok Son “An efficient multi-signature wallet in blockchain using bloom filter,” Proceedings of the 36th Annual ACM Symposium on Applied Computing (SAC 21), Association for Computing Machinery, New York, NY, USA, pp. 273–281, 2021',
  },
];

function IntroductionCryptoCustodySources() {
  return <Sources sources={sources} />;
}

export default IntroductionCryptoCustodySources;
