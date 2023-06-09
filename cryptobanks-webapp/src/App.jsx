import { Navbar, Hero, About, Introduction, Footer, Introblockchain} from "./components";
import {BrowserRouter as Router, Route, Routes} from'react-router-dom';

const App = () => (
  

  <div >
    
      <Navbar />
      
      <Router>
        <Routes>
          <Route path='/' element={<><Hero /><About /></>} />
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/introblockchain' element={<Introblockchain />} />
          
        </Routes>
      </Router>

      <Footer />
    
    
  </div>
);

export default App;
