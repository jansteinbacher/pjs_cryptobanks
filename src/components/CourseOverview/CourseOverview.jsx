import { useState } from 'react';
import CourseButton from './CourseButton';
import CourseDetails from './CourseDetails';
import AssessmentQuizButton from './AssessmentQuizButton';
import BeginnerVideo from '../../videos/courseBeginnerIntroduction.mp4';
import AdvancedVideo from '../../videos/courseAdvancedIntroduction.mp4';
import ExpertVideo from '../../videos/courseExpertIntroduction.mp4';
import './CourseOverview.css';

//  data to courses
const courses = [
  {
    id: 1,
    name: 'Beginner 🧑‍🏫',
    points: [
      'Grundverständnis für Kryptoassets',
      'Grundverständnis der Blockchain-Technologie',
      'Einblick in verschiedene Arten von Kryptoassets',
      'Herausforderungen und Zukunftsaussichten von Kryptoassets',
      'Überprüfung des Gelerneten mithilfe eines Quiz 💡',
    ],
    duration: '2,5 Stunden',
    lastUpdated: 'Oktober 25, 2023',
    course_link: '/course-beginner-introduction',
    video_link: BeginnerVideo,
  },
  {
    id: 2,
    name: 'Fortgeschrittener 👩‍🎓',
    points: [
      'Nationale und internationale Regulatorik für Kryptoassets',
      'Arten von Kryptoasset-Dienstleistungen',
      'Adaption und Trends von Kryptoassets in der Gesellschaft',
      'Überprüfung des Gelerneten mithilfe eines Quiz 💡',
    ],
    duration: '2 Stunden',
    lastUpdated: 'Oktober 25, 2023',
    course_link: '/course-advanced-introduction',
    video_link: AdvancedVideo,
  },
  {
    id: 3,
    name: 'Experte 🔬',
    points: [
      'Grundlagen der Kryptoasset-Verwahrung',
      'Arten von Verwahrlösungen',
      'Regulatorik zur Kryptoverwahrung',
      'Herausforderungen und Zukunftsaussichten der Kryptoverwahrung',
      'Überprüfung des Gelerneten mithilfe eines Quiz 💡',
    ],
    duration: '1,5 Stunden',
    lastUpdated: 'Oktober 25, 2023',
    course_link: '/course-expert-introduction',
    video_link: ExpertVideo,
  },
];

// with the usage of other components in folder creation of course overview page
function CourseOverview() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-lg mx-auto mb-12 py-12 px-4 md:px-0">
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Unsere Kursübersicht
          </h1>
          <div className="intro-tooltip text-gray-600">
            Wähle einen Kurs aus, der zu deinen Bedürfnissen passt:
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
            {courses.map((course) => (
              <CourseButton
                key={course.id}
                course={course}
                isSelected={selectedCourse.id === course.id}
                onClick={setSelectedCourse}
              />
            ))}
          </div>
        </div>
        <AssessmentQuizButton />
        <CourseDetails selectedCourse={selectedCourse} />
        <div className="flex justify-center mt-8">
          <a href={selectedCourse.course_link}>
            <button
              type="button"
              className="bg-green-400 hover:bg-green-300 text-white font-bold py-2 px-4 rounded"
            >
              Starte den Kurs &rarr;
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CourseOverview;
