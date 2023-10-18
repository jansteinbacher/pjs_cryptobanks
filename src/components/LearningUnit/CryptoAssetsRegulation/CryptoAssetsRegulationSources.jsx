import Sources from '../../Sources';

const sources = [
  {
    id: '1',
    text: 'Deloitte, “The future of Crypto-Assets in a Regulated environment,” deloitte.com, 2021. [Online]. Available: https://www2.deloitte.com/nl/nl/pages/risk/articles/the-future-of-crypto-assets-in-a-regulated-environment.html. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '2',
    text: 'C. Boeth, “Krypto-Assets im Investment Management - Regulatorischer Rahmen von Krypto Assets und Anwendungsmöglichkeiten der Technologie für Investment Manager,” deloitte.com, 2021. [Online]. Available: https://www2.deloitte.com/de/de/pages/financial-services/articles/krypto-assets-im-investment-management-regulatory.html. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '3',
    text: 'Bundesanstalt für Finanzdienstleistungsaufsicht, “Europäische MiCA-Verordnung: Regel-Fundament für Kryptowerte,” Bundesanstalt für Finanzdienstleistungsaufsicht. [Online]. Available: https://www.bafin.de/SharedDocs/Veroeffentlichungen/DE/Fachartikel/2023/fa_bj_2305_Mica.html. [Accessed Sept. 21, 2023].',
  },
];

function CryptoAssetsRegulationSources() {
  return <Sources sources={sources} />;
}

export default CryptoAssetsRegulationSources;
