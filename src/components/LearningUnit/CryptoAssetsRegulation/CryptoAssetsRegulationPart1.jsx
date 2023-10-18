import Regulation from '../../../images/courseAdvanced/regulation.jpg';
import CryptoAssetsRegulationSources from './CryptoAssetsRegulationSources';

function CryptoAssetsRegulationPart1() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Regulatorische Landschaft auf nationaler und internationaler Ebene
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Regulatorische Landschaft
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Um ihr Wissen auf diesem Gebiet zu vertiefen, trifft sich Simone mit
            ihrer Freundin Julia, einer Rechtsanwältin für Aufsichtsrecht und
            Investmentfonds mit Fokus auf Themen rund um Krypto & Distributed
            Ledger Technology (DLT). Julia war bekannt für ihre Expertise in
            regulatorischen Angelegenheiten im Bereich der Kryptoassets, und
            Simone war gespannt darauf, von ihrer Erfahrung zu profitieren.
            Julia teilte erste Einblicke in die aktuellen Debatten über die
            Klassifizierung von Kryptoassets, die Regelungen und die
            Verpflichtungen. Sie erklärte, wie diese Aspekte die Legitimität und
            den reibungslosen Betrieb der Kryptoindustrie beeinflussen könnten.
          </p>
        </div>
      )}
      <div className="flex justify-center items-center">
        <img
          src={Regulation}
          alt="Regulation of Crypto Assets"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://pixabay.com/de/illustrations/recht-und-ordnung-gesetz-klausel-6311493/"
        >
          Pixabay
        </a>
      </div>

      <p className="mb-8">
        Der gegenwärtige rechtliche Rahmen ist auf Grund der Neuheit der
        Thematik noch in einem unausgereiften Zustand. Dies ermöglicht
        nationalen Regulierungsbehörden, wie in Deutschland bspw. die BaFin,
        uneinheitlich zu handeln und führt zu erhöhten Compliance-Kosten. Die
        derzeitigen Gesetze fokussieren sich hauptsächlich auf die Bekämpfung
        von Geldwäsche und Terrorismusfinanzierung (AML/CTF), während Aspekte
        des Verbraucherschutzes und der Prävention von Marktmissbrauch
        vergleichsweise noch weniger Berücksichtigung finden. Angesichts der
        wachsenden Popularität des Krypto-Asset-Marktes gibt es des Weiteren
        einen zunehmenden Bedarf und Wunsch nach verstärkter Regulierung, um die
        wirtschaftliche Stabilität zu gewährleisten. Obgleich der
        regulatorischen Komplexität des Marktumfelds sind bereits zahlreiche
        Marktteilnehmer im Bereich der Kryptoassets in Europa und weltweit
        aktiv. Einige Banken experimentieren mit der Ausgabe von
        On-Chain-Anleihe-Token. Ein Bankenkonsortium hat eine Infrastruktur
        geschaffen, die es anderen Plattformen ermöglicht, ihre
        Krypto-Vermögenswerte nach Abschluss des Handels zu verwalten. Einige
        Privatbanken bieten separate Dienste an, die es ihren Kunden erlauben,
        Krypto-Vermögenswerte zu kaufen und zu verkaufen{' '}
        <a href="#sources">[1]</a>.
      </p>

      <CryptoAssetsRegulationSources />
    </div>
  );
}

export default CryptoAssetsRegulationPart1;
