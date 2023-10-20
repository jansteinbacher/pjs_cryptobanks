import Sources from '../../Sources/Sources';

const sources = [
  {
    id: '1',
    text: 'Bundesministerium der Justiz. (2023, Febr. 22). “Gesetz über das Kreditwesen,”  [Online]. Available: https://www.gesetze-im-internet.de/kredwg/index.html. [Accessed: Sept. 29, 2023].',
  },
  {
    id: '2',
    text: 'BaFin. “Kryptoverwahrgeschäft,” BaFin, 2022. [Online]. Available: https://www.bafin.de/DE/Aufsicht/FinTech/Geschaeftsmodelle/DLT_Blockchain_Krypto/ Kryptoverwahrgeschaeft/Kryptoverwahrgeschaeft_artikel.html. [Accessed: Sept. 29, 2023].',
  },
  {
    id: '3',
    text: 'BaFin. “Merkblatt: Hinweise zum Tatbestand des Kryptoverwahrgeschäfts,” BaFin, 2020. [Online]. Available: https://www.bafin.de/SharedDocs/Veroeffentlichungen/DE/Merkblatt/ mb_200302_kryptoverwahrgeschaeft.html. [Accessed: Sept. 29, 2023].',
  },
  {
    id: '4',
    text: 'Rödl & Partner. “Kryptoverwahrgeschäft als neuer KWG-Tatbestand,” Rödl & Partner, 2020. [Online]. Available: https://www.roedl.de/themen/aufsichtsrecht/kryptoverwahrgeschaeft-kwg-tatbestand-rechtsaenderungen. [Accessed: Sept. 29, 2023].',
  },
];

function CryptoCustodyRegulationSources() {
  return <Sources sources={sources} />;
}

export default CryptoCustodyRegulationSources;
