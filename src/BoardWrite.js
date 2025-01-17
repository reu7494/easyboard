import { useState } from "react";
import { format } from "date-fns";
import InputClicked from "./InputClicked";

export default function BoardWrite() {
  const [viewContent, setViewContent] = useState([]);
  const [boardContent, setBoardContent] = useState({
    title: "",
    content: "",
  });

  const getCurrentDateTime = () => {
    const now = new Date();
    return format(now, "yyyy-MM-dd HH:mm:ss");
  };

  const sumbit = () => {
    const newContent = {
      ...boardContent,
      timestamp: getCurrentDateTime(),
    };
    setViewContent([...viewContent, newContent]);
    setBoardContent({ title: "", content: "" });
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
        <button onClick={sumbit}>등록</button>
      </div>
      {viewContent.map((item, index) => {
        return (
          <div className="listBox">
            <p>번호 {index + 1}</p>
            <p>등록 시간: {item.timestamp}</p>
            <p>제목: {item.title}</p>
            <p>내용: {item.content}</p>
            <button>수정</button>
            <button>삭제</button>
          </div>
        );
      })}
    </div>
  );
}
