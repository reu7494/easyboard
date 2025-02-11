import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Board from "./Board";

export default function BoardDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState();
  const [board, setBoard] = useState();
  const getBoard = async () => {
    const resp = await fetch("http://localhost:5000/api/posts");
    if (resp.ok) {
      const data = await resp.json();
      setBoard(data);
      setLoading(false);
    }
  };
  useEffect(() => {
    getBoard();
  }, []);
  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Board
          id={board.id}
          list_name={board.list_name}
          contents={board.contents}
          user_name={board.user_name}
        />
      )}
    </div>
  );
}
