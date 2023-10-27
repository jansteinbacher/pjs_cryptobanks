import ExpertOpinion from '../../ExpertOpinion';

function IntroductionBlockchainExpert() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Aus diesem Grund ist für dich und deine Bank das Thema relevant:
      </h2>
      <ExpertOpinion
        paragraphs={[
          '„Also viele Finanzinstitute haben erkannt, dass deren Kundinnen und Kunden Lust haben, irgendwas mit Kryptoassets oder mit digitalen Assets zu machen. Und dafür wird in der Regel Blockchain-Technologie eingesetzt.“',
          '„Das heißt, es ist wichtig zu adressieren, dass ein Grundverständnis über die Technologie geschaffen wird, dass also die Leute, die auf die Seite kommen, die Möglichkeit haben, erstmal alles Grundsätzliche zur Technologie zu aufzunehmen. […] Das wird das größte Problem sein, dass Leute auf die Seite kommen, die glauben sie haben verstanden was eine Blockchain ist. Das haben sie aber nicht.“',
        ]}
        showFootnote
      />
    </div>
  );
}

export default IntroductionBlockchainExpert;
