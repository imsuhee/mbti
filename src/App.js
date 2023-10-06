import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/Main";
import QuestionPage from "./Components/Question";

function App() {
  return (
    <BrowserRouter>
      <div id="body">
        <Routes>
          {/*메인페이지*/}
          <Route path="/" element={<MainPage />} />

          {/*질문페이지*/}
          <Route path="/question" element={<QuestionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
