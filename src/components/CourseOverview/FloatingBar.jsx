import PropTypes from 'prop-types';

function FloatingBar({ onDismiss }) {
  return (
    <div className="fixed bottom-0 p-4 bg-green-300 text-white rounded-t-lg">
      <p className="text-center font-bold mb-2">
        Du bist dir nicht sicher über Deinen Kenntnisstand? Mache jetzt ein
        kurzes Quiz und erhalte eine Empfehlung.
        <button
          type="button"
          className="ml-4 text-white"
          onClick={onDismiss}
          aria-label="Schließen"
        >
          &#x2716;
        </button>
      </p>
      <div className="flex justify-center items-center">
        <a href="/einstufungsquiz">
          <button
            type="button"
            className="bg-white text-green-400 font-bold py-2 px-4 rounded"
          >
            Zum Quiz
          </button>
        </a>
      </div>
    </div>
  );
}

FloatingBar.propTypes = {
  onDismiss: PropTypes.func.isRequired,
};

export default FloatingBar;
