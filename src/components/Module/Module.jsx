import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Module.css';
import NavigationButtons from './NavigationButtons';
import ProgressBar from './ProgressBar';
import RewardBanner from './RewardBanner';
import getCompletionRedirectURL from './CompletionRedirect';

// Module component manages the display and navigation of sections within a module.
function Module({ sections, pagePath }) {
  // State to keep track of the currently displayed section and the reward banner visibility
  const [sectionIndex, setSectionIndex] = useState(0);
  const [showRewardBanner, setShowRewardBanner] = useState(false);

  // State to calculate the overall progress of the module
  const [scrollProgress, setScrollProgress] = useState(0);
  const progress =
    (sectionIndex / sections.length) * 100 +
    (scrollProgress * 100) / sections.length;

  // Function to navigate to the next section or the completion page
  const handleNextSection = () => {
    if (sectionIndex === sections.length - 1) {
      window.location.href = pagePath;
    } else {
      setSectionIndex((prevIndex) => prevIndex + 1);
      setShowRewardBanner(true);
      window.scrollTo(0, 0);
    }
  };

  // Function to navigate to the previous section
  const handlePreviousSection = () => {
    setSectionIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    window.scrollTo(0, 0);
  };

  // Determine the component to display based on the current section
  const SectionComponent = sections[sectionIndex];
  const isLastSection = sectionIndex === sections.length - 1;
  const isFirstSection = sectionIndex === 0;

  // Use useEffect to show and hide the reward banner
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

  // Use useEffect to update scroll progress as the user scrolls
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

  // Get the completion redirect URL based on the 'from' query parameter
  const completionRedirectURL = getCompletionRedirectURL(
    new URLSearchParams(window.location.search).get('from'),
  );

  // Render the module interface with progress, buttons, and the current section
  return (
    <div className="max-w-screen-lg mx-auto p-2 md:p-4 min-h-screen">
      <h3 className="text-xl mb-2">Fortschritt {progress.toFixed(0)}%</h3>

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

// Define prop types for the Module component
Module.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.elementType).isRequired, // Array of section components
  pagePath: PropTypes.string.isRequired, // Path to the module's completion page
};

export default Module;
