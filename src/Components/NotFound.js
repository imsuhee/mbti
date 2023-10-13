import React from "react";
import "../style/NotFound.css";
import { Link } from "react-router-dom";
import Error from "../Images/NotFound.png";

function NotFound() {
  return (
    <div className="Errorbox">
      <Link to={"./"}>
        <img src={Error} alt="메인화면 가기" />
      </Link>
      <div className="notfound">
        <h3>찾을 수 없는 페이지 입니다.</h3>
        <h3>요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨습니다.</h3>
      </div>
    </div>
  );
}
export default NotFound;
