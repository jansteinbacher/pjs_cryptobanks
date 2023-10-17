import { CourseEnd } from '../../CourseStructure';

function CourseBeginnerEnd() {
  return (
    <CourseEnd
      summaryDownloadLink="src/images/Kryptoassets.pdf"
      certificateDownloadLink="src/images/Kryptoassets.pdf"
      followingCourseLink="/course-beginner-introduction"
      followingCourseDescription="Zum Fortgeschrittenenkurs"
      furtherContent={
        <div>
          <h2 className="text-2xl font-semibold mb-8">
            Zusätzliche Materialien:
          </h2>
          <div className="mb-8">
            <p className="mt-4 font-semibold">
              Lektion 1: Grundverständnis zu Kryptoassets
            </p>
            <ul className="list-disc mt-2 space-y-2 ml-6">
              <li>
                Marktkapitalisierung von Kryptowährungen:{' '}
                <a
                  className="hover:underline"
                  href="https://www.statista.com/statistics/730876/cryptocurrency-maket-value/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.statista.com/statistics/730876/cryptocurrency-maket-value/
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <p className="mt-4 font-semibold">
              Lektion 2: Blockchain-Technologie
            </p>

            <ul className="list-disc mt-2 space-y-2 ml-6">
              <li>
                Beispiel permissioned Blockchain:{' '}
                <a
                  className="hover:underline"
                  href="https://www.swiat.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.swiat.io/
                </a>
              </li>
              <li>
                Beispiel permissionless Blockchain:{' '}
                <a
                  className="hover:underline"
                  href="https://ethereum.org/de/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ethereum.org/de/
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <p className="mt-4 font-semibold">
              Lektion 3: Arten von Kryptoassets und ihre Verbindung zu
              traditionellen Finanzprodukten
            </p>
            <ul className="list-disc mt-2 space-y-2 ml-6">
              <li>
                Kryptoassets Überblick:{' '}
                <a
                  className="hover:underline"
                  href="https://www.blockchain.com/explorer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.blockchain.com/explorer
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <p className="mt-4 font-semibold">
              Lektion 4: Herausforderungen und Zukunftsaussichten von
              Kryptoassets:
            </p>
            <ul className="list-disc mt-2 space-y-2 ml-6">
              <li>
                ss:{' '}
                <a
                  className="hover:underline"
                  href="https://triple-a.io/crypto-ownership-data/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://triple-a.io/crypto-ownership-data/
                </a>
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
}

export default CourseBeginnerEnd;
