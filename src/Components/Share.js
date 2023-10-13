import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Share.css"; // 스타일 파일 경로를 확인하세요.
import { results } from "./Date.js";
export function Share() {
  const navigate = useNavigate();
  const [isSupportedShare, setIsSupportedShare] = useState(false);
  const [isSupportedClipboard, setIsSupportedClipboard] = useState(false);
  const [isSupportedClipboardCommand, setIsSupportedClipboardCommand] =
    useState(false);

  useEffect(() => {
    setIsSupportedShare(!!navigator?.share);
    setIsSupportedClipboard(!!navigator?.clipboard);
    setIsSupportedClipboardCommand(!!document.queryCommandSupported?.("copy"));
  }, []);

  useEffect(() => {
    // 모든 기능이 없는 경우 공유 버튼 제거!
    const btnEl = document.querySelector(".share-button"); // 클래스 이름 수정
    if (btnEl) {
      // 엘리먼트를 찾았는지 확인
      if (
        !isSupportedShare &&
        !isSupportedClipboard &&
        !isSupportedClipboardCommand
      ) {
        btnEl.style.display = "none";
      }
    }
  }, [isSupportedShare, isSupportedClipboard, isSupportedClipboardCommand]);

  async function startNativeShare() {
    try {
      await navigator.share({
        title: "내 안에 숨어있는 직업캐 찾기!",
        text: "누구나 찰떡인 직업이 있어요! 내 안에 숨어있는 직업캐를 찾아보세요!",
        url: window.location.href, // 현재 페이지 주소!
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function copyToClipboard() {
    try {
      if (isSupportedClipboardCommand) {
        const textarea = document.createElement("textarea");
        textarea.classList.add("copy-textarea"); // CSS 클래스 추가
        textarea.value = window.location.href;

        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("링크를 복사했어요 ><");
      } else if (isSupportedClipboard) {
        await navigator.clipboard.writeText(window.location.href);
        alert("링크를 복사했어요 ><");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  // 결과 페이지로 이동!
  const showResultPage = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="share-button-container">
        <button className="share-button" onClick={showResultPage}>
          다시하기
        </button>
        <button
          className={isSupportedShare ? "share-button" : "copy-button"}
          onClick={isSupportedShare ? startNativeShare : copyToClipboard}
        >
          공유하기
        </button>
      </div>
    </div>
  );
}

export default Share;
