import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import Prosject from './Component/Pages/Prosject';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/prosject' exact element={<Prosject/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
      </Router>

    </>

  );
}

export default App;
