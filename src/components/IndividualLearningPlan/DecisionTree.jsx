import { useState } from 'react';
import Question from './Question';
import Module from '../Module';
import IndividualLearningIntroduction from '../IndividualLearningPlanIntroduction';
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

/**
 * The DecisionTree component controls the flow of a user's learning journey,
 * offering a series of questions with answers to guide them through different sections
 * related to crypto assets and blockchain topics. Based on the user's responses,
 * relevant sections are dynamically added to the learning module, resulting in a personalized
 * learning experience. This component utilizes React state management to keep track
 * of the current question and the sections to display, offering a flexible and interactive
 * way to explore educational content.
 */

function DecisionTree() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [sections, setSections] = useState([IndividualLearningIntroduction]);

  // Define an array of questions, each with possible answers and associated state key.
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

  // Handle the update when an answer is selected.
  const handleAnswerUpdate = (stateKey, answer) => {
    // Increment the current question.
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    // Depending on the selected answer and stateKey, add relevant sections to the list of sections.
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

  // Get the current question data based on the current question index.
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
