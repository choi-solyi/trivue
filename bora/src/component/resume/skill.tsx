import React from "react";
import "../../assets/css/skill.css";
import { getCollectionData } from '../../pugins/firestore';
import { SKILL_INITIAL_VALUE, path } from './resume.constants';


export const Skill = (): React.ReactElement => {
  const [skill, setSkill] = React.useState(SKILL_INITIAL_VALUE);
  const handleVerifyScheduleLog = async () => {
    try {
      setSkill(await getCollectionData("resume", "skill"));
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    handleVerifyScheduleLog();
  }, []);

  if (!skill) {
    return <> loading ... </>;
  }
  return (
    <>
      <section className="section2 middle">
        <div className="line_second">
          Programming Language Skills
        </div>
        <div className="skill_card flex-col items-center justify-start gap-10">
          {skill.language.map((item, idx) =>(<Card key={idx} languageItem={item}/>))}
        </div>
      </section>
    </>
  );
};

const Card = ({languageItem}): React.ReactElement => {
  const p = path(languageItem.icon)
  return (
    <div className="flex-container flex-col items-center card_container">
      <div className="card_label pdt10">{languageItem.name}</div>
      <img src={p} className='pdt10' style={{width:40}}/>
      <div style={{ padding: 15, fontSize: 10 }}>{languageItem.level}</div>
    </div>
  );
};