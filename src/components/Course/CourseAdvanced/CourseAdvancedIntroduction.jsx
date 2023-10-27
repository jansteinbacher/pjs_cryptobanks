import CourseIntroduction from '../../CourseIntroduction';
import SimoneVideo from '../../../videos/characterSimoneIntroduction.mp4';

function CourseAdvancedIntroduction() {
  return (
    <CourseIntroduction
      courseTitle="Willkommen im Fortgeschrittenen-Kurs"
      courseText="Hallo und herzlich willkommen im Fortgeschrittenen-Kurs zu Kryptoassets!
      In diesem Kurs
      werden wir gemeinsam in die tiefere Welt der Kryptoassets eintauchen,
      und zwar aus der Perspektive von Simone, einer Projektmanagerin der
      fiktiven Silberbach & Söhne Bank."
      characterTitle="Ein Blick in die Anwendungsmöglichkeiten von Kryptoassets"
      characterText="Simone, Bernds Mitarbeiterin, arbeitet bereits seit 5 Jahren als
      Projektmanagerin bei der Bank. Bernd hat Simone die Aufgabe gegeben,
      Anwendungsmöglichkeiten von Kryptoassets als potentiell neuen
      Geschäftbereich zu evaluieren. Da Simone bereits über fundierte
      Grundkenntnisse zu Kryptoassets verfügt, machte sie sich daran, ein
      tieferes Verständnis für das wichtige Thema der Kryptoregulierung zu
      entwickeln. Sie ist sich bewusst, dass die Integration von
      Kryptoassets in die traditionelle Finanzwelt regulatorische Aspekte
      mit sich bringt, die es zu verstehen gilt."
      courseInvitation=" Lerne Simone jetzt näher kennen und entdecke gemeinsam mit ihr die
      Anwendungsmöglichkeiten von Kryptoassets:"
      videoSource={SimoneVideo}
      courseLink="/course-advanced?from=advanced-course"
    />
  );
}

export default CourseAdvancedIntroduction;
