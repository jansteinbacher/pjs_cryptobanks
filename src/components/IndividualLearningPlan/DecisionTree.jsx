import { useState } from 'react';
import Question from './Question';
import Module from '../Module';
import IndividualLearningStart from './IndividualLearningStart';
import {
  IntroductionCryptoAssetsPart1,
  IntroductionCryptoAssetsPart2,
  IntroductionCryptoAssetsPart3,
  IntroductionCryptoAssetsPart4,
  IntroductionCryptoAssetsPart5,
  IntroductionCryptoAssetsPart6,
  IntroductionCryptoAssetsExpert,
  IntroductionCryptoAssetsQuiz,
  IntroductionBlockchainPart1,
  IntroductionBlockchainPart2,
  IntroductionBlockchainPart3,
  IntroductionBlockchainPart4,
  IntroductionBlockchainPart5,
  IntroductionBlockchainExpert,
  IntroductionBlockchainQuiz,
  TypesOfCryptoAssetsPart1,
  TypesOfCryptoAssetsPart2,
  TypesOfCryptoAssetsPart3,
  TypesOfCryptoAssetsPart4,
  TypesOfCryptoAssetsPart5,
  TypesOfCryptoAssetsExpert,
  TypesOfCryptoAssetsQuiz,
  OpportunitiesAndChallengesPart1,
  OpportunitiesAndChallengesPart2,
  OpportunitiesAndChallengesCryptoAssetsExpert,
  OpportunitiesAndChallengesCryptoAssetsQuiz,
  CryptoAssetsRegulationPart1,
  CryptoAssetsRegulationPart2,
  CryptoAssetsRegulationQuiz,
  CryptoAssetServicesPart1,
  CryptoAssetServicesPart2,
  CryptoAssetServicesPart3,
  CryptoAssetServicesPart4,
  CryptoAssetServicesPart5,
  CryptoAssetServicesPart6,
  CryptoAssetServicesQuiz,
  CryptoAssetsAdoptionPart1,
  CryptoAssetsAdoptionPart2,
  CryptoAssetsAdoptionPart3,
  CryptoAssetsAdoptionPart4,
  CryptoAssetsAdoptionPart5,
  CryptoAssetsAdoptionPart6,
  CryptoAssetsAdoptionPart7,
  CryptoAssetsAdoptionPart8,
  CryptoAssetsAdoptionPart9,
  CryptoAssetsAdoptionPart10,
  CryptoAssetsAdoptionQuiz,
  IntroductionCryptoCustodyPart1,
  IntroductionCryptoCustodyPart2,
  IntroductionCryptoCustodyPart3,
  IntroductionCryptoCustodyQuiz,
  CryptoCustodyApplicationAreasPart1,
  CryptoCustodyApplicationAreasPart2,
  CryptoCustodyApplicationAreasPart3,
  CryptoCustodyApplicationAreasPart4,
  CryptoCustodyApplicationAreasPart5,
  CryptoCustodyApplicationAreasPart6,
  CryptoCustodyApplicationAreasQuiz,
  CryptoCustodyRegulationPart1,
  CryptoCustodyRegulationPart2,
  CryptoCustodyRegulationQuiz,
  CryptoCustodyChallengesPart1,
  CryptoCustodyChallengesPart2,
} from '../LearningUnit';

function DecisionTree() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [sections, setSections] = useState([IndividualLearningStart]);

  const questions = [
    {
      question: 'Möchtest du eine Übersicht zu Kryptoassets bekommen?',
      answers: ['Ja', 'Nein'],
      stateKey: 'cryptoAssets',
    },
    {
      question:
        'Möchtest du eine Einführung zur Blockchain-Technologie bekommen?',
      answers: ['Ja', 'Nein'],
      stateKey: 'blockchain',
    },
    {
      question:
        'Möchtest du herausfinden, wie Kryptoassets in Verbindung zu traditionellen Assets stehen?',
      answers: ['Ja', 'Nein'],
      stateKey: 'typesOfCryptoAssets',
    },
    {
      question:
        'Möchtest du mehr über die Herausforderungen und Zukunftsaussichten von Kryptoassetes erfahren?',
      answers: ['Ja', 'Nein'],
      stateKey: 'opportunitiesAndChallengesCryptoAssets',
    },
    {
      question:
        'Möchtest du mehr über die Regulatorik von Kryptoassetes erfahren? (Vorkenntnisse benötigt)',
      answers: ['Ja', 'Nein'],
      stateKey: 'cryptoAssetsRegulation',
    },
    {
      question:
        'Möchtest du mehr über die Krypto-Dienstleistungen erfahren? (Vorkenntnisse benötigt)',
      answers: ['Ja', 'Nein'],
      stateKey: 'cryptoAssetsServices',
    },
    {
      question:
        'Möchtest du die Ergebnisse einer Umfrage zum Thema Adaption von Kryptoassets sehen?',
      answers: ['Ja', 'Nein'],
      stateKey: 'cryptoAssetsSurvey',
    },
    {
      question:
        'Möchtest du mehr über die Grundlagen der Kryptoverwahrung erfahren?',
      answers: ['Ja', 'Nein'],
      stateKey: 'cryptoAssetsCustody',
    },
    {
      question:
        'Möchtest du mehr über die verschiedenen Arten der Kryptoverwahrlösungen erfahren?',
      answers: ['Ja', 'Nein'],
      stateKey: 'cryptoAssetsCustodyAreas',
    },
    {
      question:
        'Möchtest du mehr über die Regulatorik der Kryptoverwahrlösungen erfahren?',
      answers: ['Ja', 'Nein'],
      stateKey: 'cryptoAssetsCustodyRegulation',
    },
    {
      question:
        'Möchtest du mehr über die Herausforderungen von Kryptoverwahrlösungen erfahren?',
      answers: ['Ja', 'Nein'],
      stateKey: 'cryptoAssetsCustodyChallenges',
    },
  ];

  const handleAnswerUpdate = (stateKey, answer) => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    if (answer === 'Ja' && stateKey === 'cryptoAssets') {
      const newSections = [
        ...sections,
        IntroductionCryptoAssetsPart1,
        IntroductionCryptoAssetsPart2,
        IntroductionCryptoAssetsPart3,
        IntroductionCryptoAssetsPart4,
        IntroductionCryptoAssetsPart5,
        IntroductionCryptoAssetsPart6,
        IntroductionCryptoAssetsExpert,
        IntroductionCryptoAssetsQuiz,
      ];
      setSections(newSections);
    }
    if (answer === 'Ja' && stateKey === 'blockchain') {
      const newSections = [
        ...sections,
        IntroductionBlockchainPart1,
        IntroductionBlockchainPart2,
        IntroductionBlockchainPart3,
        IntroductionBlockchainPart4,
        IntroductionBlockchainPart5,
        IntroductionBlockchainExpert,
        IntroductionBlockchainQuiz,
      ];
      setSections(newSections);
    }
    if (answer === 'Ja' && stateKey === 'typesOfCryptoAssets') {
      const newSections = [
        ...sections,
        TypesOfCryptoAssetsPart1,
        TypesOfCryptoAssetsPart2,
        TypesOfCryptoAssetsPart3,
        TypesOfCryptoAssetsPart4,
        TypesOfCryptoAssetsPart5,
        TypesOfCryptoAssetsExpert,
        TypesOfCryptoAssetsQuiz,
      ];
      setSections(newSections);
    }
    if (
      answer === 'Ja' &&
      stateKey === 'opportunitiesAndChallengesCryptoAssets'
    ) {
      const newSections = [
        ...sections,
        OpportunitiesAndChallengesPart1,
        OpportunitiesAndChallengesPart2,
        OpportunitiesAndChallengesCryptoAssetsExpert,
        OpportunitiesAndChallengesCryptoAssetsQuiz,
      ];
      setSections(newSections);
    }
    if (answer === 'Ja' && stateKey === 'cryptoAssetsRegulation') {
      const newSections = [
        ...sections,
        CryptoAssetsRegulationPart1,
        CryptoAssetsRegulationPart2,
        CryptoAssetsRegulationQuiz,
      ];
      setSections(newSections);
    }
    if (answer === 'Ja' && stateKey === 'cryptoAssetsServices') {
      const newSections = [
        ...sections,
        CryptoAssetServicesPart1,
        CryptoAssetServicesPart2,
        CryptoAssetServicesPart3,
        CryptoAssetServicesPart4,
        CryptoAssetServicesPart5,
        CryptoAssetServicesPart6,
        CryptoAssetServicesQuiz,
      ];
      setSections(newSections);
    }
    if (answer === 'Ja' && stateKey === 'cryptoAssetsSurvey') {
      const newSections = [
        ...sections,
        CryptoAssetsAdoptionPart1,
        CryptoAssetsAdoptionPart2,
        CryptoAssetsAdoptionPart3,
        CryptoAssetsAdoptionPart4,
        CryptoAssetsAdoptionPart5,
        CryptoAssetsAdoptionPart6,
        CryptoAssetsAdoptionPart7,
        CryptoAssetsAdoptionPart8,
        CryptoAssetsAdoptionPart9,
        CryptoAssetsAdoptionPart10,
        CryptoAssetsAdoptionQuiz,
      ];
      setSections(newSections);
    }
    if (answer === 'Ja' && stateKey === 'cryptoAssetsCustody') {
      const newSections = [
        ...sections,
        IntroductionCryptoCustodyPart1,
        IntroductionCryptoCustodyPart2,
        IntroductionCryptoCustodyPart3,
        IntroductionCryptoCustodyQuiz,
      ];
      setSections(newSections);
    }
    if (answer === 'Ja' && stateKey === 'cryptoAssetsCustodyAreas') {
      const newSections = [
        ...sections,
        CryptoCustodyApplicationAreasPart1,
        CryptoCustodyApplicationAreasPart2,
        CryptoCustodyApplicationAreasPart3,
        CryptoCustodyApplicationAreasPart4,
        CryptoCustodyApplicationAreasPart5,
        CryptoCustodyApplicationAreasPart6,
        CryptoCustodyApplicationAreasQuiz,
      ];
      setSections(newSections);
    }
    if (answer === 'Ja' && stateKey === 'cryptoAssetsCustodyRegulation') {
      const newSections = [
        ...sections,
        CryptoCustodyRegulationPart1,
        CryptoCustodyRegulationPart2,
        CryptoCustodyRegulationQuiz,
      ];
      setSections(newSections);
    }
    if (answer === 'Ja' && stateKey === 'cryptoAssetsCustodyChallenges') {
      const newSections = [
        ...sections,
        CryptoCustodyChallengesPart1,
        CryptoCustodyChallengesPart2,
      ];
      setSections(newSections);
    }
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={currentQuestionData.question}
          answers={currentQuestionData.answers}
          updateAnswer={(answer) =>
            handleAnswerUpdate(currentQuestionData.stateKey, answer)
          }
        />
      ) : (
        <Module
          key={sections.length}
          sections={sections}
          pagePath="/decisiontree?from=individual-course"
        />
      )}
    </div>
  );
}

export default DecisionTree;
