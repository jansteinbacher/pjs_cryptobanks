import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Module.css';
import NavigationButtons from './NavigationButtons';
import ProgressBar from './ProgressBar';
import RewardBanner from './RewardBanner';
import getCompletionRedirectURL from './CompletionRedirect';

function Module({ sections, pagePath }) {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [showRewardBanner, setShowRewardBanner] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);
  const progress =
    (sectionIndex / sections.length) * 100 +
    (scrollProgress * 100) / sections.length;

  const handleNextSection = () => {
    if (sectionIndex === sections.length - 1) {
      window.location.href = pagePath;
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

  const completionRedirectURL = getCompletionRedirectURL(
    new URLSearchParams(window.location.search).get('from'),
  );

  return (
    <div className="max-w-screen-lg mx-auto p-2 md:p-4">
      <h3 className="text-xl mb-2">Kursfortschritt {progress.toFixed(0)}%</h3>

      <ProgressBar progress={progress} />

      <SectionComponent />

      <NavigationButtons
        isFirstSection={isFirstSection}
        isLastSection={isLastSection}
        handlePreviousSection={handlePreviousSection}
        buttonDestination={completionRedirectURL}
        handleNextSection={handleNextSection}
      />

      {showRewardBanner && <RewardBanner sectionIndex={sectionIndex} />}
    </div>
  );
}

Module.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  pagePath: PropTypes.string.isRequired,
};

export default Module;
