import OpportunitiesAndChallengesCryptoAssetsSources from './OpportunitiesAndChallengesCryptoAssetsSources';

/**
 * Component representing the second part of the "Opportunities and Challenges of Crypto Assets" section. This part focuses on the future prospects of crypto assets, including the potential for new forms of capital raising, tokenization, and the use of smart contracts. It discusses how security token offerings (STOs), non-fungible tokens (NFTs), and smart contracts can transform the financial landscape.
 */

function OpportunitiesAndChallengesPart2() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Zukunftsaussichten von Kryptoassets
      </h2>
      <p className="mb-8 text-left">
        Kryptoassets, wie <strong>Security Token Offerings (STOs)</strong>{' '}
        bieten die Möglichkeit einer{' '}
        <strong>neuen Art von Kapitalbeschaffung</strong>. Daneben können{' '}
        Non-Fungible Tokens (NFTs) den Handel und Investition in reale oder
        bisher illiquide Vermögenswerte ermöglichen . Zudem eröffnet es die Tür
        für Investitionen in neu gegründete kleine und mittlere Unternehmen
        (KMU) durch den Kauf von tokenisierten Anleihen oder Aktien{' '}
        <a href="#sources">[6]</a>.
      </p>

      <p className="mb-8 text-left">
        <strong>
          Tokenisierung ermöglicht die digitale Darstellung und Aufteilung von
          Vermögenswerten
        </strong>
        . Dabei können die Nennwerte der Tokens flexibel angepasst werden, um
        den Bedürfnissen der Investoren besser gerecht zu werden. Außerdem
        können die Einnahmeströme aus Vermögenswerten automatisch unter den
        Inhabern der Tokens aufgeteilt werden <a href="#sources">[6]</a>.
      </p>

      <p className="mb-8 text-left">
        <strong>
          Smart Contracts können bestimmte Aufgaben im MBO (Mid- and
          Back-Office) automatisieren und deutlich beschleunigen
        </strong>
        . Gleichzeitig kann der Bedarf an Intermediäre, wie zentralen
        Clearingstellen, reduziert werden. Des Weiteren führen atomare Trades zu
        einer <strong>erheblichen Reduzierung des Gegenparteirisikos</strong>.
        Dabei ermöglichen Smart Contracts den <strong>Austausch</strong> von
        Vermögenswerten (Security Tokens) mit Zahlungsmittel (Payment Tokens){' '}
        <strong>in Echtzeit</strong> <a href="#sources">[6]</a>.
      </p>

      <OpportunitiesAndChallengesCryptoAssetsSources />
    </div>
  );
}

export default OpportunitiesAndChallengesPart2;
