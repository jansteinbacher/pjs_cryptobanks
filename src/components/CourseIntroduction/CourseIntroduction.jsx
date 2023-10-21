import PropTypes from 'prop-types';
import CourseTitle from './CourseTitle';
import CharacterSection from './CharacterSection';
import StartButton from './StartButton';

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
      <CourseTitle title={courseTitle} text={courseText} />
      <CharacterSection
        title={characterTitle}
        text={characterText}
        invitation={courseInvitation}
        videoSource={videoSource}
      />
      <StartButton link={courseLink} />
    </div>
  );
}

CourseIntroduction.propTypes = {
  courseTitle: PropTypes.string.isRequired,
  courseText: PropTypes.string.isRequired,
  characterTitle: PropTypes.string.isRequired,
  characterText: PropTypes.string.isRequired,
  courseInvitation: PropTypes.string.isRequired,
  videoSource: PropTypes.string.isRequired,
  courseLink: PropTypes.string.isRequired,
};

export default CourseIntroduction;
