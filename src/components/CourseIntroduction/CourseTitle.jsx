import PropTypes from 'prop-types';

// display the Course title
function CourseTitle({ title, text }) {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl  font-bold text-gray-800 mb-8 tracking-tight">
        {title}
      </h1>
      <p className="mb-12">{text}</p>
    </div>
  );
}

// Define the expected prop types for the CourseTitle component
CourseTitle.propTypes = {
  title: PropTypes.string.isRequired, // Requires a string for the title
  text: PropTypes.string.isRequired, // Requires a string for the text
};

export default CourseTitle;
