import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Accordions = ({ type }) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className="mx-4 mb-10 xl:mx-60 lg:mx-24 md:mx-16 sm:mx-6">
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            className="!text-2xl"
            sx={{ width: '75%', flexShrink: 0 }}
          >
            General settings
          </Typography>
          <Typography
            className="!text-lg"
            sx={{ color: 'text.secondary' }}
          >
            xxxx.xx.xx - yyyy.yy.yy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            className="!text-2xl"
            sx={{ width: '75%', flexShrink: 0 }}
          >
            Users
          </Typography>
          <Typography
            className="!text-lg"
            sx={{ color: 'text.secondary' }}
          >
            xxxx.xx.xx - yyyy.yy.yy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            className="!text-2xl"
            sx={{ width: '75%', flexShrink: 0 }}
          >
            Advanced settings
          </Typography>
          <Typography
            className="!text-lg"
            sx={{ color: 'text.secondary' }}
          >
            xxxx.xx.xx - yyyy.yy.yy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            className="!text-2xl"
            sx={{ width: '75%', flexShrink: 0 }}
          >
            Personal data
          </Typography>
          <Typography
            className="!text-lg"
            sx={{ color: 'text.secondary' }}
          >
            xxxx.xx.xx - yyyy.yy.yy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Accordions
