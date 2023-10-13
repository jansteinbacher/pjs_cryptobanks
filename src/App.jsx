import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
  Navbar,
  Hero,
  About,
  Startpage,
  Footer,
  CourseOverview,
  Overview,
  CourseBeginnerArticle,
  DecisionTree,
  CourseBeginnerEnd,
  Einstufungsquiz,
  News,
  Myths,
  CourseBeginnerIntroduction,
  CourseAdvancedArticle,
  CourseAdvancedIntroduction,
  CourseAdvancedEnd,
  IntroductionCryptoAssetsArticle,
  IntroductionBlockchainArticle,
  CryptoAssetServicesArticle,
  CryptoAssetsRegulationArticle,
  TypesOfCryptoAssetsArticle,
  OpportunitiesAndChallengesCryptoAssetsArticle,
  Survey,
  Interviews,
  CourseExpertArticle,
  CourseExpertIntroduction,
  CourseExpertEnd,
  CryptoCustodyApplicationAreasArticle,
  CryptoCustodyChallengesArticle,
  CryptoCustodyRegulationArticle,
  IntroductionCryptoCustodyArticle,
} from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Startpage />
                <About />
              </>
            }
          />
          <Route path="/course-overview" element={<CourseOverview />} />
          <Route path="/course-beginner" element={<CourseBeginnerArticle />} />
          <Route path="/course-advanced" element={<CourseAdvancedArticle />} />
          <Route path="/course-expert" element={<CourseExpertArticle />} />
          <Route path="/decisiontree" element={<DecisionTree />} />
          <Route
            path="/introduction-crypto-assets"
            element={<IntroductionCryptoAssetsArticle />}
          />
          <Route
            path="/introduction-blockchain"
            element={<IntroductionBlockchainArticle />}
          />
          <Route
            path="/crypto-asset-services"
            element={<CryptoAssetServicesArticle />}
          />
          <Route
            path="/crypto-asset-regulation"
            element={<CryptoAssetsRegulationArticle />}
          />
          <Route
            path="/types-of-crypto-assets"
            element={<TypesOfCryptoAssetsArticle />}
          />
          <Route
            path="/opportunities-challenges-crypto-assets"
            element={<OpportunitiesAndChallengesCryptoAssetsArticle />}
          />
          <Route
            path="/crypto-custody-application-areas"
            element={<CryptoCustodyApplicationAreasArticle />}
          />
          <Route
            path="/crypto-custody-challenges"
            element={<CryptoCustodyChallengesArticle />}
          />
          <Route
            path="/crypto-custody-regulation"
            element={<CryptoCustodyRegulationArticle />}
          />
          <Route
            path="/introduction-crypto-custody"
            element={<IntroductionCryptoCustodyArticle />}
          />
          <Route path="/mythbusters" element={<Myths />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/news" element={<News />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/einstufungsquiz" element={<Einstufungsquiz />} />
          <Route
            path="/course-beginner-introduction"
            element={<CourseBeginnerIntroduction />}
          />
          <Route
            path="/course-advanced-introduction"
            element={<CourseAdvancedIntroduction />}
          />
          <Route
            path="/articles/course-advanced-end"
            element={<CourseAdvancedEnd />}
          />
          <Route
            path="/course-expert-introduction"
            element={<CourseExpertIntroduction />}
          />
          <Route
            path="/articles/course-expert-end"
            element={<CourseExpertEnd />}
          />
          <Route
            path="/articles/CourseBeginnerEnd"
            element={<CourseBeginnerEnd />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
