import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { DateRange } from 'react-date-range'
import * as locales from 'react-date-range/dist/locale'
import { TextField } from '@mui/material'

import { useState } from 'react'
const Forms = () => {
  const [age, setAge] = useState('')
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ])

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 2, width: '25ch' },
          '& .MuiFormControl-root >> #a': { m: 2, width: '23ch' },

          // '& .MuiSelect-select		': { m: 2, width: '115ch' },
        }}
      >
        <div>
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
        </div>
        {/* <div>
          <FormControl id="a">
            <InputLabel id="demo-simple-select-label">구분</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="구분"
              onChange={handleChange}
            >
              <MenuItem value={'personal'}>퍼스널</MenuItem>
              <MenuItem value={'project'}>프로젝트</MenuItem>
              <MenuItem value={'workexperience'}>경력</MenuItem>
              <MenuItem value={'skills'}>스킬</MenuItem>
              <MenuItem value={'education'}>교육</MenuItem>
              <MenuItem value={'programming'}>프로그래밍</MenuItem>
            </Select>
          </FormControl>
        </div> */}
        <div>
          <TextField
            label="abc"
            id="outlined-size-small"
            defaultValue="Small"
            className="my-4"
          />
        </div>
      </Box>
      <Box className="my-8 lg:w-1/2">
        <div className="my-4 ">
          <DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            locale={locales['ko']}
          />
        </div>
      </Box>
      <Box className="my-8 lg:w-1/2"></Box>
    </Box>
  )
}

export default Forms
