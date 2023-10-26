import Sources from '../../Sources/Sources';

const sources = [
  {
    id: '1',
    text: 'Heuking Kühn Lüer Wojtek, “Über Uns - Kanzlei,” heuking.de, 2023. [Online]. Available: https://www.heuking.de/de/ueber-uns/kanzlei.html. [Accessed: Oct. 15, 2023].',
  },
  {
    id: '2',
    text: 'd-fine GmbH, “d-fine - Unternehmenswebseite,” d-fine.com, 2023. [Online]. Available: https://www.d-fine.com. [Accessed: Oct. 15, 2023].',
  },
  {
    id: '3',
    text: 'SWIAT, “Impressum,” swiat.io, 2023. [Online]. Available: https://www.swiat.io/imprint/. [Accessed: Oct. 15, 2023].',
  },
  {
    id: '4',
    text: 'Commerzbank AG, “Hauptnavigation - Konzern,” commerzbank.de, 2023. [Online]. Available: https://www.commerzbank.de/de/hauptnavigation/konzern/konzern.html. [Accessed: Oct. 15, 2023].',
  },
  {
    id: '5',
    text: 'Cofinpro AG, “Bank Frick expands its range of crypto assets and now offers trading and custodian services for Cardano, Polkadot and Tezos,” cofinpro.de, 2023. [Online]. Available: https://cofinpro.de. [Accessed: Oct. 15, 2023].',
  },
  {
    id: '6',
    text: 'Deutsche Bank AG, “Rechtliche Hinweise - Deutsche Bank,” deutsche-bank.de, 2023. [Online]. Available: https://www.deutsche-bank.de/pk/lp/rechtliche-hinweise.html#parsys-accordion-accordionParsys-accordionentry_811071315. [Accessed: Oct. 15, 2023].',
  },
];

function CryptoAssetsExpertInterviewSources() {
  return <Sources sources={sources} />;
}

export default CryptoAssetsExpertInterviewSources;
