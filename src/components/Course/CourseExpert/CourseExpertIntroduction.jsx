import CourseIntroduction from '../../CourseIntroduction';
import TobiasVideo from '../../../videos/characterTobiasIntroduction.mp4';

// fill the introduction page of the expert course with content
function CourseExpertIntroduction() {
  return (
    <CourseIntroduction
      courseTitle="Willkommen im Experten-Kurs"
      courseText="Hallo und herzlich willkommen im Beginner-Kurs zu Kryptoassets! In
      diesem Abschnitt werden wir uns mit einem konkreten Anwendungsfall
      befassen, der die Grundlage für viele weitere spannende Aspekte bildet:
      die Kryptoasset-Verwahrung. In diesem Kurs werden wir gemeinsam in die
      tiefere Welt der Kryptoassets eintauchen, und zwar aus der Perspektive
      von Tobias, einem Produktmanager der fiktiven Silberbach & Söhne Bank."
      characterTitle="Ein Blick in die Kryptoassset-Verwahrung"
      characterText="Tobias ist seit mehreren Jahren als Produktmanager in der Bank tätig.
      Simone hat ihm die spannende Aufgabe übertragen, die
      Kryptoasset-Verwahrung als ein neues Finanzprodukt in das Bankensystem
      zu integrieren. Aufgrund von Tobias bereits fundierten
      Grundkenntnissen im Bereich Kryptoassets, hat er sich entschlossen,
      sein Verständnis für die Kryptoasset-Verwahrung noch weiter zu
      vertiefen."
      courseInvitation="Lerne Tobias jetzt näher kennen und entdecke gemeinsam mit ihm die
      Kryptoasset-Verwahrung:"
      videoSource={TobiasVideo}
      courseLink="/course-expert?from=expert-course"
    />
  );
}

export default CourseExpertIntroduction;
