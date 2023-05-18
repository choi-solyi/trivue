import React from "react";
import '../styles/IconButton.css';
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";

const IconButton = () => {
    return (
        <>
        <div className="icons">
            <a href="https://github.com/flo2seul"><img src={Github}></img></a>
            <a href="https://www.linkedin.com/in/seulayoon/"><img src={Linkedin}></img></a>
        </div>
        </>
    )
}

export default IconButton;