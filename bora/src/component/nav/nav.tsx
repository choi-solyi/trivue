import { faCocktail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import git from '../../assets/svg/git.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import tistory from '../../assets/svg/tistory.svg';

export const Nav = (): React.ReactElement => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <FontAwesomeIcon icon={faCocktail} style={{ color: "#193dd8" }} />
          <Link className="link" to={"/"} style={{ paddingLeft: 10 }}>
            BORA YANG
          </Link>
        </div>
        <div className="navbar_menu">
          <ul>
            <li>
            <Link className='link' to={'https://purplesheep.tistory.com/'} target='_blank'>
                <img src={tistory} style={{width:20}}/>
              </Link>
              <Link className='link' to={'https://github.com/purplesheep513'} target='_blank'>
                <img className='pdl5' src={git} style={{width:20}}/>
              </Link>
              <Link className='link' to={'https://www.linkedin.com/in/bora-yang-3116421ba/'} target='_blank'>
                <img className='pdl5' src={linkedin} style={{width:20}}/>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
