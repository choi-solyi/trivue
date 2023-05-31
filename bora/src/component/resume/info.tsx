import React from "react";
import "../../assets/css/info.css";
import { getCollectionData } from "../../pugins/firestore";
import { INFO_INITIAL_VALUE } from './resume.constants';

export const Info = ({ path }): React.ReactElement => {
  const [info, setInfo] = React.useState(INFO_INITIAL_VALUE);
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

  if (!info) {
    return <> loading ... </>;
  }

  return (
    <>
      <section className="section1">
        <div className="info_container">
          <div className="photo_zone">
            <div className="img_container">
              <img src={path} alt="myPhoto" />
            </div>
          </div>
          <div className="info_zone">
            <h1>Bora YANG</h1>
            <h3>{info.position}</h3>
            <h4>phone : {info.phone}</h4>
            <h4>eamil : {info.email}</h4>
          </div>
          <div className="info_zone">
            <h1>Abilities</h1>
            <div dangerouslySetInnerHTML={{__html:info.content}} style={{lineHeight:1.7}}></div>
          </div>
        </div>
      </section>
    </>
  );
};
