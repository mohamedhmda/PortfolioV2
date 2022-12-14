import React from "react";
// routing
import { Routes, Route, useLocation } from 'react-router-dom';
// motion animation
import { AnimatePresence } from 'framer-motion';
//component
import Home from "../../pages/home/home"
import Resume from "../../pages/resume/resume";
import Projects from "../../pages/projects/projects";
import Contact from "../../pages/contact/contact";
import Blogs from "../../pages/blog/blog";
import NotFound from "../../pages/error/notfound"
import Article from "../../pages/blog/article";


const Navigation = () => {
    const location = useLocation();
  return (
    <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/article/:title" element={<Article />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </AnimatePresence>
  )
}

export default Navigation