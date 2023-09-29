import {
  Navbar,
  Hero,
  About,
  Startpage,
  Footer,
  CourseOverview,
  IntegrationOverview,
  MicaIntroduction,
  IntegrationOverview2,
  Overview,
  CourseBeginnerArticle,
  DecisionTree,
  CourseEndBeginner,
  DragAndDrop,
  Einstufungsquiz,
  News,
  Myths,
  CourseBeginnerIntroduction,
  CourseAdvancedArticle,
  CourseAdvancedIntroduction,
  CourseAdvancedEnd,
  CourseCryptoAssets,
  CourseBlockchain,
  CourseCryptoAssetServices,
  CourseCryptoAssetsRegulation,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

        <Route path="/decisiontree" element={<DecisionTree />} />
        <Route path="/course-cryptoassets" element={<CourseCryptoAssets />} />
        <Route path="/course-blockchain" element={<CourseBlockchain />} />
        <Route
          path="/course-cryptoassetservices"
          element={<CourseCryptoAssetServices />}
        />
        <Route
          path="/course-cryptoassetsregulation"
          element={<CourseCryptoAssetsRegulation />}
        />

        <Route path="/integrationoverview" element={<IntegrationOverview />} />
        <Route path="/micaintroduction" element={<MicaIntroduction />} />
        <Route
          path="/integrationoverview2"
          element={<IntegrationOverview2 />}
        />

        <Route path="/dnd" element={<DragAndDrop />} />

        <Route path="/myths" element={<Myths />} />

        <Route path="/overview" element={<Overview />} />

        <Route path="/news" element={<News />} />

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
