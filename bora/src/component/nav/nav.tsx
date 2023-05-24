import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFish, faBars, faCocktail } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
              <Link className="link" to={"/"}>
                Resume
              </Link>
            </li>
            <li>
              <Link className="link" to={"/editor"}>
                Edit
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar_icons">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </>
  );
};
