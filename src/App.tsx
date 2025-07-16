import { BrowserRouter, Routes,Route } from "react-router-dom"
import { NavbarDemo } from "./components/Navbar"
import Home from "./screens/Home"
import { useEffect, useState } from "react";
import Login from "./screens/Login";
import AiScreen from "./screens/AiScreen";

const App = () => {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/ai" element={<AiScreen/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
