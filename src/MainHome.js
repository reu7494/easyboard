import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BoardList from "./BoardList";

export default function MainHome() {
  const navigate = useNavigate();

  const moveToWrite = () => {
    navigate("/write");
  };
  return (
    <div>
      <Link to="/">홈</Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      <button onClick={moveToWrite}>글쓰기</button>
      <hr />
      <BoardList />
    </div>
  );
}
