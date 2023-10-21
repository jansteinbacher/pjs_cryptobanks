import PropTypes from 'prop-types';

function CourseDetails({ selectedCourse }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {selectedCourse.name}
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {selectedCourse.points.map((point) => (
            <li key={point} className="mb-2">
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="mb-4 font-bold text-xl text-gray-800">
          Was Du in diesem Video lernen wirst:
        </h2>
        <div className="md:w-full h-64 md:h-auto">
          {/* eslint-disable jsx-a11y/media-has-caption */}
          <video
            key={selectedCourse.id}
            controls
            className="w-full h-full rounded-lg"
          >
            <source src={selectedCourse.video_link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-4 text-gray-700">
          <p>
            <span className="font-semibold">Dauer:</span>{' '}
            {selectedCourse.duration}
          </p>
        </div>
      </div>
    </div>
  );
}

CourseDetails.propTypes = {
  selectedCourse: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.string.isRequired,
    video_link: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseDetails;
