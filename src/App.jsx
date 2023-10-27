import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
  NavigationBar,
  Hero,
  About,
  Homepage,
  Footer,
  CourseOverview,
  Overview,
  CourseBeginnerModule,
  IndividualLearningPlanComponent,
  CourseBeginnerEnd,
  AssessmentQuiz,
  News,
  Myths,
  CourseBeginnerIntroduction,
  CourseAdvancedModule,
  CourseAdvancedIntroduction,
  CourseAdvancedEnd,
  IntroductionCryptoAssetsModule,
  IntroductionBlockchainModule,
  CryptoAssetServicesModule,
  CryptoAssetsRegulationModule,
  TypesOfCryptoAssetsModule,
  OpportunitiesAndChallengesCryptoAssetsModule,
  CourseExpertModule,
  CourseExpertIntroduction,
  CourseExpertEnd,
  CryptoCustodyApplicationAreasModule,
  CryptoCustodyChallengesModule,
  CryptoCustodyRegulationModule,
  IntroductionCryptoCustodyModule,
  CryptoAssetsAdoptionModule,
  CryptoAssetsExpertInterviewModule,
  IndividualLearningPlanEnd,
} from './components';

function App() {
  return (
    <div>
      <NavigationBar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Homepage />
                <About />
              </>
            }
          />
          <Route path="/course-overview" element={<CourseOverview />} />
          <Route path="/course-beginner" element={<CourseBeginnerModule />} />
          <Route path="/course-advanced" element={<CourseAdvancedModule />} />
          <Route path="/course-expert" element={<CourseExpertModule />} />
          <Route
            path="/decisiontree"
            element={<IndividualLearningPlanComponent />}
          />
          <Route
            path="/introduction-crypto-assets"
            element={<IntroductionCryptoAssetsModule />}
          />
          <Route
            path="/introduction-blockchain"
            element={<IntroductionBlockchainModule />}
          />
          <Route
            path="/crypto-asset-services"
            element={<CryptoAssetServicesModule />}
          />
          <Route
            path="/crypto-asset-regulation"
            element={<CryptoAssetsRegulationModule />}
          />
          <Route
            path="/types-of-crypto-assets"
            element={<TypesOfCryptoAssetsModule />}
          />
          <Route
            path="/opportunities-challenges-crypto-assets"
            element={<OpportunitiesAndChallengesCryptoAssetsModule />}
          />
          <Route
            path="/crypto-custody-application-areas"
            element={<CryptoCustodyApplicationAreasModule />}
          />
          <Route
            path="/crypto-custody-challenges"
            element={<CryptoCustodyChallengesModule />}
          />
          <Route
            path="/crypto-custody-regulation"
            element={<CryptoCustodyRegulationModule />}
          />
          <Route
            path="/introduction-crypto-custody"
            element={<IntroductionCryptoCustodyModule />}
          />
          <Route
            path="/crypto-assets-adoption"
            element={<CryptoAssetsAdoptionModule />}
          />
          <Route
            path="/crypto-assets-expert-interview"
            element={<CryptoAssetsExpertInterviewModule />}
          />
          <Route path="/factcheck" element={<Myths />} />

          <Route path="/overview" element={<Overview />} />
          <Route path="/news" element={<News />} />

          <Route path="/assessment-quiz" element={<AssessmentQuiz />} />
          <Route
            path="/course-beginner-introduction"
            element={<CourseBeginnerIntroduction />}
          />
          <Route
            path="/course-advanced-introduction"
            element={<CourseAdvancedIntroduction />}
          />

          <Route
            path="/course-expert-introduction"
            element={<CourseExpertIntroduction />}
          />
          <Route path="/course-expert-end" element={<CourseExpertEnd />} />
          <Route path="/course-beginner-end" element={<CourseBeginnerEnd />} />
          <Route path="/course-advanced-end" element={<CourseAdvancedEnd />} />

          <Route
            path="/individual-course-end"
            element={<IndividualLearningPlanEnd />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
