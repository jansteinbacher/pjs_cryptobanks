import IntroductionCryptoCustodySources from './IntroductionCryptoCustodySources';
import { StoryBoxTobias } from '../../StoryBox';

function IntroductionCryptoCustodyPart3() {
  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  const tobiasStory = [
    'Mittels dieser grundlegenden Begriffe erhält Tobias einen initialen und wertvollen Einblick in die Thematik. Diese zugrundeliegenden Informationen haben nun sein Interesse geweckt, die vielfältigen Anwendungsbereiche von Kryptoverwahrungen zu erkunden und zu verstehen.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Definition und Grundlagen der Kryptoverwahrung
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Kryptographische Schlüsse
      </h2>
      <p className="mb-4 text-left">
        Wie bereits erwähnt, kommen kryptographische Schlüssel als digitale
        Signaturen zur Durchführung von Transaktionen mit digitalen
        Vermögenswerten zum Einsatz.{' '}
      </p>{' '}
      <p className="mb-4 text-left">
        Es gibt zwei Hauptkategorien von Schlüsseln:{' '}
        <strong>öffentliche</strong> und <strong>private Schlüssel</strong>.{' '}
      </p>{' '}
      <p className="mb-4 text-left">
        <strong>Öffentliche Schlüssel</strong> sind, wie der Name schon sagt,
        öffentlich zugänglich und dienen dazu, Transaktionen zu empfangen.{' '}
      </p>{' '}
      <p className="mb-12 text-left">
        Die <strong>privaten Schlüssel</strong> hingegen sind von entscheidender
        Bedeutung für die sichere Verwahrung von Kryptoassets. Sie gewähren dem
        Nutzer Zugriff auf seine digitalen Vermögenswerte und dienen
        gleichzeitig als Verifikationsmittel für Transaktionen. Aus diesem Grund
        obliegt es sogenannten Custodians, also Verwahrungsunternehmen, die
        privaten Schlüssel sicher aufzubewahren.
      </p>
      {isComingFromPreviousPage && <StoryBoxTobias paragraphs={tobiasStory} />}
      <IntroductionCryptoCustodySources />
    </div>
  );
}

export default IntroductionCryptoCustodyPart3;
