import React from "react";
import { Link } from "react-router-dom";
import "../style/Main.css";
import { Helmet } from "react-helmet"; // React Helmet 라이브러리 추가

function Main() {
  return (
    <div>
      {/* Helmet을 사용하여 메타태그 정보 추가 */}
      <Helmet>
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="나의 MBTI 테스트" />
        <meta property="og:title" content="나의 MBTI는!?" />
        <meta property="og:description" content="나의 MBTI를 확인해보아요!!" />
        <meta property="og:image" content="/images/thumbnail.jpg" />
        <meta
          property="og:url"
          content="https://prismatic-monstera-4c9d6a.netlify.app/"
        />

        {/* Twitter Cards */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="나의 MBTI 테스트" />
        <meta property="twitter:title" content="나의 MBTI는!?" />
        <meta
          property="twitter:description"
          content="나의 MBTI를 확인해보아요!!"
        />
        <meta property="twitter:image" content="/images/thumbnail.jpg" />
        <meta
          property="twitter:url"
          content="https://prismatic-monstera-4c9d6a.netlify.app/"
        />
      </Helmet>
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
