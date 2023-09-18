import React, { useState, useEffect } from "react";
import BeginnerVideo from "../images/beginner_video.mp4";
import IntermediateVideo from "../images/Szene_Simone.mp4";
import ExperteVideo from "../images/experte_video.mp4";
import "./CourseOverview.css";

const courses = [
  {
    id: 1,
    name: "Beginner",
    points: [
      "Bekomme ein Grundverständnis für Kryptoassets",
      "Lerne die zugrundeliegende Blockchain-Technologie kennen",
      "Erhalte einen Einblick in verschiedene Arten von Kryptoassets",
      "Setze dich mit den Herausforderungen und Zukunftsaussichten von Kryptoassets auseinander",
      "Überprüfung des Gelerneten mithilfe eines Quiz",
    ],
    duration: "2 Stunden",
    lastUpdated: "August 10, 2023",
    course_link: "/course-beginner-introduction",
    video_link: BeginnerVideo,
  },
  {
    id: 2,
    name: "Fortgeschrittener",
    points: [
      "Bekomme ein Verständnis für die regulatorische Landschaft auf nationaler und internationaler Ebene ",
      "Lernen potenzielle Kryptoasset-Diensleistungen kennen",
      "Erhalte einen Einblick in die Adoption von Kryptoassets unter Studierenden",
      "Überprüfung des Gelerneten mithilfe eines Quiz",
    ],
    duration: "3 Stunden",
    lastUpdated: "August 10, 2023",
    course_link: "/course-advanced-introduction",
    video_link: IntermediateVideo,
  },
  {
    id: 3,
    name: "Experte",
    points: [
      "Lerne die Grundlagen der Kryptoasset-Verwahrung kennen",
      "Bekomme ein Verständnis für verschiedene Arten von Verwahrlösungen",
      "Erhalte einen Einblick in die Regulatorik zur Kryptoverwahrung",
      "Setze dich mit den Herausforderungen und Zukunftsaussichten von Kryptoassets auseinander",
      "Überprüfung des Gelerneten mithilfe eines Quiz",
    ],
    duration: "5 Stunden",
    lastUpdated: "August 10, 2023",
    course_link: "/course-beginner",
    video_link: ExperteVideo,
  },
];

const CourseOverview = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [showFloatingBar, setShowFloatingBar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloatingBar(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const dismissFloatingBar = () => {
    setShowFloatingBar(false);
  };

  return (
    <div className="bg-white">
      <div className="max-w-screen-lg mx-auto mb-12 px-4 md:px-0">
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Unsere Kursübersicht
          </h1>
          <div className="intro-tooltip text-gray-600">
            Wähle einen Kurs aus, der zu deinen Bedürfnissen passt:
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
            {courses.map((course) => (
              <button
                key={course.id}
                className={`course-button ${
                  selectedCourse.id === course.id ? "selected" : ""
                } rounded-full py-2 px-4 md:px-6 font-semibold text-sm md:text-base ${
                  selectedCourse.id === course.id
                    ? "bg-green-400 text-white"
                    : "bg-gray-200 text-gray-800"
                } hover:bg-green-300 hover:text-white transition-colors duration-300 ease-in-out`}
                onClick={() => setSelectedCourse(course)}
              >
                {course.name}
              </button>
            ))}
          </div>
        </div>
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
                <span className="font-semibold">Dauer:</span>{" "}
                {selectedCourse.duration}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a href={selectedCourse.course_link}>
            <button className="bg-green-400 hover:bg-green-300 text-white font-bold py-2 px-4 rounded">
              Starte den Kurs &rarr;
            </button>
          </a>
        </div>

        {showFloatingBar && (
          <div className="fixed bottom-0 p-4 bg-green-300 text-white rounded-t-lg ">
            <p className="text-center font-bold mb-2">
              Du bist dir nicht sicher über Deinen Kenntnisstand? Mache jetzt
              ein kurzes Quiz und erhalte eine Empfehlung.
              <button
                className="ml-4 text-white "
                onClick={dismissFloatingBar}
                aria-label="Schließen"
              >
                &#x2716;
              </button>
            </p>
            <div className="flex justify-center items-center">
              <a href="/einstufungsquiz">
                <button className="bg-white text-green-400 font-bold py-2 px-4 rounded ">
                  Zum Quiz
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseOverview;
