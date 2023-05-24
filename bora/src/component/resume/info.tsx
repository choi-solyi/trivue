import React from "react";
import "../../assets/css/info.css";
import { getCollectionData } from "../../pugins/firestore";

export const Info = ({ path }): React.ReactElement => {
  const [info, setInfo] = React.useState({ content: null });
  const handleVerifyScheduleLog = async () => {
    try {
      setInfo(await getCollectionData("resume", "info"));
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    handleVerifyScheduleLog();
  }, []);

  if (!info.content) {
    return <></>;
  }

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
          <p>{info.content}</p>
        </div>
      </section>
    </>
  );
};
