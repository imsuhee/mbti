import React from "react";
import { Link } from "react-router-dom";
import "../style/Question.css";

function Question() {
  return (
    <div>
      <div className="main-box1">
        <div className="text1">
          연인과 길을 걷던 중 연인의 친구를 만난다면 나는?
        </div>
        <div className="box1">
          <div className="menu-item">
            <span>▶</span>
            <Link to="/Question">
              내 연인의 친구? 자연스럽게 인사하며 대화한다.
            </Link>
          </div>

          <div className="menu-item">
            <span>▶</span>
            <button className="link">
              내 연인의 친구? 인사 후 가만히 있는다.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Question;
