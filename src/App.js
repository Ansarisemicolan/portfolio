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
            <Route path="home" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="resume" element={<Resume />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
