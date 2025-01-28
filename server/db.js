const mysql = require("mysql");

// 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: "localhost", // MySQL 서버 주소
  user: "root", // MySQL 사용자
  password: "1234", // MySQL 비밀번호
  database: "easyboarddatabase", // 데이터베이스 이름
});

// 연결 테스트
db.connect((err) => {
  if (err) {
    console.error("MySQL 연결 실패:", err);
  } else {
    console.log("MySQL 연결 성공");
  }
});

module.exports = db;
