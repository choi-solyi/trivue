import React from "react";
import "../../assets/css/skill.css";
import { Info } from "./info";
import { Skill } from "./skill";
import { Career } from "./career";

export const Resume = ({ path }): React.ReactElement => {
  return (
    <>
      <Info path={path} />
      <Skill />
      <Career />
    </>
  );
};