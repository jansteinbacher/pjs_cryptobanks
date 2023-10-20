import Sources from '../../Sources/Sources';

const sources = [
  {
    id: '1',
    text: 'S. Ray, “The difference between Blockchains & Distributed Ledger Technology,” Medium, https://towardsdatascience.com/the-difference-between-blockchains-distributed-ledger-technology-42715a0fa92 (accessed Sep. 22, 2023).',
  },
  {
    id: '2',
    text: 'A. Sunyaev, “Distributed Ledger Technology,” Internet Computing, pp. 265–299, 2020. doi:10.1007/978-3-030-34957-8_9',
  },
  {
    id: '3',
    text: 'S. Nakamoto, “A peer-to-peer electronic cash system,” Bitcoin, https://bitcoin.org/en/bitcoin-paper (accessed Sep. 21, 2023).',
  },
  {
    id: '4',
    text: '“Blockchain Macht Daten Praktisch Unveränderbar,” Bundesamt für Sicherheit in der Informationstechnik, https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html (accessed Sep. 21, 2023).',
  },
];

function IntroductionBlockchainSources() {
  return <Sources sources={sources} />;
}

export default IntroductionBlockchainSources;
