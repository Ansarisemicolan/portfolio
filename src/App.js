import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Layout from "./Component/Layout/Layout";
import Resume from "./Component/Resume/Resume";
import Contact from "./Component/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/portfolio/" element={<Layout />}>
            <Route path="/portfolio/home" element={<Home />}></Route>
            <Route path="/portfolio/about" element={<About />}></Route>
            <Route path="/portfolio/resume" element={<Resume />}></Route>
            <Route path="/portfolio/contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
