import DecisionTree from './DecisionTree';

function IndividualLearningPlan() {
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Individueller Lernplan</h1>
      <p className="mb-8">
        Beantworte die Fragen und erhalte individuell auf dich zugeschnittenen
        Lerneinheiten. Jede Frage die du mit Ja beantwortest enthält ein circa
        20 Minuten langes Modul.
      </p>
      <DecisionTree />
    </div>
  );
}

export default IndividualLearningPlan;
