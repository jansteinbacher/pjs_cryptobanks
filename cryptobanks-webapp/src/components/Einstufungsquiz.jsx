import React, { useState, useEffect } from 'react';

const Quiz = () => {
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
          question: 'Wie wird eine Bitcoin-Transaktion verifiziert und in die Blockchain eingefügt?',
          options: [
            'Durch Mining, bei dem Rechenleistung verwendet wird, um komplexe mathematische Probleme zu lösen',
            'Durch die physische Übergabe von Bitcoin-Münzen',
            'Durch den Kauf von Bitcoin-Aktien an der Börse',
            'Durch das Drucken einer physischen Quittung für die Transaktion',
          ],
          correctAnswerIndex: 0,
        },
        {
          question: 'Welche Bedeutung hat der Begriff "Dezentralisierung" in Bezug auf Kryptowährungen?',
          options: [
            'Das Fehlen einer zentralen Autorität oder einer Kontrollinstanz, die die Kryptowährung steuert',
            'Der Handel mit Kryptowährungen an verschiedenen Börsenplätzen',
            'Die Kombination mehrerer Kryptowährungen zu einem neuen digitalen Vermögenswert',
            'Die geheime Verschlüsselung von Kryptowährungstransaktionen',
          ],
          correctAnswerIndex: 0,
        },
        // Add more questions here...
      ];
    

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [answered, setAnswered] = useState(false); // Track if the current question is answered
    const [quizFinished, setQuizFinished] = useState(false); // Track if all questions are answered
  
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
      (userAnswer, index) => userAnswer === questions[index].correctAnswerIndex
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
    recommendedCourseLink = '/beginnercourse';
    recommendedCourseText = 'Beginnerkurs';
  } else if (percentageCorrect >= 30 && percentageCorrect < 50) {
    recommendationText = `Du hast ${percentageCorrect}% der Fragen richtig beantwortet und wir empfehlen dir den Fortgeschrittenenkurs.`;
    recommendedCourseLink = '/intermediatecourse';
    recommendedCourseText = 'Fortgeschrittener Kurs';
  } else {
    recommendationText = `Du hast ${percentageCorrect}% der Fragen richtig beantwortet und wir empfehlen dir den Expertenkurs.`;
    recommendedCourseLink = '/expertcourse';
    recommendedCourseText = 'Expertenkurs';
  }
  
    return (
        <div className="container mx-auto py-12 px-12 max-w-screen-lg">
            <h2 className="text-3xl font-bold mb-4">🧠 Einstufungsquiz</h2>
            <div className='flex items-center justify-center'>
          <div className="w-full md:w-2/3 p-4 md:pr-8 bg-gray-100 rounded-lg">
            
            <div className="mb-8">
              {!quizFinished ? (
                <>
                  <h3 className="text-xl font-bold mb-8">{questions[currentQuestionIndex].question}</h3>
                  <div className='flex items-center justify-center'>
                  <div className="space-y-4">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        className={`bg-green-400 hover:bg-green-600 text-white w-[85%] font-bold py-3 px-4 rounded ${
                          answered ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={answered}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  </div>
                </>
              ) : (
                // Show the final score and appropriate message after all questions are answered
                <>
                    <p className="text-lg mt-4">{recommendationText}</p>
                    <div className="flex space-x-4 mt-2">
                        <a href={recommendedCourseLink}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded">
                        {recommendedCourseText}
                        </button>
                        </a>
                        <a href='/course-overview'>
                        <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded">
                        Kursübersicht
                        </button>
                        </a>
                    </div>
                </>
              )}
            </div>
      </div>
      <div className="w-full md:w-1/3 p-4 md:pl-8">
        <div className="bg-gray-200 p-4 rounded">
          <h3 className="text-xl font-bold mb-4">📈 Quiz Fortschritt</h3>
          <p>Beantwortete Fragen: {userAnswers.filter((answer) => answer !== null).length}</p>
          <p>Richtige Antworten: {numCorrectAnswers}</p>
          <p>Verbleibende Fragen: {questions.length - currentQuestionIndex}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Quiz;