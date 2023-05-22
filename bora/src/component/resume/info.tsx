import React from "react";
import "../../assets/css/info.css";

export const Info = ({ path }): React.ReactElement => {
  return (
    <>
      <section className="info_section">
        <div className="photo_zone">
          <div className="img_container">
            <img src={path} alt="myPhoto" />
          </div>
        </div>
        <div className="info_zone">
          <h1>Find Top Talent</h1>
          <h1>FULL STACK PROGRAMMER</h1>
          <p>
            Turn traffic into sales with a beautiful landing page—a place where
            your business or brand can shine online. Start a contest and our
            designers will create a quality landing page design you’ll love,
            guaranteed.
          </p>
        </div>
      </section>
    </>
  );
};
