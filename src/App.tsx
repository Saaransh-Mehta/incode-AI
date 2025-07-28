import { BrowserRouter, Routes,Route } from "react-router-dom"

import Home from "./screens/Home"
import Login from "./screens/Login";
import AiScreen from "./screens/AiScreen";
import AIcode from "./screens/AIcode";

const App = () => {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/ai" element={<AiScreen/>}/>
      <Route path="/generate" element={<AIcode/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
