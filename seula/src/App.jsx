import { v4 } from "uuid";
import './App.css'
import IconButton from './components/IconButton'
import ProjectCard from "./components/ProjectCard";
import ContactMe from "./components/ContactMe";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Java", "Spring", "MySQL", "Linux"]
  // const expSkills = ["HTML", "CSS", "JavaScript"]

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
          <p className='paragraph'>Based in the Canda, I&apos;m software engineer
          <br/>passionate about making accessible product <br/>that users love.</p>
          <ContactMe />
        </div>
        <div className="skills" >
       
          {
            skills.map((skill, i)=>{
              return <div className="skill-item" key={i}>{skill}</div>
            })
          }
      
          </div>
        <div className="projects">
          <div className="projects-title">Projects</div>
          <div className="cards">
              <ProjectCard key={v4()} />
          </div>
          </div>
      </div>
    </>
  )
}

export default App
