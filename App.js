import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./About";
import Home from "./Home";
import Work from "./Work";
import Navbar from "./Navbar"

function App() {
  const name = "anurag";
  
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/work" element={<Work/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
