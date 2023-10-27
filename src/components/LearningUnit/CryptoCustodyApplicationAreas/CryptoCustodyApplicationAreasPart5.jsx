import CryptoCustodyApplicationAreasSources from './CryptoCustodyApplicationAreasSources';
import { StoryBoxTobias } from '../../StoryBox';

function CryptoCustodyApplicationAreasPart5() {
  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  const tobiasStory = [
    'Tobias weiß nun, dass er seinen privaten Schlüssel bisher nur in einer Software Wallet gespeichert hat, die leider auch anfällig für Cyberangriffen sein können. Aus diesem Grund möchte er weitere Methoden der Lagerung des Schlüssels kennenlernen, um zukünftig sicherer aufgestellt zu sein.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Anwedungsbereiche - Arten von Verwahrlösungen
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Schlüssel-Lagerung
      </h2>

      {isComingFromPreviousPage && <StoryBoxTobias paragraphs={tobiasStory} />}

      <p className="mb-4 text-justify">
        Eine <strong>Hardware-Wallet</strong> bietet ein hohes Maß an
        Sicherheit, indem der private Schlüssel auf einem physischen Gerät, wie
        einer Festplatte gespeichert wird und so das Risiko von Cyberangriffen
        verringert wird. Alle Transaktionen werden hierbei im Gerät signiert,
        wodurch der Schlüssel niemals dieses verlässt <a href="#sources">[3]</a>
        .
      </p>

      <p className="mb-12 text-justify">
        Wiederum sind <strong>Hadware Sicherheitsmodule</strong> (HSMs)
        besonders manipulationssichere physische Geräte, die zusätzlich
        Funktionen wie Verschlüsselung, Entschlüsselung und Authentifizierung
        bieten. Diese kommen in zwei Ausprägungen vor: Premise-HSMs und
        Cloud-HSMs. Die Vorteile von HSMs liegen in der Einhaltung von
        Sicherheitsstandards, starken Authentifizierung und maipulationsicheren
        Systemen <a href="#sources">[4]</a>. Dennoch haben sie auch Nachteile,
        wie der Bedarf an physischen Zugang, begrenzte Skalierbarkeit und
        Kompatibilitätsprobleme <a href="#sources">[5]</a>.
      </p>

      <CryptoCustodyApplicationAreasSources />
    </div>
  );
}

export default CryptoCustodyApplicationAreasPart5;
