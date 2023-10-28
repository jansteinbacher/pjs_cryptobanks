import CourseIntroduction from '../../CourseIntroduction';
import BerndVideo from '../../../videos/characterBerndIntroduction.mp4';

// fill the introduction page of the beginner course with content
function CourseBeginnerIntroduction() {
  return (
    <CourseIntroduction
      courseTitle="Willkommen im Beginner-Kurs"
      courseText="Hallo und herzlich willkommen im Beginner-Kurs zu Kryptoassets! Aus der Perspeltive von Bernd, dem Geschäftsführer der fikitven Silberbach & Söhne Bank tauchst du in die Welt der Kryptoassets ein."
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
