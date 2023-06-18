import {
  Navbar,
  Hero,
  About,
  Introduction,
  Footer,
  Introblockchain,
  IntegrationOverview,
  MicaIntroduction,
  IntegrationOverview2,
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
              <About />
            </>
          }
        />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/introblockchain" element={<Introblockchain />} />
        <Route path="/integrationoverview" element={<IntegrationOverview />} />
        <Route path="/micaintroduction" element={<MicaIntroduction />} />
        <Route
          path="/integrationoverview2"
          element={<IntegrationOverview2 />}
        />
      </Routes>
    </Router>

    <Footer />
  </div>
);

export default App;
