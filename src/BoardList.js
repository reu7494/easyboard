import React from "react";

export default function BoardList({ item, index }) {
  return (
    <div>
      <div className="listBox">
        <p>번호 {index + 1}</p>
        <p>등록 시간: {item.timestamp}</p>
        <p>제목: {item.title}</p>
        <p>내용: {item.content}</p>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
}
