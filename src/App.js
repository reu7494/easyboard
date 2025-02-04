import { Route, Routes } from "react-router-dom";
import BoardWrite from "./BoardWrite";
import MainHome from "./MainHome";
import BoardDetail from "./BoardDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/write" element={<BoardWrite />} />
      <Route path="/board/:id" element={<BoardDetail />} />
    </Routes>
  );
}
