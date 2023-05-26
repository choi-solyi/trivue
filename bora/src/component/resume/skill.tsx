import React from "react";
import "../../assets/css/skill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

export const Skill = (): React.ReactElement => {
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

const Card = (): React.ReactElement => {
  return (
    <div className="flex-container flex-col items-center card_container">
      <div className="card_label">JavaScript</div>
      <FontAwesomeIcon icon={faPlane} />
      <div style={{ padding: 15, fontSize: 10 }}>JAVASCRIPT</div>
    </div>
  );
};
