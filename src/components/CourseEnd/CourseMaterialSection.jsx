import CourseCompleted from '../../images/firework_course_completed.mp4';

function CourseMaterialSection() {
  return (
    <div className="lg:w-1/2">
      <video autoPlay loop muted className="w-full">
        <source src={CourseCompleted} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default CourseMaterialSection;
