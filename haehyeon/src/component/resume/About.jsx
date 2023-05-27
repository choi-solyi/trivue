import React from "react";
import "../../assets/css/About.css";

export default function About() {
  return (
    <>
      <section className="about_section">
        <div className="home">
          <span>haehyeon</span>
        </div>
        <div className="about-me">
          <span>Hello! </span>
          <div>
            <span>I'm </span>
            <span>Haehyeon Park :)</span>
          </div>
          <p className="paragraph">
            3+ years work experiences in IT startup, telecommunication and
            financial service provider companies. Currently living in Vancouver,
            and looking for <b>full stack developer job</b>.
          </p>
        </div>
      </section>
    </>
  );
}
