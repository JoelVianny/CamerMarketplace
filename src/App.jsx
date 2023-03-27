import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import './App.css'


const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route  index element={<Home/>}/>
      
      </Route>
    </Routes>
    </BrowserRouter>
    </>
    )
};

export default App;

