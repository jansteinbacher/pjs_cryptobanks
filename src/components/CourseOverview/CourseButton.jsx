// Import PropTypes library to define prop types for the component
import PropTypes from 'prop-types';

// CourseButton component is used for course level and its design is based on the isSelected attribute
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
      {course.name} {/* Display the course name as button text */}
    </button>
  );
}

// Define the expected prop types for the CourseButton component
CourseButton.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired, // Requires a string for the course name
    // You can add other expected properties and their PropTypes here
  }).isRequired,
  isSelected: PropTypes.bool.isRequired, // Requires a boolean for isSelected
  onClick: PropTypes.func.isRequired, // Requires a function for onClick
};

export default CourseButton; // Export the CourseButton component
