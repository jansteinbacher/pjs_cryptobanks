import React, { useState} from 'react';
import BeginnerVideo from '../images/beginner_video.mp4'; 
import IntermediateVideo from '../images/fortgeschrittener_video.mp4'; 
import ExperteVideo from '../images/experte_video.mp4'; 
import './CourseOverview.css'


const courses = [
  {
    id: 1,
    name: 'Anfänger',
    points: [
      'Bekomme ein Grundverständnis für Kryptoassets',
      'Lerne die Vorteile gegenüber traditionelle Finanzprodukte kennen',
      'Erhalte einen Einblick in die Strategische Bedeutung für die Wettbewerbsfähigkeit deiner Bank',
      'Erhalte einen Einblick zur Adaption in der Gesellschaft über eine Umfrage',
      'Überprüfung des Gelerneten mithilfe eines Quiz',
    ],
    duration: '2 Stunden',
    lastUpdated: 'July 1, 2023',
    course_link: '/course-beginner',
    video_link: BeginnerVideo,
  },
  {
    id: 2,
    name: 'Fortgeschrittener',
    points: [
      'Erhalte tiefe Einblicke zu den Geschäftsmodellen über strukturierte Experteninterviews',
      'Geschäftsmodelle',
      'Option 3',
    ],
    duration: '3 Stunden',
    lastUpdated: 'July 1, 2023',
    course_link: '/course-beginner',
    video_link: IntermediateVideo,
  },
  {
    id: 3,
    name: 'Experte',
    points: [
      'Einblicke in die aktuelle Regulatorik',
      'Einblicke in technische Herausforderungen',
      'Verständnis für aktuelle Marktteilnehmer über Fallstudien',
    ],
    duration: '5 Stunden',
    lastUpdated: 'July 1, 2023',
    course_link: '/course-beginner',
    video_link: ExperteVideo,
  },
];

const CourseOverview = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  



  return (
    <div className="max-w-screen-lg mx-auto mb-12">
      {/* Container for the h1 and course buttons */}
      <div className="flex flex-col items-center justify-center space-y-4 mb-8">
        <h1 className="text-2xl font-bold text-center">Unsere vorgefertigten Kurse</h1>
        {/* Show the introductory tooltip initially */}
        <div
          className={`intro-tooltip`}
        >
          Wähle einen Kurs aus, der zu deinen Bedürfnissen passt:
        </div>
        <div className="flex items-center justify-center space-x-4">
          {courses.map((course) => (
            <button
              key={course.id}
              className={`course-button ${
                selectedCourse.id === course.id ? 'selected' : ''
              } rounded-full py-2 px-4 font-semibold ${
                selectedCourse.id === course.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              } hover:bg-blue-600 hover:text-white`}
              onClick={() => setSelectedCourse(course)}
            >
              {course.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{selectedCourse.name}</h2>
          <ul className="list-disc list-inside text-gray-700">
            {selectedCourse.points.map((point) => (
              <li key={point} className="mb-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className='mb-4 font-bold text-xl'>Was Du in diesem Video lernen wirst:</h2>
          <video key={selectedCourse.id} controls className="w-full h-64 rounded-lg">
            <source src={selectedCourse.video_link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mt-4 text-gray-700">
            <p>
              <span className="font-semibold">Dauer:</span> {selectedCourse.duration}
            </p>
           
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a href={selectedCourse.course_link}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out">
          Starte den Kurs
        </button>
        </a>
      </div>
    </div>
  );
};

export default CourseOverview;