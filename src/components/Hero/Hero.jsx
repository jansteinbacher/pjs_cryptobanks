import FeatureCard from './FeatureCard';
import KursIcon from '../../images/Kurs_Icon.png';
import IndividuellIcon from '../../images/Individuell_Icon.png';
import Header from '../../images/header.jpg';
import GlossarIcon from '../../images/Glossar_Icon.png';

function Hero() {
  return (
    <div className="bg-white">
      <div
        className="bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${Header})`,
          minHeight: '60vh',
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white">
          <div
            className="text-left mb-8 max-w-xl mx-auto"
            style={{ marginLeft: '20%' }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-gray-200 mb-4 tracking-tight">
              Kryptoinformationen für Mitarbeitende im Bankenwesen
            </h1>
            <p className="text-2xl text-gray-300">
              Werde ein{' '}
              <span className="text-[#00DFA2] font-bold">Krypto-Experte</span>!
              Wähle aus verschiedenen Lernmöglichkeiten!
            </p>
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
              image={KursIcon}
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
              linkUrl="/decisiontree"
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
