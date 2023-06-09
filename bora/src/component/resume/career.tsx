import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { getCollectionData } from '../../pugins/firestore';
import { CAREER_INITIAL_VALUE } from './resume.constants';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps): React.ReactElement => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Panel = ({ content }): React.ReactElement => {
  return (
    <div className='career_box'>
      <Card variant="outlined" sx={{display:'inline-block', width:'100%'}}>
        <CardContent>
          <Typography variant="h5" component="div">
            {content.project}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" className='pdb20' gutterBottom>
          [{content.position}] {content.period}
          </Typography>
          <Typography variant="body2">
            {content.content
            .map((item,index)=><div className='flex-container pdb10' key={index}><div>•</div><div className='pdl10'>{item}</div></div>)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const Career = (): React.ReactElement => {
  const [tabNumber, setTabNumber] = React.useState(0);

  const [career, setCareer] = React.useState(CAREER_INITIAL_VALUE);
  const handleVerifyScheduleLog = async () => {
    try {
      setCareer(await getCollectionData("resume", "career"));
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    handleVerifyScheduleLog();
  }, []);

  if (!career) {
    return <> loading ... </>;
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabNumber(newValue);
  };

  return (
    <div className='career_container'>
      <div className="line_second">
        Career
      </div>
      <Box sx={{ margin: "0 auto"}}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabNumber}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            {career.companyInfo.map((item,idx) =><Tab key={idx} label={item.companyName}{...a11yProps(idx)} />)}
          </Tabs>
        </Box>
        {career.companyInfo.map((item, idx) => {
          return <React.Fragment key={idx}>
                  <TabPanel value={tabNumber} index={idx}>
                    <div className="line_first" style={{textAlign:'center'}}>{item.companyIntro}</div>
                  </TabPanel>
                  {item.contents
                  .sort(({period:a},{period:b})=>b.localeCompare(a,'en',{numeric:true}))
                  .map((conent, idx2) =>{
                    return (
                      <TabPanel key={idx2} value={tabNumber} index={idx}>
                        <Panel content={conent} />
                      </TabPanel>
                    )
                  })}
                </React.Fragment>
        })}
        <CardActions>
          <Button size="small">home page</Button>
        </CardActions>
      </Box>
      
    </div>
  );
};

export default Career;
