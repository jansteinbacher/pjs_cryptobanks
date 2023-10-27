import DecisionTree from './DecisionTree';

function IndividualLearningPlanComponent() {
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Individueller Lernplan</h1>
      <p className="mb-8">
        Beantworte die Fragen und erhalte individuell auf dich zugeschnittenen
        Lerneinheiten.
      </p>
      <DecisionTree />
    </div>
  );
}

export default IndividualLearningPlanComponent;
