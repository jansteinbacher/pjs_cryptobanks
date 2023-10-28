import FeatureCard from './FeatureCard';
import CourseIcon from '../../images/courseIcon.png';
import IndividuellIcon from '../../images/Individuell_Icon.png';
import GlossarIcon from '../../images/Glossar_Icon.png';
import Heroimage from '../../images/heroimage.jpg';
// hero element with headline and image, gradient background
// under it are the cards from the FeatureCard component 

function Hero() {
  return (
    <div className="bg-white">
      <div
        className="bg-gradient-to-r from-[#262369] via-[#090979] to-[#611ab9] relative"
        style={{
          minHeight: '60vh',
        }}
      >
        <div className="md:flex items-center justify-content">
          <div className="md:w-1/2 p-8">
            <div className="text-left max-w-xl mx-auto">
              <h1 className="text-2xl md:text-5xl font-bold text-gray-200 mb-4 tracking-tight">
                Kryptoinformationen für Mitarbeitende im Bankenwesen
              </h1>
              <p className="text-2xl text-gray-300">
                Werde ein{' '}
                <span className="text-[#00DFA2] font-bold">Krypto-Experte</span>
                ! Wähle aus verschiedenen Lernmöglichkeiten!
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <img
              src={Heroimage}
              alt="hero about cryptobanks"
              className="rounded-3xl max-h-[20rem] md:max-h-[32rem]"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12 px-12 max-w-screen-xl">
        <div>
          <p className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Wie möchtest du deinen Weg beschreiten?
          </p>
          <div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-3">
            {/* Column 1 */}
            <FeatureCard
              image={CourseIcon}
              title="Kursübersicht"
              description="Absolviere vorgefertigte Kurse von Beginner bis Experte."
              linkText="Zu den Kursen"
              linkUrl="/course-overview"
            />

            {/* Column 2 */}
            <FeatureCard
              image={IndividuellIcon}
              title="Individueller Lernplan"
              description="Erstelle deinen eigenen Kurs aus verschiedenen Lerneinheiten!"
              linkText="Kurs erstellen"
              linkUrl="/decisiontree?from=individual-course"
            />

            {/* Column 3 */}
            <FeatureCard
              image={GlossarIcon}
              title="Lerneinheiten"
              description="Erhalte direkten Zugriff auf verschiedene Lerneinheiten!"
              linkText="Zur Übersicht"
              linkUrl="/overview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
