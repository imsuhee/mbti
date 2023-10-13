import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "./Date.js";
import "../style/Question.css";

function Question() {
  const navigate = useNavigate();
  const [currentNumber, setCurrentNumber] = useState(0);
  const [mbti, setMbti] = useState("");
  const question = questions[currentNumber];

  const nextQuestion = (choiceNumber) => {
    //  질문이 아직 더 남았는지 확인
    if (currentNumber < questions.length - 1) {
      const selectedChoice = question.choices[choiceNumber].value;
      setMbti(mbti + selectedChoice);
      setCurrentNumber(currentNumber + 1);
    } else {
      showResultPage();
    }
  };

  // 결과 페이지로 이동!
  const showResultPage = () => {
    navigate("/results");
  };

  return (
    <div>
      <div className="main-box1">
        <div className="text1">{question.question}</div>
        {question.choices.map((choice, index) => (
          <div
            key={index}
            className="menu-item1"
            onClick={() => nextQuestion(index)}
          >
            <span>▶</span> <div className="link1">{choice.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
