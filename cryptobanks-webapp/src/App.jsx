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
  IntroductionBlockchain,
  IntroductionCryptoAssets,
  IntroductionToken,
  IntroductionTrade,
  CourseEndBeginner,
  DragAndDrop,
  Einstufungsquiz,
  News,
  Myths,
  CourseBeginnerIntroduction,
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

        <Route path="/decisiontree" element={<DecisionTree />} />

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
