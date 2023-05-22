import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './assets/css/App.css'
import { ResumeEditor } from './component/edit/editor';
import { Info } from './component/resume/info';
import { Nav } from './component/nav/nav';
import photo from './assets/photo.jpg'

const App =()=> {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Info path={photo}/>}/>
        <Route exact path='/editor' Component={ResumeEditor}/>
      </Routes>
    </Router>
  )
}

export default App
