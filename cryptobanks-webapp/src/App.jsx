import { Navbar, Hero} from "./components";
import {BrowserRouter as Router, Route, Routes} from'react-router-dom';

const App = () => (
  

  <div >
    
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Hero />} />
          
        </Routes>
      </Router>
    
    
  </div>
);

export default App;
