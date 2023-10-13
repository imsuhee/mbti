import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/Main";
import QuestionPage from "./Components/Question";
import Loading from "./Components/Loading";
import NotFound from "./Components/NotFound";
import ResultnPage from "./Components/Results";
import SharePage from "./Components/Share";

function App() {
  const [loading, setLoading] = useState(true);

  // 앱이 로딩되고 나서 로딩 상태를 변경하여 로딩 페이지가 표시되는 시간을 제어합니다.
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 3초 동안 로딩 페이지를 표시
  }, []);

  return (
    <BrowserRouter>
      <div id="body">
        {/*로딩되는 동안 보여주는 로딩페이지*/}
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            {/*메인페이지*/}
            <Route path="/" element={<MainPage />} />

            {/*질문페이지*/}
            <Route path="/question" element={<QuestionPage />} />

            {/*결과 페이지*/}
            <Route path="/results" element={<ResultnPage />} />

            {/*결과 페이지*/}
            <Route path="/Share" element={<SharePage />} />

            {/*NotFound 페이지*/}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
