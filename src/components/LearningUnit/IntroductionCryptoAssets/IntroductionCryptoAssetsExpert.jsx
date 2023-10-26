import ExpertOpinion from '../../ExpertOpinion';

function IntroductionCryptoAssetsExpert() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <ExpertOpinion
        showFootnote
        showHeadline
        paragraphs={[
          '„Bei Kryptoassets muss man auch die Rückfrage stellen. Mein Definitionsverständnis davon wäre alles, was sich auf der Blockchain bewegen kann. In der Regulatorik wird der Begriff Kryptowerte verwendet für alles, was halt nicht Kryptowährung ist und kein Kryptowertpapier ist und hat ja noch mal einen eigenen, regulatorischen Aspekt. Deswegen muss man da beim Wording, also mit den Vokabeln, relativ trennscharf sein.“',
          '„Bei Kryptoassets muss man auch die Rückfrage stellen. Mein Definitionsverständnis davon wäre alles, was sich auf der Blockchain bewegen kann. In der Regulatorik wird der Begriff Kryptowerte verwendet für alles, was halt nicht Kryptowährung ist und kein Kryptowertpapier ist und hat ja noch mal einen eigenen, regulatorischen Aspekt. Deswegen muss man da beim Wording, also mit den Vokabeln, relativ trennscharf sein.“',
        ]}
      />
    </div>
  );
}

export default IntroductionCryptoAssetsExpert;
