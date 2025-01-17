const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 5000;

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());

// 데이터 추가 (POST 요청)
app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;
  const query =
    "INSERT INTO list (list_name, user_name, current_state, future_state, views, recommended_number) VALUES (?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 0, 0)";

  db.query(query, [title, content], (err, result) => {
    if (err) {
      console.error("데이터 삽입 오류:", err);
      res.status(500).send("데이터 삽입 중 오류 발생");
    } else {
      res.status(201).send("데이터 삽입 성공");
    }
  });
});

// 데이터 가져오기 (GET 요청)
app.get("/api/posts", (req, res) => {
  const query = "SELECT * FROM list";

  db.query(query, (err, results) => {
    if (err) {
      console.error("데이터 조회 오류:", err);
      res.status(500).send("데이터 조회 중 오류 발생");
    } else {
      res.status(200).json(results);
    }
  });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
