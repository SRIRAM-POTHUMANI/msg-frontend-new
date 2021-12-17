import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./ChatPage";
import Login from "./Login";
import RegisterUser from "./RegisterUser";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ChatPage />} />
        </Routes>
        <Routes>
          <Route path="/reg" element={<RegisterUser />} />
        </Routes>
        <Routes>
          <Route path="/chat" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
