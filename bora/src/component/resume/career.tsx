import React from "react";
import "../../assets/css/career.css";

export const Career = (): React.ReactElement => {
  return (
    <>
      <section className="career_container flex-container">
        <Page />
      </section>
    </>
  );
};

const Page = (): React.ReactElement => {
  return (
    <>
      <div className="first"></div>
      <div className="second"></div>
      <div className="third"></div>
    </>
  );
};
