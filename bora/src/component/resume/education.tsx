import React from "react";
import { getCollectionData } from "../../pugins/firestore";

export const Education = (): React.ReactElement => {
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
    return <> loading ... </>;
  }

  return (
    <>
      <section className="section2"></section>
    </>
  );
};
