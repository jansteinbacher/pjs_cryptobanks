import PropTypes from 'prop-types';

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
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        {courseTitle}
      </h1>
      <p className="mb-12">{courseText}</p>

      <div className="p-6 mb-12 bg-green-200 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          {characterTitle}
        </h2>
        <p className="italic text-justify mb-4">{characterText}</p>
        <p className="italic text-justify font-semibold mb-8">
          {courseInvitation}
        </p>
        <div>
          {/* eslint-disable jsx-a11y/media-has-caption */}
          <video controls className="w-full h-full rounded-lg">
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a href={courseLink}>
          <button
            type="button"
            className="bg-green-400 hover-bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Beginne die Reise
          </button>
        </a>
      </div>
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
