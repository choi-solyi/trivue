import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import './App.css'
import { ResumeEditor } from './component/edit/editor';
import { Info } from './component/resume/info';

const App =()=> {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Info}/>
        <Route exact path='/editor' Component={ResumeEditor}/>
      </Routes>
    </Router>
  )
}

export default App
