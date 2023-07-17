import React, { useState } from 'react';
import Blockchain from './IntroductionBlockchain';
import Cryptoassets from './IntroductionCryptoAssets';
import Token from './IntroductionToken';
import Trade from './IntroductionTrade';

const CourseBeginnerArticle = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const sections = [Cryptoassets, Blockchain, Token, Trade];
  const progress = ((sectionIndex + 1) / (sections.length)) * 100;

  const handleNextSection = () => {
    if (sectionIndex === sections.length - 1) {
      // Navigate to /course-beginner when reaching the last section
      window.location.href = '/course-beginner';
    } else {
      setSectionIndex((prevIndex) => prevIndex + 1);
      window.scrollTo(0, 0); // Scroll to the top
    }
  };

  const handlePreviousSection = () => {
    setSectionIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    );
    window.scrollTo(0, 0); // Scroll to the top
  };

  const SectionComponent = sections[sectionIndex];
  const isLastSection = sectionIndex === sections.length - 1;
  const isFirstSection = sectionIndex === 0;

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h3 className=' text-xl mb-2'>Kursfortschritt {progress}%</h3>
      <div className="flex items-center justify-center mb-8">
        <div className="w-full bg-gray-300 rounded overflow-hidden h-2">
          <div
            className="bg-blue-500 h-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <SectionComponent />

      <div className="flex justify-center mt-4">
        {!isFirstSection && (
          <button
            onClick={handlePreviousSection}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Vorheriger Artikel
          </button>
        )}
        {isLastSection ? (
          <a
            href="/course-beginner"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Zur Übersicht
          </a>
        ) : (
          <button
            onClick={handleNextSection}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Nächster Artikel
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseBeginnerArticle;
