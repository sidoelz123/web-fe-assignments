import { useState } from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/Layout";


function App() {
 
  return (
    <>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="blog" element={<Blog />}/>
            <Route path="project" element={<Project />}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Layout>
        
    </>
  )
}

export default App;
