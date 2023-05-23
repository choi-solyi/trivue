import { v4 } from "uuid";
import '../styles/ProjectCard.css';
import Github from "../assets/github.svg";
const ProjectCard = () => {
    const cardInfo = [
        {img:"images/tipCalculator.png",title:"CAT-MEME-MAKER",src: "", skills: "HTML, CSS, React"},
        {img: "images/tipCalculator.png", title: "TIP CALCULATOR",src: "https://github.com/flo2seul/TipCalculator", skills: "HTML, CSS, React"}
    ]
return (
    
        
            cardInfo.map((info)=>{
                return (
                    <>
                        <div className="card" key={v4()}>
                            <img className="project-thumbnail" key={v4()} src={info.img} alt="thumbnail"></img>
                            <div className="project-title" key={v4()}>{info.title}
                                {/* <a href={info.src}><img src={Github}></img></a> */}
                            </div>
                            <div className="project-skills" key={v4()}>{info.skills}</div>
                        </div>
                    </>
                )
            })
        
    
)
}

export default ProjectCard;
