import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Board from "./Board";

export default function BoardDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState();
  const [board, setBoard] = useState();

  useEffect(() => {
    const getBoard = async () => {
      try {
        const resp = await fetch(`http://localhost:5000/api/get/${id}`);
        if (resp.ok) {
          const data = await resp.json();
          setBoard(data);
        } else {
          console.error("게시글 찾을 수 없음");
        }
      } catch (error) {
        console.error("데이터 가져오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    getBoard();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Board
          id={board.id}
          list_name={board.list_name}
          content={board.content}
          user_name={board.user_name}
        />
      )}
    </div>
  );
}
