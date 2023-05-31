import React from "react";
import { getCollectionData } from "../../pugins/firestore";
import { EDUCATION_INITIAL_VALUE } from './resume.constants';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Education = (): React.ReactElement => {
  const [education, setEducation] = React.useState(EDUCATION_INITIAL_VALUE);
  const handleVerifyScheduleLog = async () => {
    try {
      setEducation(await getCollectionData("resume", "education"));
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    handleVerifyScheduleLog();
  }, []);

  if (!education) {
    return <> loading ... </>;
  }

  return (
    <>
      <section className="section2">
        <div className="line_second text-align-center">
          History of Education
        </div>
        <div className='info_container' style={{paddingBottom: 70}}>
          <EducationTable education={education.education}/>
        </div>
      </section>
    </>
  );
};

const EducationTable = ({education}) =>{
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>재학기간</TableCell>
            <TableCell>학교명</TableCell>
            <TableCell align="right">구분</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {education.sort(({ period: a }, { period: b }) => a.localeCompare(b, 'en', { numeric: true })).map((row,idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.period}
              </TableCell>
              <TableCell>{row.school}</TableCell>
              <TableCell align="right">{row.graduation ? '졸업':'-'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}