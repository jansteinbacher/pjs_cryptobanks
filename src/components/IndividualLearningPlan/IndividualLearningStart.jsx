function IndividualLearningStart() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        Starte jetzt mit deinem eigenen Lernplan!
      </h1>

      <h2 className="text-xl font-semibold text-gray-800 mb-8">Hinweise:</h2>

      <ul className="mb-12 list-disc ml-4">
        <li>Wenn du die Seite verlässt, musst du deine Auswahl neu starten!</li>
        <li>
          Wenn du kein Quiz machen willst, kannst du es einfach überspringen!
        </li>
        <li>Der Balken über dem Artikel zeigt dir deinen Fortschritt an!</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Drücke auf Weiter, wenn du bereit bist!
      </h2>
    </div>
  );
}

export default IndividualLearningStart;
