//import React from "react";
import './App.css'
import IconButton from './components/IconButton'

function App() {


  return (
    <>
      <div className="contents">
        <div className="header">
          <span>seulayoon</span>
          <IconButton/>
        </div>
        <div className="about-me">
          <span>Hello World!</span>
          <div>
            <span>I&apos;m </span>
            <span className='underline'>Seula Yoon.</span>
          </div>
          <p className='paragraph'>Based in the Canda, I&apos;m software engineer</p>
        </div>
        <div className="projects"></div>
      </div>
    </>
  )
}

export default App
