import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Home";
import Header from "./components/Header";
import ContactForm from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/contact" element={<ContactForm />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
