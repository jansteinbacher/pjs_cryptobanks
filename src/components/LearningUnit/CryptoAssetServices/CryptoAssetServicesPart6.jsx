import Handshake from '../../../images/courseAdvanced/handshake.jpg';
import CryptoAssetServicesSources from './CryptoAssetServicesSources';

function CryptoAssetServicesPart6() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Krypto-Kredite
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Durch intensive Gespräche mit den Ausstellern hat Simone bereits
            wertvolle Einblicke in potenzielle Krypto-Dienstleistungen gewonnen.
            Während sie auf dem Weg zum Restaurant ist, fällt ihr Blick auf
            einen weiteren Stand, der ihre Aufmerksamkeit sofort einfängt. Auf
            dem Banner steht: &ldquo;Kredite auf Blockchain-Infrastruktur&rdquo.
            Getrieben von ihrer Neugierde spricht sie die Aussteller an, um mehr
            darüber zu erfahren.
          </p>
        </div>
      )}
      <div className="flex justify-center items-center">
        <img src={Handshake} alt="Handschlag" className="w-full md:w-1/2" />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://www.freepik.com/free-photo/closeup-shot-business-handshake-cropped-shot-two-people-wearing-formal-suits-shaking-hands-business-handshake-concept_5546352.htm#query=handshake&from_query=handschlag&position=1&from_view=search&track=sph"
        >
          Bild von katemangostar auf Freepik{' '}
        </a>
      </div>

      <p className="mb-8">
        Der Unterschied zu einem herkömmlichen Kredit liegt in der
        Berücksichtigung der Kreditwürdigkeit. Bei den Krediten auf der
        Blockchain-Infrastruktur wird ein gewisser Teil der Kryptoassets des
        Kreditnehmers als Collateral hinterlegt. Im Falle einer nicht
        fristgerechten Zurückzahlung des angegebenen Betrags, kann der
        Kreditgeber, die hinterlegten Kryptoassets liquidieren{' '}
        <a href="#sources">[11]</a>.
      </p>

      <CryptoAssetServicesSources />
    </div>
  );
}

export default CryptoAssetServicesPart6;
