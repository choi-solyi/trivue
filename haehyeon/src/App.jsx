import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./component/resume/Resume";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
