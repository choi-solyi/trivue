import React from "react";
import "../../assets/css/skill.css";
import { Info } from "./info";
import { Skill } from "./skill";
import Career from "./career";
import photoPath from "../../assets/image/photo.jpg";

export const Resume = (): React.ReactElement => {
  return (
    <>
      <Info path={photoPath} />
      <Skill />
      <Career />
    </>
  );
};
