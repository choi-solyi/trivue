
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVuejs, faJs } from '@fortawesome/free-brands-svg-icons'
import logo_vuejs from '../assets/logo/language/vuejs.png'
import logo_js from '../assets/logo/language/js.png'
import logo_mssql from '../assets/logo/language/mssql.png'
import logo_csharp from '../assets/logo/language/cs.png'


import { useState, useEffect } from 'react'
const MiniCards = ({ name }) => {
  const imgstyle = {
    width: "12vw",
  };
  const arr = [
    {
      img: logo_vuejs,
      txt:'Vue.js'
    },
    {
      img: logo_csharp,
      txt:'C#'
    },
    {
      img:logo_js,
      txt:'JavaScript'
    },
  
    {
      img:logo_mssql,
      txt:'MS-SQL'
    },
   ]
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 } 
  return (
    <div className="mx-4 mb-10 xl:mx-60 lg:mx-24 md:mx-16 sm:mx-6">
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid
          container
          spacing={2}
        >
          
          {[...arr].map((_, index) => (
            <Grid key={index} {...{ xs: 3, sm: 3, md: 3, lg: 2 }} minHeight={160}
            className="mx-auto text-center" >
              <img className="mx-auto" src={_.img} style={imgstyle} ></img>
              <p>{_.txt}</p>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default MiniCards
