import HomepageSection from './HomepageSection';
import Experten from '../../images/Experten.png';
import Umfrage from '../../images/Umfrage.png';
import News from '../../images/news.png';
import Myth from '../../images/myth.png';

function Homepage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-12 px-12 max-w-screen-xl">
        <HomepageSection
          image={Experten}
          title="Experteninterviews"
          description="Wichtig ist das richtige Risikomanagement!"
          linkText="Zu den Experteninterviews"
          linkUrl="/interviews"
          width="32"
        />
        <HomepageSection
          image={Umfrage}
          title="Umfrage"
          description="Umfrage unter Studierenden zum Thema Kryptoassets"
          linkText="Zur Umfrage"
          linkUrl="/survey"
          width="64"
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
          title="Myth Busters"
          description="In der Welt von Krypto gibt es einige Mythen. Wir untersuchen diese und zeigen auf, was daran wahr ist und was doch nur ein Mythos bleibt."
          linkText="Zum Artikel"
          linkUrl="/mythbusters"
          width="32"
          isIconOnRight
        />
      </div>
    </div>
  );
}

export default Homepage;
