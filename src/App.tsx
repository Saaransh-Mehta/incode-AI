import { BrowserRouter, Routes,Route } from "react-router-dom"
import { NavbarDemo } from "./components/Navbar"
import Home from "./screens/Home"
import { useEffect, useState } from "react";
import Login from "./screens/Login";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

 
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <BrowserRouter>
     <NavbarDemo toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
