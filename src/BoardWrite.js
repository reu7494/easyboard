import { useState, useEffect } from "react";
import InputClicked from "./InputClicked";
import BoardList from "./BoardList";
import { useNavigate } from "react-router-dom";

export default function BoardWrite() {
  const [boardContent, setBoardContent] = useState({
    title: "",
    createdBy: "",
    content: "",
  });
  const [viewContent, setViewContent] = useState([]);

  const navigate = useNavigate;
  const backToList = () => {
    navigate("/board");
  };

  const { title, createdBy, contents } = viewContent;

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts");
      if (response.ok) {
        const data = await response.json();
        setViewContent(data); // 서버에서 가져온 데이터를 상태로 설정
      } else {
        console.error("데이터 가져오기 실패");
      }
    } catch (error) {
      console.error("데이터 가져오는 중 오류 발생:", error);
    }
  };

  const saveBoard = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      if (response.ok) {
        alert("글 작성 성공!");
        setBoardContent({ title: "", content: "" }); // 입력 필드 초기화
        fetchData(); // 새로 작성한 글을 포함해 데이터 다시 가져오기
        navigate("/board");
      } else {
        alert("글 작성 실패!");
      }
    } catch (error) {
      console.error("글 작성 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getVallue = (e) => {
    const { name, value } = e.target;
    setBoardContent({ ...boardContent, [name]: value });
  };

  return (
    <div className="App">
      <div className="title_name">
        <span>제목</span>
        <InputClicked
          type="text"
          name="title"
          value={title}
          placeholder="제목을 입력하세요"
          onChange={getVallue}
        />
      </div>
      <br />
      <div>
        <span>작성자</span>
        <InputClicked
          type="text"
          name="createdBy"
          value={createdBy}
          placeholder="작성자명을 입력하세요"
          onChange={getVallue}
        />
      </div>
      <br />
      <div>
        <span>내용</span>
        <textarea
          name="content"
          cols="30"
          rows="10"
          value={contents}
          placeholder="내용을 입력하세요"
          onChange={getVallue}
        />
        <br />
        <div>
          <button onClick={saveBoard}>저장</button>
          <button onClick={backToList}>취소</button>
        </div>
      </div>
      {viewContent.map((item, index) => (
        <BoardList key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
