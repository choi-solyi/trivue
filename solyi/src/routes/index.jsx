import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home/Home'
import Create from '../pages/Create/Create'
// import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound'
import WeAre from '../pages/WeAre/WeAre'
import Fav  from '../pages/Fav/Fav'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="*"
            element={<NotFound />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/Create/*"
            element={<Create />}
          />
          <Route
            path="/WeAre/*"
            element={<WeAre />}
          />
          
          <Route
            path="/Fav/*"
            element={<Fav />}
          />
          {/* <Route
            path="/BookList/*"
            element={<BookList />}
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
