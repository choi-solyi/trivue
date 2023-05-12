import { useState } from 'react'
import './App.css'
import Header from './components/AppBar.jsx'
import SectionTitle from './components/SectionTitle'
import Imgs from './components/Imgs'
import Card from './components/Card'
// import Title from './components/Title'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Imgs></Imgs>
      {/* <Title></Title> */}
      <SectionTitle name="경력"></SectionTitle>
      <Card></Card>
      <Card></Card>
      <SectionTitle name="프로젝트"></SectionTitle>
      <Card></Card>
      <Card></Card>
      <SectionTitle name="교육/이수/자격증"></SectionTitle>
      <Card></Card>
      <Card></Card>
    </div>
  )
}

export default App
