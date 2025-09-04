import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginScreen } from "./pages/LoginScreen";
import { SignupScreen } from "./pages/SignupScreen";
import { Profile } from "./pages/Profile";
import { LandingScreen } from "./pages/LandingScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
