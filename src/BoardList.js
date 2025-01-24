import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BoardList() {
  const [viewContent, setViewContent] = useState();

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts");
      const data = await response.json();
      setViewContent(data); // 서버에서 가져온 데이터를 상태로 설정
    } catch (error) {
      console.error("데이터 조회 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <ui className="listBox">
        {viewContent &&
          viewContent.map((board) => (
            <li key={board.idx}>
              <Link to={`/board/${board.idx}`}>{board.title}</Link>
            </li>
          ))}
      </ui>
    </div>
  );
}
