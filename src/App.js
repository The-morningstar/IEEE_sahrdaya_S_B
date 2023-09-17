import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Altair from "./Pages/Altair/Altair"; // Import the Altair component

function App() {
  return (
    <BrowserRouter>
      {/* Define your routes within the Routes component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/altair"  element={<Altair />} /> {/* Define the Altair route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
