import { useState, useEffect } from 'react';
import AssessmentQuestion from './AssessmentQuestion';
import AssessmentProgress from './AssessmentProgress';
import AssessmentSummary from './AssessmentSummary';

function AssessmentQuiz() {
  const questions = [
    {
      question: 'Was versteht man unter Kryptowährungen?',
      options: [
        'Digitale Währungen, die auf Kryptografie basieren',
        'Physische Münzen mit eingebauter Technologie',
        'Ein Börsenindex für den Handel mit Aktien',
        'Eine Art Kreditkarte für internationale Zahlungen',
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'Was ist Bitcoin?',
      options: [
        'Eine digitale Währung, die auf Blockchain-Technologie basiert',
        'Eine neue Form von physischem Bargeld',
        'Ein Aktienindex für Technologieunternehmen',
        'Eine Art virtuelles Sammelalbum',
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'Was sind Token im Zusammenhang mit Blockchain?',
      options: [
        'Digitale Vermögenswerte, die auf einer bestehenden Blockchain ausgegeben werden',
        'Physische Gegenstände, die in der virtuellen Realität gehandelt werden',
        'Ein Index für den Handel mit Kryptowährungen',
        'Eine Art geheime Passwörter für die Authentifizierung',
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        'Wie wird eine Bitcoin-Transaktion verifiziert und in die Blockchain eingefügt?',
      options: [
        'Durch Mining, bei dem Rechenleistung verwendet wird, um komplexe mathematische Probleme zu lösen',
        'Durch die physische Übergabe von Bitcoin-Münzen',
        'Durch den Kauf von Bitcoin-Aktien an der Börse',
        'Durch das Drucken einer physischen Quittung für die Transaktion',
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        'Welche Bedeutung hat der Begriff "Dezentralisierung" in Bezug auf Kryptowährungen?',
      options: [
        'Das Fehlen einer zentralen Autorität oder einer Kontrollinstanz, die die Kryptowährung steuert',
        'Der Handel mit Kryptowährungen an verschiedenen Börsenplätzen',
        'Die Kombination mehrerer Kryptowährungen zu einem neuen digitalen Vermögenswert',
        'Die geheime Verschlüsselung von Kryptowährungstransaktionen',
      ],
      correctAnswerIndex: 0,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null),
  );
  const [answered, setAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    if (!answered) {
      const newUserAnswers = [...userAnswers];
      newUserAnswers[currentQuestionIndex] = answerIndex;
      setUserAnswers(newUserAnswers);
      setAnswered(true);

      // Automatically move to the next question after a short delay
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setAnswered(false); // Reset the answered status for the next question
        } else {
          setQuizFinished(true); // All questions are answered
        }
      }, 10);
    }
  };

  const numCorrectAnswers = userAnswers.filter(
    (userAnswer, index) => userAnswer === questions[index].correctAnswerIndex,
  ).length;

  const percentageCorrect = (numCorrectAnswers / questions.length) * 100;

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      setAnswered(false); // Reset the answered status
      setQuizFinished(true); // All questions are answered
    }
  }, [currentQuestionIndex, questions.length]);

  let recommendationText = '';
  let recommendedCourseLink = '';
  let recommendedCourseText = '';

  if (percentageCorrect < 30) {
    recommendationText = `Du hast ${percentageCorrect}% der Fragen richtig beantwortet und wir empfehlen dir den Beginnerkurs.`;
    recommendedCourseLink = '/course-beginner-introduction';
    recommendedCourseText = 'Beginnerkurs';
  } else if (percentageCorrect >= 30 && percentageCorrect < 50) {
    recommendationText = `Du hast ${percentageCorrect}% der Fragen richtig beantwortet und wir empfehlen dir den Fortgeschrittenenkurs.`;
    recommendedCourseLink = '/course-advanced-introduction';
    recommendedCourseText = 'Fortgeschrittener Kurs';
  } else {
    recommendationText = `Du hast ${percentageCorrect}% der Fragen richtig beantwortet und wir empfehlen dir den Expertenkurs.`;
    recommendedCourseLink = '/course-expert-introduction';
    recommendedCourseText = 'Expertenkurs';
  }

  return (
    <div className="container mx-auto py-6 px-4 md:px-12 max-w-screen-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        🧠 Einstufungsquiz
      </h2>
      <div className="flex flex-col items-center">
        <div className="w-full p-4 md:pr-8 bg-gray-100 rounded-lg">
          <div className="mb-8">
            {!quizFinished ? (
              <AssessmentQuestion
                key={currentQuestionIndex}
                id={`question_${currentQuestionIndex}`}
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                handleAnswerSelect={handleAnswerSelect}
                answered={answered}
              />
            ) : (
              <AssessmentSummary
                recommendationText={recommendationText}
                recommendedCourseLink={recommendedCourseLink}
                recommendedCourseText={recommendedCourseText}
              />
            )}
          </div>
        </div>
        <div className="w-full p-4 md:pl-8 mt-4">
          <AssessmentProgress
            numAnswered={userAnswers.filter((answer) => answer !== null).length}
            numCorrect={numCorrectAnswers}
            remainingQuestions={questions.length - currentQuestionIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default AssessmentQuiz;
