import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import './App.css'

const App =()=> {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/hello' Component={HelloWorld}/>
      </Routes>
    </Router>
  )
}
const Home = () => {
  return <h1>Home Page</h1>;
}

const HelloWorld = () => {
  return <h1>HelloWorld</h1>;
}
export default App
