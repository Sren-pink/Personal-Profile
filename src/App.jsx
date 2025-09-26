
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Layout from "./components/Layout";
import ProjectDes from "./components/project/ProjectDes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects/:id" element={<ProjectDes />} />
          <Route path="*" element={<div style={{ padding: 24 }}>Not found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
