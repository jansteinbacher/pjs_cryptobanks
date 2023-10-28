import Regulation from '../../../images/courseAdvanced/regulation.jpg';
import CryptoAssetsRegulationSources from './CryptoAssetsRegulationSources';
import { StoryBoxSimone } from '../../StoryBox';

/**
 * Component representing the first part of the Crypto Assets Regulation section.
 * It provides information about the regulatory landscape for crypto assets
 * and includes content about the current legal framework, compliance issues, and the need for increased regulation.
 */

function CryptoAssetsRegulationPart1() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const simoneStory = [
    'Um ihr Wissen auf diesem Gebiet zu vertiefen, trifft sich Simone mit ihrer Freundin Julia, einer Rechtsanwältin für Aufsichtsrecht und Investmentfonds mit Fokus auf Themen rund um Krypto & Distributed Ledger Technology (DLT). Julia war bekannt für ihre Expertise in regulatorischen Angelegenheiten im Bereich der Kryptoassets, und Simone war gespannt darauf, von ihrer Erfahrung zu profitieren.',
    'Julia teilte erste Einblicke in die aktuellen Debatten über die Klassifizierung von Kryptoassets, die Regelungen und die Verpflichtungen. Sie erklärte, wie diese Aspekte die Legitimität und den reibungslosen Betrieb der Kryptoindustrie beeinflussen könnten.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Regulatorische Landschaft auf nationaler und internationaler Ebene
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Regulatorische Landschaft
      </h2>
      {isComingFromPreviousPage && <StoryBoxSimone paragraphs={simoneStory} />}
      <div className="flex justify-center items-center mb-12">
        <img
          src={Regulation}
          alt="Regulation of Crypto Assets"
          className="w-full md:w-1/2"
        />
      </div>

      <p className="mb-4">
        Der gegenwärtige rechtliche Rahmen ist auf Grund der Neuheit der
        Thematik noch in einem unausgereiften Zustand. Dies ermöglicht
        nationalen Regulierungsbehörden, wie in Deutschland bspw. die{' '}
        <strong>BaFin</strong>, uneinheitlich zu handeln und führt zu erhöhten{' '}
        <strong>Compliance-Kosten</strong>.
      </p>
      <p className="mb-4">
        Die derzeitigen Gesetze fokussieren sich hauptsächlich auf die
        <strong>
          {' '}
          Bekämpfung von Geldwäsche und Terrorismusfinanzierung (AML/CTF)
        </strong>
        , während Aspekte des <strong>Verbraucherschutzes</strong> und der{' '}
        <strong>Prävention von Marktmissbrauch</strong> vergleichsweise noch
        weniger Berücksichtigung finden.
      </p>
      <p className="mb-4">
        Angesichts der wachsenden Popularität des Krypto-Asset-Marktes gibt es
        des Weiteren einen zunehmenden Bedarf und{' '}
        <strong>Wunsch nach verstärkter Regulierung</strong>, um die
        wirtschaftliche Stabilität zu gewährleisten.
      </p>
      <p className="mb-12">
        Obgleich der regulatorischen Komplexität des Marktumfelds sind{' '}
        <strong>bereits zahlreiche Marktteilnehmer</strong> im Bereich der
        Kryptoassets in Europa und <strong>weltweit aktiv</strong>. Einige
        Banken experimentieren mit der Ausgabe von{' '}
        <strong>On-Chain-Anleihe-Token</strong>. Ein{' '}
        <strong>Bankenkonsortium</strong> hat eine Infrastruktur geschaffen, die
        es anderen Plattformen ermöglicht, ihre Krypto-Vermögenswerte nach
        Abschluss des Handels zu verwalten. Einige Privatbanken bieten separate
        Dienste an, die es ihren Kunden erlauben, Krypto-Vermögenswerte zu
        kaufen und zu verkaufen <a href="#sources">[1]</a>.
      </p>

      <CryptoAssetsRegulationSources />
    </div>
  );
}

export default CryptoAssetsRegulationPart1;
