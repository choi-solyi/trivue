import React from "react";
import "../../assets/css/skill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { getCollectionData } from '../../pugins/firestore';

export const Skill = (): React.ReactElement => {
  const [skill, setSkill] = React.useState({language:[]});
  const handleVerifyScheduleLog = async () => {
    try {
      setSkill(await getCollectionData("resume", "skill"));
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    handleVerifyScheduleLog();
    console.log(skill)
  }, []);

  if (!skill) {
    return <> loading ... </>;
  }
  return (
    <>
      <section className="section2 middle">
        <div className="skill_explain flex-container flex-col">
          <div className="line_first">EXPLORE SERVICES CATEGORY</div>
          <div className="line_second">
            Tech services that makes your life much easier!
          </div>
        </div>
        <div className="skill_card flex-col items-center justify-start gap-10">
          {skill.language.map(item =>(<Card language={item}/>))}
        </div>
      </section>
    </>
  );
};

const Card = ({language}): React.ReactElement => {
  return (
    <div className="flex-container flex-col items-center card_container">
      <div className="card_label">{language}</div>
      <FontAwesomeIcon icon={faPlane} />
      <div style={{ padding: 15, fontSize: 10 }}>{language}</div>
    </div>
  );
};
