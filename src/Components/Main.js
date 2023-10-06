import React from "react";
import { Link } from "react-router-dom";
import "../style/Main.css";

function Main() {
  return (
    <div>
      <div className="main-box">
        <div className="text">MBTI TEST</div>
        <div className="box">
          <div className="menu-item">
            <span>▶</span>
            <Link to="/Question">START</Link>
          </div>

          <div className="menu-item">
            <span>▶</span>
            <button className="link">공유</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
