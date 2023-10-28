import { useState } from 'react';
import PropTypes from 'prop-types';

import SummarySection from './SummarySection';
import CourseCelebrationVideo from './CourseCelebrationVideo';
import BackToCourseOverviewLink from './BackToCourseOverviewLink';
import NextCourseLink from './NextCourseLink';
import IndividualLearningPlanLink from './IndividualLearningPlanLink';

// display the course celebration Video on the End Page of the Courses in a muted loop
function CourseEnd({
  summaryDownloadLink,
  certificateDownloadLink,
  followingCourseLink,
  followingCourseDescription,
  furtherContent,
  celebrationVideoSource,
}) {
  const [isSummaryVisible, setSummaryVisible] = useState(true);
  const [isCourseMaterialVisible, setCourseMaterialVisible] = useState(false);

  // handle which section is visible on the page "Zusammenfassung" or "weiter Infosmationsquellen"
  const handleButtonSectionVisibility1 = () => {
    setSummaryVisible(false);
    setCourseMaterialVisible(true);
  };

  const handleButtonSectionVisibility2 = () => {
    setSummaryVisible(true);
    setCourseMaterialVisible(false);
  };

  return (
    <div className="px-8 md:px-20 py-4 md:py-8">
      <div className="flex flex-col md:items-center md:justify-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button
          type="button"
          className={`${
            isSummaryVisible ? 'bg-green-400 text-white' : 'bg-gray-200'
          } rounded px-4 py-2 font-semibold text-lg`}
          onClick={handleButtonSectionVisibility2}
        >
          📝 Zusammenfassung
        </button>
        <button
          type="button"
          className={`${
            isCourseMaterialVisible ? 'bg-green-400 text-white' : 'bg-gray-200'
          } rounded px-4 py-2 font-semibold text-lg`}
          onClick={handleButtonSectionVisibility1}
        >
          📚 Weitere Informationsquellen
        </button>
      </div>

      {isSummaryVisible && (
        <div className="bg-white p-8 rounded-lg space-y-8 text-gray-800">
          <div className="lg:flex lg:items-center space-y-8 lg:space-y-0">
            <SummarySection
              summaryDownloadLink={summaryDownloadLink}
              certificateDownloadLink={certificateDownloadLink}
            />
            <CourseCelebrationVideo videoSource={celebrationVideoSource} />
          </div>
          <hr className="border-t-2 border-gray-400" />
          <div className="lg:flex space-x-8">
            <BackToCourseOverviewLink />
            <NextCourseLink
              followingCourseLink={followingCourseLink}
              followingCourseDescription={followingCourseDescription}
            />
            <IndividualLearningPlanLink />
          </div>
        </div>
      )}

      {isCourseMaterialVisible && (
        <div className="bg-white p-8 rounded-lg space-y-8 text-gray-800">
          {furtherContent}
        </div>
      )}
    </div>
  );
}

// Define the expected prop types for the CourseEnd component
CourseEnd.propTypes = {
  summaryDownloadLink: PropTypes.string.isRequired,
  certificateDownloadLink: PropTypes.string.isRequired,
  followingCourseLink: PropTypes.string.isRequired,
  followingCourseDescription: PropTypes.string.isRequired,
  furtherContent: PropTypes.node.isRequired,
  celebrationVideoSource: PropTypes.string.isRequired,
};

export default CourseEnd;
