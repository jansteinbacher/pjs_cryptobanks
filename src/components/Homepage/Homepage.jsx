import HomepageSection from './HomepageSection';
import ExpertInterview from '../../images/expertInterview.png';
import Survey from '../../images/survey.png';
import News from '../../images/news.png';
import Myth from '../../images/myth.png';

function Homepage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-12 px-12 max-w-screen-xl">
        <HomepageSection
          image={ExpertInterview}
          title="Experteninterviews"
          description="Wichtig ist das richtige Risikomanagement!"
          linkText="Zu den Experteninterviews"
          linkUrl="/crypto-assets-expert-interview"
          width="32"
        />
        <HomepageSection
          image={Survey}
          title="Umfrage"
          description="Umfrage unter Studierenden zum Thema Kryptoassets"
          linkText="Zur Umfrage"
          linkUrl="/crypto-assets-adoption"
          width="32"
          isIconOnRight
        />
        <HomepageSection
          image={News}
          title="News"
          description="Die neusten Artikel aus der Welt von Krypto!"
          linkText="Zu den News"
          linkUrl="/news"
          width="32"
        />
        <HomepageSection
          image={Myth}
          title="Fact Check"
          description="In der Welt von Krypto gibt es einige Vorurteile. Wir untersuchen diese und zeigen auf, was daran richtig ist und was man besser in einen Kontext setzen sollte."
          linkText="Zum Artikel"
          linkUrl="/factcheck"
          width="32"
          isIconOnRight
        />
      </div>
    </div>
  );
}

export default Homepage;
