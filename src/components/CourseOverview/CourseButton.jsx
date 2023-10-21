import PropTypes from 'prop-types';

function CourseButton({ course, isSelected, onClick }) {
  return (
    <button
      type="button"
      className={`course-button ${
        isSelected ? 'selected' : ''
      } rounded-full py-2 px-4 md:px-6 font-semibold text-sm md:text-base ${
        isSelected ? 'bg-green-400 text-white' : 'bg-gray-200 text-gray-800'
      } hover-bg-green-300 hover-text-white transition-colors duration-300 ease-in-out`}
      onClick={() => onClick(course)}
    >
      {course.name}
    </button>
  );
}

CourseButton.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    // Add other expected properties and their PropTypes here
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CourseButton;
