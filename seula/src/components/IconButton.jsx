import React from "react";
import '../styles/IconButton.css';
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";

const IconButton = () => {
    return (
        <>
        <div className="icons">
            <img src={Github}></img>
            <img src={Linkedin}></img>
        </div>
        </>
    )
}

export default IconButton;