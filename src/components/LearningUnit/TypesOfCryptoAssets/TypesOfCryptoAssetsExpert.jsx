import ExpertOpinion from '../../ExpertOpinion';

function TypesOfCryptoAssetsExpert() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Aus diesem Grund ist für dich und deine Bank das Thema relevant:
      </h2>
      <ExpertOpinion
        paragraphs={[
          '„Wenn man das Thema bespricht, muss man sich zwei größere Kategorien anschauen. Die eine Kategorie sind die Kryptowerte. Diese sind im Mainstream als Bitcoin, Ethereum und co. bekannt. Beispielsweise Coins und Tokens, die es jetzt schon gibt. Was ein bisschen mehr im Kommen ist und wahrscheinlich auch eine deutlich größere Rolle spielen wird für die klassische Welt sind die sogenannten Krypto-Wertpapiere. […]“',
          '„Ich nutze vielleicht die Infrastruktur, aber will ich sie nur für traditionelle Werte oder Wertpapiere im Allgemeinen verwenden oder will ich sie auch für Kryptowährungen verwenden? Oder NFTs? Oder Utility Coins?“',
        ]}
        showFootnote
      />
    </div>
  );
}

export default TypesOfCryptoAssetsExpert;
