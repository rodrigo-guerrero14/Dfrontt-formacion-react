import './App.css';
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
