import Nakamoto from '../../../images/courseBeginner/nakamoto.jpg';

import IntroductionCryptoAssetsSources from './IntroductionCryptoAssetsSources';
import Chapter1Audio from '../../../audio/chapter11.mp3';
import { StoryBoxBernd } from '../../StoryBox';

function IntroductionCryptoAssetsPart1() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

  const berndStory = [
    'Voller Neugierde macht sich Bernd auf die Suche nach Informationen zum Thema Kryptoassets, um seinen Wissensdurst zu stillen. In der Betriebskantine hat er ein Gespräch zwischen Simone und Tobias zu dem Thema mitbekommen.',
    'Er hatte die beiden beauftragt sich ebenfalls mit dem Thema Kryptoassets auseinanderzusetzen, um ein breites Wissen zu Kryptoassets zu bekommen und letztlich eine fundierte Entscheidung für oder gegen die Integration von Kryptoassets in seine Bank zu treffen. Bernd konnte nicht widerstehen, sich in das Gespräch einzubringen.',
    '"Entschuldigt, dass ich mich einmische, aber ich habe auch viele Fragen. Zum Beispiel, wer ist Nakamoto? Ich habe diesen Namen in Zusammenhang mit Kryptoassets gehört, aber ich bin mir nicht sicher, wer oder was das ist."',
    'Simone lächelte und erklärte: "Nakamoto ist der Pseudonym eines unbekannten Schöpfers von Bitcoin. Niemand weiß wirklich, wer hinter diesem Namen steckt. Es ist wie eine mysteriöse Figur, die die Krypto-Revolution gestartet hat."',
    'Tobias fügte hinzu: "Genau, Nakamoto veröffentlichte das Whitepaper für Bitcoin im Jahr 2008 und startete 2009 das Bitcoin-Netzwerk. Aber seitdem ist seine Identität ein Rätsel geblieben."',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        Grundverständnis zu Kryptoassets
      </h1>

      <ul className="mb-12 list-disc ml-4">
        <li>
          Der geschichtliche Hintergrund zu Kryptoassets (Satoshi Nakamoto)
        </li>
        <li>Definition Kryptoassets</li>
        <li>Blockchain (Teaser)</li>
        <li>Tokenisierung</li>
        <li>Coin vs. Token</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Der geschichtliche Hintergrund zu Kryptoassets (Satoshi Nakamoto)
      </h2>
      {isComingFromPreviousPage && <StoryBoxBernd paragraphs={berndStory} />}
      <div className="flex justify-center items-center">
        <img src={Nakamoto} alt="Nagamoto" className="w-full md:w-1/2 mb-8" />
      </div>
      <p className="text-center mb-4">
        Höre dir den folgenden Text als Audio an:
      </p>
      <div className="flex justify-center items-center mb-8">
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <audio controls>
          <source src={Chapter1Audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      <p className="mb-4 text-left">
        Seit der Einführung von der Kryptowährung <strong>Bitcoin</strong> (BTC)
        2009, basierend auf Konzepten, die im Whitepaper von Satoshi Nakamoto
        skizziert wurden, hat sich die Welt der blockchainbasierten digitalen
        Token rasant entwickelt. Bis heute ist die Identität des Pseudonyms{' '}
        <strong>Satoshi Nakamoto</strong>
        unbekannt <a href="#sources">[1]</a>.{' '}
      </p>
      <p className="mb-4 text-left">
        Seine Identität unterliegt vielen Mythen und Theorien. Es ist möglich,
        dass seine Identität für immer unbekannt bleibt. Inzwischen ist die Zahl
        an verschiedenen Token weltweit auf über 22.000 angewachsen. Die Vision
        Nakamotos war es traditionelle Fiatwährungen zukünftig durch
        kryptografiegestützte, digitale Währungen ­– auch Kryptowährungen
        genannt ­– zu ersetzen <a href="#sources">[1]</a>,{' '}
        <a href="#sources">[2]</a>.{' '}
      </p>
      <p className="mb-4 text-left">
        Die ursprüngliche Vision Nakamotos hat sich mittlerweile hin zu einem
        umfassenden Ökosystem kryptografischer Vermögenswerte entwickelt, die
        allgemein als Kryptoassets bezeichnet werden. Diese Kryptoassets
        umfassen nun ein breites Anwendungsspektrum, dass nicht nur die
        ursprünglichen Idee der <strong>digitalen Währung</strong> aufgreift. Es
        erweitert diese um eine umfassendere Palette an kryptografischer
        Lösungen, darunter tokenisierte Mechanismen zur{' '}
        <strong>Automatisierung rechtlicher Verträge</strong> (Smart Contracts)
        und sogar die Schaffung unveränderlicher{' '}
        <strong>Besitznachweise für digitale Kunst</strong> (Non-Fungible
        Tokens, NFTs) <a href="#sources">[2]</a>.{' '}
      </p>
      <p className="mb-12 text-left">
        Mehr dazu in Kapitel 3 „Arten von Kryptoassets und ihre Verbindung zu
        traditionellen Finanzprodukten”.
      </p>
      <IntroductionCryptoAssetsSources />
    </div>
  );
}

export default IntroductionCryptoAssetsPart1;
