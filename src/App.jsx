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
  CourseEndBeginner,
  Einstufungsquiz,
  News,
  Myths,
  CourseBeginnerIntroduction,
  CourseAdvancedArticle,
  CourseAdvancedIntroduction,
  CourseAdvancedEnd,
  IntroductionCryptoAssets,
  IntroductionBlockchain,
  CryptoAssetServices,
  CryptoAssetRegulation,
  TypesOfCryptoAssets,
  OpportunitiesAndChallengesCryptoAssets,
  Survey,
  Interviews,
  CourseExpertArticle,
  CourseExpertIntroduction,
  CourseExpertEnd,
} from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
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
          element={<IntroductionCryptoAssets />}
        />
        <Route
          path="/introduction-blockchain"
          element={<IntroductionBlockchain />}
        />
        <Route
          path="/crypto-asset-services"
          element={<CryptoAssetServices />}
        />
        <Route
          path="/crypto-asset-regulation"
          element={<CryptoAssetRegulation />}
        />
        <Route
          path="/types-of-crypto-assets"
          element={<TypesOfCryptoAssets />}
        />
        <Route
          path="/opportunities-challenges-crypto-assets"
          element={<OpportunitiesAndChallengesCryptoAssets />}
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
          path="/articles/CourseEndBeginner"
          element={
            <>
              <CourseEndBeginner />
            </>
          }
        />
      </Routes>
    </Router>

    <Footer />
  </div>
);

export default App;
