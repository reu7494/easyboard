import { useState } from "react";
import InputClicked from "./InputClicked";
import BoardList from "./BoardList";

export default function BoardWrite() {
  const [boardContent, setBoardContent] = useState({
    title: "",
    content: "",
  });

  const submit = async () => {
    const newContent = {
      title: boardContent.title,
      content: boardContent.content,
    };

    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContent),
      });

      if (response.ok) {
        alert("글 작성 성공!");
        setBoardContent({ title: "", content: "" }); // 입력 필드 초기화
        fetchPosts(); // 서버에서 최신 데이터를 가져와 업데이트
      } else {
        alert("글 작성 실패!");
      }
    } catch (error) {
      console.error("글 작성 중 오류 발생:", error);
    }
  };

  const getVallue = (e) => {
    const { name, value } = e.target;
    setBoardContent({ ...boardContent, [name]: value });
  };

  return (
    <div className="App">
      <div className="addListBox">
        <InputClicked placeholder="제목" onChange={getVallue} name="title" />
        <InputClicked placeholder="내용" onChange={getVallue} name="content" />
        <button onClick={submit}>등록</button>
      </div>
      {viewContent.map((item, index) => (
        <BoardList key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
