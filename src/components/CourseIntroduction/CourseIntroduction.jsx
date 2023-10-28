import PropTypes from 'prop-types';

import CourseTitle from './CourseTitle';
import CharacterSection from './CharacterSection';
import StartButton from './StartButton';

// CourseIntroduction component is used to display the CourseIntroduction page at the beginning of each course
function CourseIntroduction({
  courseTitle,
  courseText,
  characterTitle,
  characterText,
  courseInvitation,
  videoSource,
  courseLink,
}) {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      {/* Display the CourseTitle component with title and text */}
      <CourseTitle title={courseTitle} text={courseText} />

      {/* Display the CharacterSection component with title, text, invitation, and video source */}
      <CharacterSection
        title={characterTitle}
        text={characterText}
        invitation={courseInvitation}
        videoSource={videoSource}
      />

      {/* Display the StartButton component with a link to start the course */}
      <StartButton link={courseLink} />
    </div>
  );
}

// Define the expected prop types for the CourseIntroduction component
CourseIntroduction.propTypes = {
  courseTitle: PropTypes.string.isRequired, // Requires a string for course title
  courseText: PropTypes.string.isRequired, // Requires a string for course text
  characterTitle: PropTypes.string.isRequired, // Requires a string for character title
  characterText: PropTypes.string.isRequired, // Requires a string for character text
  courseInvitation: PropTypes.string.isRequired, // Requires a string for course invitation
  videoSource: PropTypes.string.isRequired, // Requires a string for video source
  courseLink: PropTypes.string.isRequired, // Requires a string for course link
};

export default CourseIntroduction;
