import Rocket from '../../../images/courseBeginner/rocket.jpg';

function IntroductionCryptoAssetsPart6() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Bereit für deine erste Wissenschallenge? 🎓
      </h2>
      <div className="p-4 bg-green-200 rounded-lg">
        <div className="flex justify-center items-center">
          <img
            src={Rocket}
            alt="Token"
            className="w-full md:w-1/3 mb-8 mt-12"
          />
        </div>
        <p className="mb-4 italic text-left">
          <strong>Hey Du!</strong>{' '}
        </p>
        <p className="mb-4 italic text-left">
          Du hast inzwischen die Grundlagen zu Kryptoassets gelernt und dein
          Wissen erweitert – das ist wirklich beeindruckend!{' '}
        </p>
        <p className="mb-4 italic text-left">
          Jetzt ist es an der Zeit, dein Können auf die Probe zu stellen. Denke
          daran, dass wahres Verstehen erst durch Anwendung erreicht wird. Das
          folgende <strong>Quiz</strong> hat zum Ziel dein Wissen zu festigen.
          Du hast nun die Gelegenheit, dein erworbenes Wissen unter Beweis zu
          stellen.{' '}
        </p>
        <p className="mb-4 italic text-left">
          Worauf wartest du noch? Drücke auf den “Weiter”- Button und zeige dir
          selbst, wie viel du erreicht hast.{' '}
        </p>
        <p className="mb-4 italic text-left">
          <strong>Wir glauben an dich! Los geht&apos;s!</strong>
        </p>
      </div>
    </div>
  );
}
export default IntroductionCryptoAssetsPart6;
