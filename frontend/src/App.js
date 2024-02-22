import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Home from './Components/Home/Home'
import Footer from "./Components/Footer/Footer";
import Pricing from "./Components/Pricing/Pricing";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Signin from './Components/Signin/Signin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Components/Dashboard/Dashboard";
// import CreatePost from "./Components/CreateScript/CreateScript";
import CreateScript from "./Components/CreateScript/CreateScript";
import ForStudio from "./Components/ForStudio/ForStudio";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About /> } />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createScript" element={<CreateScript />} />
        <Route path="for-studio" element={<ForStudio />} />
      </Routes>
      <Footer />
      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
}

export default App;
