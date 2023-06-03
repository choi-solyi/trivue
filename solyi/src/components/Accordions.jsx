import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState, useEffect } from 'react'
import { findWorkList } from '../plugins/firestore'
const Accordions = ({ type }) => {
  const [expanded, setExpanded] = useState(false)
  const [workList, setWorkList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const list = await findWorkList()
      setWorkList(list)
    }
    fetchData()
  }, [])
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div className="mx-4 mb-10 xl:mx-60 lg:mx-24 md:mx-16 sm:mx-6">
      {workList &&
        workList.map((work, index) => {
          return (
            // <ImgCard
            //   key={index.toString()}
            //   name={item.id}
            //   item={item.data}
            // ></ImgCard>
            <Accordion
              key={index.toString()}
              name={work.id}
              item={work.data}
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className="w-2/5 text-2xl sm:text-sm ">
                  {work.id}
                </Typography>

                <Typography className="w-3/5 text-2xl sm:text-sm">
                  {work.data.title}
                </Typography>

                <Typography
                  className="w-1/5 text-xl sm:!text-xs"
                  sx={{ color: 'text.secondary' }}
                >
                  {new Date(work.data.start.seconds * 1000).toLocaleString(
                    'ko-KR',
                    {
                      year: 'numeric',
                      month: 'numeric',
                    }
                  )}{' '}
                  ~
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{work.data.description}</Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
    </div>
  )
}

export default Accordions
