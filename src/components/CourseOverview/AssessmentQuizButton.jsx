function AssessmentQuizButton() {
  // display the button to the assessment quiz that links to the page of the assessment quiz
  return (
    <div className="flex justify-center items-center space-x-8 mt-4 mb-8">
      <p>Du bist dir nicht sicher über deinen Kenntnisstand?</p>
      <a href="/assessment-quiz">
        <button
          type="button"
          className="bg-green-400 hover:bg-green-300 text-white font-bold py-2 px-4 rounded"
        >
          Zum Einstufungsquiz
        </button>
      </a>
    </div>
  );
}

export default AssessmentQuizButton;
