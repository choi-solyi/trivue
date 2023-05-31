import React from "react";
import "../../assets/css/skill.css";
import { Info } from "./info";
import { Skill } from "./skill";
import Career from "./career";
import photoPath from "../../assets/image/photo.jpg";
import { Education } from './education';
import { Introduce } from './introduce';

export const Resume = (): React.ReactElement => {
  return (
    <>
      <Info path={photoPath} />
      <Skill />
      <Career />
      <Education />
      <Introduce />
    </>
  );
};
