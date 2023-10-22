import { useState } from 'react';
import CourseButton from './CourseButton';
import CourseDetails from './CourseDetails';
import BeginnerVideo from '../../videos/courseBeginnerIntroduction.mp4';
import AdvancedVideo from '../../videos/courseAdvancedIntroduction.mp4';
import ExpertVideo from '../../videos/courseExpertIntroduction.mp4';
import './CourseOverview.css';

const courses = [
  {
    id: 1,
    name: 'Beginner',
    points: [
      'Bekomme ein Grundverständnis für Kryptoassets',
      'Lerne die zugrundeliegende Blockchain-Technologie kennen',
      'Erhalte einen Einblick in verschiedene Arten von Kryptoassets',
      'Setze dich mit den Herausforderungen und Zukunftsaussichten von Kryptoassets auseinander',
      'Überprüfung des Gelerneten mithilfe eines Quiz',
    ],
    duration: '2 Stunden',
    lastUpdated: 'August 10, 2023',
    course_link: '/course-beginner-introduction',
    video_link: BeginnerVideo,
  },
  {
    id: 2,
    name: 'Fortgeschrittener',
    points: [
      'Bekomme ein Verständnis für die regulatorische Landschaft auf nationaler und internationaler Ebene ',
      'Lernen potenzielle Kryptoasset-Diensleistungen kennen',
      'Erhalte einen Einblick in die Adoption und Trends von Kryptoassets in der Gesellschaft',
      'Überprüfung des Gelerneten mithilfe eines Quiz',
    ],
    duration: '2 Stunden',
    lastUpdated: 'August 10, 2023',
    course_link: '/course-advanced-introduction',
    video_link: AdvancedVideo,
  },
  {
    id: 3,
    name: 'Experte',
    points: [
      'Lerne die Grundlagen der Kryptoasset-Verwahrung kennen',
      'Bekomme ein Verständnis für verschiedene Arten von Verwahrlösungen',
      'Erhalte einen Einblick in die Regulatorik zur Kryptoverwahrung',
      'Setze dich mit den Herausforderungen und Zukunftsaussichten der Kryptoverwahrung auseinander',
      'Überprüfung des Gelerneten mithilfe eines Quiz',
    ],
    duration: '2 Stunden',
    lastUpdated: 'August 10, 2023',
    course_link: '/course-expert-introduction',
    video_link: ExpertVideo,
  },
];

function CourseOverview() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <div className="bg-white h-screen w-screen">
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
        <div className="flex justify-center items-center space-x-8 mt-4 mb-8">
          <p>Du bist dir nicht sicher über Deinen Kenntnisstand?</p>
          <a href="/einstufungsquiz">
            <button
              type="button"
              className="bg-green-400 hover:bg-green-300 text-white font-bold py-2 px-4 rounded"
            >
              Zum Einstufungsquiz
            </button>
          </a>
        </div>
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
