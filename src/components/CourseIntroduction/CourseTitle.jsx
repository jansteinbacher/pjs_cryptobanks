import PropTypes from 'prop-types';

function CourseTitle({ title, text }) {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        {title}
      </h1>
      <p className="mb-12">{text}</p>
    </div>
  );
}

CourseTitle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CourseTitle;
