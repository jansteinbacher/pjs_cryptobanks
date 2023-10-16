// CourseBeginnerArticle.js

import { useState, useEffect } from 'react';
import '../../../course.css';
import {
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
} from '../../LearningUnit';

function CourseExpertArticle() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [showRewardBanner, setShowRewardBanner] = useState(false);

  const sections = [
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
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const progress =
    (sectionIndex / sections.length) * 100 +
    (scrollProgress * 100) / sections.length;

  const handleNextSection = () => {
    if (sectionIndex === sections.length - 1) {
      window.location.href = '/course-expert?from=expert-course';
    } else {
      setSectionIndex((prevIndex) => prevIndex + 1);
      setShowRewardBanner(true);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousSection = () => {
    setSectionIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    window.scrollTo(0, 0);
  };

  const SectionComponent = sections[sectionIndex];
  const isLastSection = sectionIndex === sections.length - 1;
  const isFirstSection = sectionIndex === 0;

  useEffect(() => {
    if (showRewardBanner) {
      const timer = setTimeout(() => {
        setShowRewardBanner(false);
      }, 4000);

      // Always return a cleanup function, even if it's empty
      return () => {
        clearTimeout(timer);
      };
    }

    // If showRewardBanner is false, still return an empty cleanup function
    return () => {};
  }, [showRewardBanner]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.clientHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto p-2 md:p-4">
      <h3 className="text-xl mb-2">Kursfortschritt {progress.toFixed(0)}%</h3>
      <div className="flex items-center justify-center mb-8">
        <div className="w-full bg-gray-300 rounded overflow-hidden h-2">
          <div
            className="bg-green-400 h-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <SectionComponent />

      <div className="flex flex-col md:flex-row justify-center mt-4 space-y-2 md:space-y-0 md:space-x-2">
        {!isFirstSection && (
          <button
            type="button"
            onClick={handlePreviousSection}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Zurück
          </button>
        )}
        {isLastSection ? (
          <a
            href="/articles/course-advanced-end"
            className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Kurs abschließen
          </a>
        ) : (
          <button
            type="button"
            onClick={handleNextSection}
            className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Weiter
          </button>
        )}
      </div>

      {showRewardBanner && (
        <div className="reward-banner">
          <span className="mr-2" role="img" aria-label="Achievement Icon">
            🏆
          </span>
          Glückwunsch! Sie haben den {sectionIndex}. Artikel abgeschlossen.
        </div>
      )}
    </div>
  );
}

export default CourseExpertArticle;
