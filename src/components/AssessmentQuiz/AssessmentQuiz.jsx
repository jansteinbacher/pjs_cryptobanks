import { useState, useEffect } from 'react';
import AssessmentQuestion from './AssessmentQuestion';
import AssessmentProgress from './AssessmentProgress';
import AssessmentSummary from './AssessmentSummary';

//  Assessment Quiz on Course Overview Page to check which course fits to you
function AssessmentQuiz() {
  //  Array of questions displayed in assessment quiz
  const questions = [
    {
      question: 'Was versteht man unter Kryptowährungen?',
      options: [
        'Physische Münzen mit eingebauter Technologie',
        'Digitale Währungen, die auf Kryptografie basieren',
        'Ein Börsenindex für den Handel mit Aktien',
        'Eine Art Kreditkarte für internationale Zahlungen',
      ],
      correctAnswerIndex: 1,
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
        'Physische Gegenstände, die in der virtuellen Realität gehandelt werden',
        'Ein Index für den Handel mit Kryptowährungen',
        'Digitale Vermögenswerte, die auf einer bestehenden Blockchain ausgegeben werden',
        'Eine Art geheime Passwörter für die Authentifizierung',
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        'Wie wird eine Bitcoin-Transaktion verifiziert und in die Blockchain eingefügt?',
      options: [
        'Durch die physische Übergabe von Bitcoin-Münzen',
        'Durch Mining, bei dem Rechenleistung verwendet wird, um komplexe mathematische Probleme zu lösen',
        'Durch den Kauf von Bitcoin-Aktien an der Börse',
        'Durch das Drucken einer physischen Quittung für die Transaktion',
      ],
      correctAnswerIndex: 1,
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
    {
      question:
        'Was stellt eine potenzielle Krypto-Dienstleistung für Banken dar?',
      options: [
        'Das Minen von neuen Kryptowährungen.',
        'Teilnahme in einer Blockchain.',
        'Ausgabe von Kryptowertpapieren.',
        'Alle oben genannten Punkte.',
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Wie zeichnen sich Kredite auf der Blockchain-Technologie aus?',
      options: [
        'Kredite auf der Blockchain-Technologie benötigen keine Besicherung.',
        'Bei Krediten auf der Blockchain-Technologie erfolgt die Berücksichtigung der Kreditwürdigkeit durch das Hinterlegen von Kryptoassets als Besicherung.',
        'Sie sind 1:1 mit traditionellen Krediten vergleichbar.',
        'Keine der oben genannten Punkte.',
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        'Wie fortgeschritten ist die Regulatorische Landschaft im Bezug auf Kryptoassets?',
      options: [
        'Es gibt bisher noch keine Gesetze.',
        'Die derzeitigen Gesetze konzentrieren sich hauptsächlich auf die Bekämpfung von Geldwäsche und Terrorismusfinanzierung (AML/CTF).',
        'Ein EU-Regulierungsrahmen ist bereits in Kraft getreten.',
        'Regulatorik ist in der Philosophie von Kryptoassets ausgeschlossen und findet daher keine Anwendung.',
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        'Welche Regulatorik tritt bereits oder in naher Zukunft in Kraft?',
      options: [
        'MiFID II / MiFIR.t',
        'MiCA',
        'eWpG',
        'Alle oben genannten Punkte.',
      ],
      correctAnswerIndex: 3,
    },
    {
      question: 'Wozu dient die MiCA-Verordnung?',
      options: [
        'Mit MiCA wird ein ganzheitlicher Regulierungsrahmen in der EU geschaffen.',
        'MiCA stellt eine weitere deutsche Verordnung dar.',
        'Mit MiCA unterliegen Kryptoasset-Dienstleister weniger Verpflichtungen.',
        'Alle oben genannten Punkte.',
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Warum sind private Schlüssel bei Krypto-Assets wichtig?',
      options: [
        'Sie ermöglichen den Zugang zu Zentralbankreserven.',
        'Sie sind erforderlich, um Krypto-Assets zu erzeugen.',
        'Private Schlüssel ermöglichen den Zugang und die Verfügungsgewalt über Kryptoassets.',
        'Private Schlüssel dienen als Identifikationsmerkmal für Steuerzwecke.',
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        'Was muss erfüllt sein, damit ein Kryptoverwahrgeschäft rechtlich definiert ist?',
      options: [
        'Die Nutzung von Kryptoassets als Zahlungsmittel.',
        'Die Speicherung von Kryptoassets auf persönlichen Computern.',
        'Die Aufbewahrung, Verwaltung und Sicherung von Kryptoassets oder geheimen kryptografischen Schlüsseln im Auftrag von Dritten.',
        'Die Verwendung von Kryptoassets für den Tausch von physischen Gütern.',
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        'Was umfasst die Definition von Kryptowerten im Kreditwesengesetz?',
      options: [
        'Digitale Darstellungen von Werten, die von Zentralbanken emittiert werden.',
        'Digitale Darstellungen von Werten, die von natürlichen oder juristischen Personen garantiert werden.',
        'Digitale Darstellungen von Werten, die von Zentralbanken emittiert werden und von natürlichen oder juristischen Personen als Tauschmittel akzeptiert werden können.',
        'Digitale Darstellungen von Werten, die nicht von Zentralbanken emittiert oder garantiert werden, jedoch von natürlichen oder juristischen Personen als Tauschmittel akzeptiert werden können.',
      ],
      correctAnswerIndex: 3,
    },
    {
      question:
        'Was kennzeichnet den Ansatz des Self-Custody bei der Aufbewahrung von Kryptoassets?',
      options: [
        'Die Kontrolle über private Schlüssel wird an eine dritte Partei abgegeben.',
        'Es gibt keine Notwendigkeit, private Schlüssel zu verwenden.',
        'Der Nutzer trägt die gesamte Verantwortung für die Sicherheit des privaten Schlüssels.',
        'Kryptoassets werden automatisch verschlüsselt und geschützt.',
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Welche Verwendungssituation ist typisch für Hot Wallets?',
      options: [
        'Langfristige Speicherung von Kryptoassets.',
        'Gelegentliche Transaktionen mit größerem Vermögen.',
        'Sicherung großer Mengen an Kryptoassets.',
        'Hochsichere Verwahrung von Kryptoassets.',
      ],
      correctAnswerIndex: 1,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null),
  );
  const [answered, setAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  //  get the chosen answer of user and check is it is true, then display next question
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

  //  number of correct answers
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
    <div className="container mx-auto py-6 px-4 md:px-12 min-h-screen max-w-screen-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
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
