import { Route, Routes } from "react-router-dom";
import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import MainHome from "./MainHome";
import BoardDetail from "./BoardDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/board" element={<BoardList />} />
      <Route path="/write" element={<BoardWrite />} />
      <Route path="/board/:idx" element={<BoardDetail />} />
    </Routes>
  );
}
