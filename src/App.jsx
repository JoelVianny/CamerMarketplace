import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import './App.css'
import Contact from "./pages/Contact";
import About from "./pages/About";
import Search from "./pages/Search";


const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route  index element={<Search/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
      </Route>
    </Routes>
    </BrowserRouter>
    </>
    )
};

export default App;

