import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

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

const Panel = ({ company }): React.ReactElement => {
  return (
    <Card sx={{ maxWidth: "70%", margin: "0 auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          2022-03 ~
        </Typography>
        <Typography variant="h5" component="div">
          {company}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          staff
        </Typography>
        <Typography variant="body2">
          • Effortlessly make a job-worthy resume and cover letter that gets you
          hired faster
          <br />
          • Effortlessly make a job-worthy resume and cover letter that gets you
          hired faster
          <br />
          • Effortlessly make a job-worthy resume and cover letter that gets you
          hired faster
          <br />
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">home page</Button>
      </CardActions>
    </Card>
  );
};

const Career = (): React.ReactElement => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: "100%", backgroundColor: "#ededed" }}>
      <Box sx={{ width: "70%", margin: "0 auto" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Panel company={"EMAX"} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Panel company={"PIOLINK"} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Panel company={"APPLE"} />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Career;
