import React from "react";
import "../../assets/css/info.css";
import { getCollection } from "../../pugins/firestore";

export const Info = ({ path }): React.ReactElement => {
  const [info, setInfo] = React.useState({ content: null });
  const handleVerifyScheduleLog = async (id = null) => {
    try {
      const temp = await getCollection("resume", "info");
      setInfo(temp);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    handleVerifyScheduleLog();
    console.log(info);
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
