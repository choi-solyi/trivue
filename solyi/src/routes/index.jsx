import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/Home/Home';
import Create from '../pages/Create/Create';
// import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/Create/*" element={<Create />} />
      </Routes>
  </BrowserRouter>
  );
};

export default App;
