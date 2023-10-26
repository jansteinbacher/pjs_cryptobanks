import { Link } from 'react-router-dom';

function IndividualLearningPlanLink() {
  return (
    <div className="text-center lg:w-1/3">
      <h3 className="text-xl font-semibold">
        Lerninhalte individuell auswählen
      </h3>
      <p className="mt-4">
        Wähle aus verschiedenen Modulen ganz individuell die Informationen aus,
        die du erlernen möchtest.
      </p>
      <Link to="/decisiontree">
        <button
          type="button"
          className="bg-green-400 text-white hover:bg-green-500 rounded px-4 py-2 mt-4"
        >
          Individuellen Lernplan erstellen
        </button>
      </Link>
    </div>
  );
}

export default IndividualLearningPlanLink;
