import { Route, Routes } from "react-router-dom";
import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import MainHome from "./MainHome";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/board" element={<BoardList />} />
      <Route path="/write" element={<BoardWrite />} />
    </Routes>
  );
}
