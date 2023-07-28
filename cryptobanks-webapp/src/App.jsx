import {
  Navbar,
  Hero,
  About,
  Footer,
  CourseOverview,
  IntegrationOverview,
  MicaIntroduction,
  IntegrationOverview2,
  DecisionTreeMainPage,
  Overview,
  CourseBeginnerArticle,
  DecisionTree,
  ProjectInstructions,
  IntroductionBlockchain,
  IntroductionCryptoAssets,
  IntroductionToken,
  IntroductionTrade,
  CourseEndBeginner,
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
              <ProjectInstructions />
              <Hero />
              <DecisionTreeMainPage />
              <Overview />
              <About />
            </>
          }
        />
        <Route path="/course-overview" element={<CourseOverview />} />
        <Route
          path="/course-beginner"
          element={<CourseBeginnerArticle />}
        />

        <Route path="/decisiontreestart" element={<DecisionTreeMainPage />} />
        <Route path="/decisiontree" element={<DecisionTree />} />

        <Route path="/integrationoverview" element={<IntegrationOverview />} />
        <Route path="/micaintroduction" element={<MicaIntroduction />} />
        <Route
          path="/integrationoverview2"
          element={<IntegrationOverview2 />}
        />

        <Route
          path="/articles/IntroductionBlockchain"
          element={<IntroductionBlockchain />}
        />
        <Route
          path="/articles/IntroductionCryptoAssets"
          element={<IntroductionCryptoAssets />}
        />
        <Route
          path="/articles/IntroductionToken"
          element={<IntroductionToken />}
        />
        <Route
          path="/articles/IntroductionTrade"
          element={<IntroductionTrade />}
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
