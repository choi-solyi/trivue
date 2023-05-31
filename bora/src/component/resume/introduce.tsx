import React from "react";
import "../../assets/css/info.css";
import { getCollectionData } from "../../pugins/firestore";
import { INTRODUCE_INITIAL_VALUE } from './resume.constants';

export const Introduce = (): React.ReactElement => {
  const [introduce, setIntroduce] = React.useState(INTRODUCE_INITIAL_VALUE);
  const handleVerifyScheduleLog = async () => {
    try {
      setIntroduce(await getCollectionData("resume", "introduce"));
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    handleVerifyScheduleLog();
  }, []);

  if (!introduce) {
    return <> loading ... </>;
  }

  return (
    <>
      <section className="section1">
        <div className="info_container flex-container flex-col">
          <div className="line_second text-align-center">
            Intoduction
          </div>
          {introduce.introduce.map((item,idx1)=>{
            return (<React.Fragment key={idx1}>
              <h3>{item.title}</h3>
              {item.content.map((el,idx2)=> <div className='flex-container pdb10'><div className='pdl20' key={idx2}>• </div><div className='pdl10'>{el}</div></div>)}
            </React.Fragment>)
          })}
        </div>
      </section>
    </>
  );
};
