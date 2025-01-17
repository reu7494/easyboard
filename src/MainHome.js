import React from "react";
import { Link } from "react-router-dom";

export default function MainHome() {
  return (
    <div>
      <Link to="/">메인</Link>
      <Link to="board">게시판</Link>
      <Link to="write">글쓰기</Link>
    </div>
  );
}
