import React from "react";
import DesktopThree from "pages/DesktopThree";
import DesktopTwo from "pages/DesktopTwo";
import DesktopOne from "pages/DesktopOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktopone" element={<DesktopOne />} />
        <Route path="/desktoptwo" element={<DesktopTwo />} />
        <Route path="/desktopthree" element={<DesktopThree />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
