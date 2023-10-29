import CryptoAssetsRegulationSources from './CryptoAssetsRegulationSources';
import { StoryBoxSimone } from '../../StoryBox';
import Regulation from '../../../images/courseAdvanced/MICA_Regulation.jpg';

/**
 * Component representing the second part of the Crypto Assets Regulation section.
 * It provides information about the European MiCA Regulation, its impact on the crypto market,
 * and its potential benefits, including regulatory clarity, consumer protection, and reduction of market abuse.
 */

function CryptoAssetsRegulationPart2() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const simoneStory = [
    'Bei ihrem Treffen tauschen sich Simone und Julia intensiv über die Herausforderungen und Entwicklungen in der Kryptoregulierung aus. Julia zeige Simone zudem den Link zur MiCA Verordnung, wo sie sich bei Interesse zu spezifischen Thematiken weiter einlesen kann.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Europäische MiCA-Verordnung
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
        Dank der Einigung auf den MiCA-Entwurf wird dieser zukünftig die oben
        genannten Initiativen mehr unterstützen. MiCA wird Unklarkeiten mindern,
        gemeinsame Definitionen liefern sowie &ldquo;Grauzonen&rdquo;
        ausschließen.
      </p>
      <p className="mb-4">
        Mittels MiCA werden die regulatorischen Anforderungen vereint, sodass
        nationale Vorschriften ersetzt werden können. Es wird eine Art{' '}
        <strong>&ldquo;Passporting&rdquo; für EU-weites Handeln</strong>{' '}
        eingeführt, sodass eine nationale Registierung obsolet wird.
      </p>
      <p className="mb-4">
        Weitere potenzielle Vorteile der Verordnung sind die Verbesserung des
        Marktes hin zu einem sicheren Umfeld für Anbieter und Nutzer, die{' '}
        <strong>Optimierung des Verbraucherschutz</strong> sowie die strengere
        Regulierung mit dem Ziel der{' '}
        <strong>Reduktion des Marktmissbrauch</strong>.
      </p>
      <p className="mb-4">
        Die grundlegenden Anforderungen gelten für die Ausgabe aller
        Kryptoassets. Für die Ausgabe von{' '}
        <strong>Stablecoins gelten strengere Anforderungen</strong>. Die{' '}
        <strong>
          Geldwäsche- und Terrorismusbekämpfungs-Gesetzgebung (AML/CTF)
        </strong>{' '}
        ist in MiCA <strong>nicht enthalten</strong>, daher ist die bereits
        bestehende AML/CTF-Gesetzgebung auf Krypto-Vermögensdienstleister (KVDs)
        anwendbar. Dies verschafft traditionellen
        Finanzdienstleistungsunternehmen (FSIs) aufgrund ihrer
        Compliance-Erfahrung einen Vorteil.
      </p>
      <p className="mb-4">
        Emittenten von Kryptoasset-Dienstleister werden mehreren Verpflichtungen
        unterliegen. Darunter fällt beispielsweise die{' '}
        <strong>
          Verpflichtung, vor der Emission ein Whitepaper zu erstellen ,
          einschließlich der Haftung für den Inhalt des Whitepapers, der
          Eintragung als juristische Person und der Genehmigung durch eine
          Aufsichtsbehörde.
        </strong>{' '}
        KVDs müssen auch Standardanforderungen und dienstleistungsspezifische
        Anforderungen erfüllen <a href="#sources">[2]</a>.
      </p>
      <p className="mb-12">
        Außerdem ist mit Hilfe von MiCA zukünftig eine risikogerechte
        Regulierung von Kryptoassets möglich. MiCA sorgt für eine risikogerechte
        Regulierung. Die Absicht besteht darin, die{' '}
        <strong>Sicherheit von Anlegern zu erhöhen</strong> und zur{' '}
        <strong>reibungslosen Funktion der Märkte beizutragen</strong>. Die
        Verordnung gewährleistet Rechtssicherheit für Innovationen im Bereich
        der DLT. Bestimmungen für Kryptowerte, die sich auf Vermögenswerte und
        E-Geld-Token (auch als Stablecoins bekannt) beziehen, sollen
        voraussichtlich <strong>ab Juli 2024</strong> wirksam werden. Der{' '}
        <strong>Großteil der MiCA-Verordnung</strong> tritt vorraussichtlich
        erst zu <strong>Beginn des Jahres 2025</strong> in Kraft{' '}
        <a href="#sources">[3]</a>.
      </p>

      <CryptoAssetsRegulationSources />
    </div>
  );
}

export default CryptoAssetsRegulationPart2;
