
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
  
  // const vuejs = <FontAwesomeIcon icon={faVuejs} size="8x" />
  const csharp =  <img src={logo_csharp}/> 
  const vuejs =  <img src={logo_vuejs}/> 
  const javascript =  <img src={logo_js}/>
  const l_mssql =  <img src={logo_mssql}/> 
  const arr = [
    {
      img: vuejs,
      txt:'vuejs'
    },
    {
      img: csharp,
      txt:'csharp'
    },
    {
      img:javascript,
      txt:'javascript'
    },
    {
      img:l_mssql,
      txt:'mssql'
    },
    {
      img:'',
      txt:''
    },
    {
      img:'',
      txt:''
    },
    {
      img:'',
      txt:''
    },]
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 } 
  return (
    <div className="mx-4 mb-10 xl:mx-60 lg:mx-24 md:mx-16 sm:mx-6">
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid
          container
          spacing={2}
          // sx={{
          //   '--Grid-borderWidth': '1px',
          //   borderTop: 'var(--Grid-borderWidth) solid',
          //   borderLeft: 'var(--Grid-borderWidth) solid',
          //   // borderColor: 'diviber',
          //   '& > div': {
          //     borderRight: 'var(--Grid-borderWidth) solid',
          //     borderBottom: 'var(--Grid-borderWidth) solid',
          //     borderColor: 'diviber',
          //   },
          // }}
        >
          
          {[...arr].map((_, index) => (
            <Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} minHeight={160}
            className="text-center" >
              <p>{_.img}</p>
              <p>{_.txt}</p>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default MiniCards
