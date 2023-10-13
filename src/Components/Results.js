import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // React Router를 사용하는 경우
import Loading from "./Loading";
import { message } from "antd";
import { results } from "./Date.js";
import SharePage from "./Share.js";

function ResultPage() {
  const { mbti } = useParams(); // React Router의 useParams를 사용하여 MBTI 값을 가져옴
  const [result, setResult] = useState(null);

  useEffect(() => {
    // 결과 데이터를 가져오는 비동기 작업 (API 요청 또는 데이터 로딩)
    // 이 부분은 데이터를 어떻게 가져올 것인지에 따라 다를 수 있음

    // Date.js에서 results 배열에서 MBTI 유형에 해당하는 데이터를 찾아내기
    const selectedResult = results.find((item) => item.mbti === mbti);

    if (selectedResult) {
      setResult(selectedResult);
    } else {
      // MBTI 유형에 해당하는 데이터를 찾지 못한 경우 에러 처리
      message.error("해당 MBTI 유형에 대한 결과를 찾을 수 없습니다.");
    }
  }, [mbti]);

  return (
    <div>
      {result ? (
        <div>
          <h1>{result.title}</h1>
          <img src={result.character} alt="Character" />
          <div>{result.results[0]}</div>
          <div>{result.jobs[0]}</div>
          <div>{result.jobs[1]}</div>
        </div>
      ) : (
        <p>
          <Loading />
        </p>
      )}
      <div>
        <SharePage />
      </div>
    </div>
  );
}

export default ResultPage;
