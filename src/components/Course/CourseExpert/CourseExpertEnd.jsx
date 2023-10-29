import CourseEnd from '../../CourseEnd';
import CourseCompletedVideo from '../../../videos/fireworkCourseCompleted.mp4';

// fill the end page of the expert course with content
function CourseExpertEnd() {
  return (
    <CourseEnd
      summaryDownloadLink="/downloads/courseSummaries/summaryExpertCourse.pdf"
      certificateDownloadLink="/downloads/certificates/certificateExpertCourse.pdf"
      followingCourseLink="/crypto-assets-expert-interview"
      followingCourseDescription="Zu den Experteninterviews"
      celebrationVideoSource={CourseCompletedVideo}
      furtherContent={
        <div>
          <h2 className="text-2xl font-semibold mb-8">
            Zusätzliche Materialien:
          </h2>
          <div className="mb-8">
            <p className="mt-4 font-semibold">
              Lektion 1: Regulatorische Landschaft auf nationaler und
              internationaler Ebene
            </p>
            <ul className="list-disc mt-2 space-y-2 ml-6" />
          </div>
          <div className="mb-8">
            <p className="mt-4 font-semibold">
              Lektion 2: Potenzielle Kryptoasset-Diensleistungen
            </p>

            <ul className="list-disc mt-2 space-y-2 ml-6">
              <li>
                Krypto-Banken in Deutschland:{' '}
                <a
                  className="hover:underline"
                  href="https://f5crypto.com/blog/deutsche-banken-in-der-krypto-welt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://f5crypto.com/blog/deutsche-banken-in-der-krypto-welt
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <p className="mt-4 font-semibold">
              Lektion 3: Trends & Anwendung in der Gesellschaft
            </p>
            <ul className="list-disc mt-2 space-y-2 ml-6" />
          </div>
        </div>
      }
    />
  );
}

export default CourseExpertEnd;
