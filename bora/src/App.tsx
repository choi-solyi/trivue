import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import { ResumeEditor } from "./component/edit/editor";
import { Nav } from "./component/nav/nav";
import { Resume } from "./component/resume/resume";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;
