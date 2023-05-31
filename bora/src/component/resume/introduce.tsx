import React from "react";
import { getCollectionData } from "../../pugins/firestore";
import { INTRODUCE_INITIAL_VALUE } from './resume.constants';
import "../../assets/css/introduce.css";

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
        <div className="introduce_content">
          <div className="line_second text-align-center">
            About Me
          </div>
          {introduce.introduce.map((item,idx1)=>{
            return (
              <React.Fragment key={idx1}>
                <h3>{item.title}</h3>
                {item.content.map((el,idx2)=> 
                <div key={idx2} className='flex-container pdb10'><div className='pdl20'>• </div><div className='pdl10'>{el}</div></div>)}
              </React.Fragment>
            )
          })}
        </div>
      </section>
    </>
  );
};
