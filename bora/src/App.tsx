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
        <Route path="/editor" Component={ResumeEditor} />
      </Routes>
    </Router>
  );
};

export default App;
