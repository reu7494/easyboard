import React, { useEffect, useState } from "react";
import BoardList from "./BoardList";

export default function BoardDetail() {
  const [board, setBoard] = useState();
  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/get");
      const data = await response.json();
      setBoard(data); // 서버에서 가져온 데이터를 상태로 설정
    } catch (error) {
      console.error("데이터 조회 중 오류 발생:", error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <BoardList
        id={BoardList.id}
        title={BoardList.list_name}
        contents={BoardList.contents}
        createdBy={BoardList.user_name}
      />
    </div>
  );
}
