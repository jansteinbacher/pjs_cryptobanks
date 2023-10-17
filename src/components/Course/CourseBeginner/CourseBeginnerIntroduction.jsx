import { CourseIntroduction } from '../../CourseStructure';
import BerndVideo from '../../../videos/characterBerndIntroduction.mp4';

function CourseBeginnerIntroduction() {
  return (
    <CourseIntroduction
      courseTitle="Willkommen im Beginner-Kurs"
      courseText="Hallo und herzlich willkommen im Beginner-Kurs zu Kryptoassets! Du hast dich für diesen Kurs entschieden, da du ein grundlegendes Verständnis zum Thema Kryptoassets erhalten möchtest? Zudem interessierst du dich für die Einbindung von Kryptoassets in traditionelle Finanzprodukte und möchtest Kundenbedürfnisse im Bereich Kryptoassets verstehen?..."
      characterTitle="Bernds Entdeckung der Krypto-Welt: Ein Blick über den Horizont der
      Tradition"
      characterText="Bernd ist seit über zwei Jahrzehnten ein fester Bestandteil der
      traditionellen, lokalen Silberbach & Söhne Bank. Er kennt die Welt der
      klassischen Finanzprodukte in- und auswendig. Doch tief in ihm regt
      sich Neugier, als er von der aufkommenden Welt der Kryptoassets hört.
      Ein Bereich, der weit über seine bisherigen Kenntnisse hinausgeht und
      doch das Potenzial hat, die Finanzlandschaft zu verändern."
      courseInvitation="Lerne Bernd jetzt näher kennen und entdecke gemeinsam mit ihm die Welt
      der Kryptoassets:"
      videoSource={BerndVideo}
      courseLink="/course-beginner?from=beginner-course"
    />
  );
}

export default CourseBeginnerIntroduction;
