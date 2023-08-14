// import './App.css'
import Stack from '@mui/material/Stack' // Grid version 2
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import SectionTitle from '../../components/layout/SectionTitle'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  width: '100%',
  height: '100px',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const TransparentItem = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  width: '100%',
  height: '100px',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))


function BookList() {
  const [krDay, setKrDay] = useState('')
  const [trtDay, setTrtDay] = useState('')
  const [vcvDay, setVcvDay] = useState('')
  const [dbiDay, setDubaiDay] = useState('')
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setData() // 상태 값 변경
    }
    fetchData()
  }, [])


  return (
    <div className="mx-4 xl:mx-68 lg:mx-24 md:mx-16 sm:mx-6">
      <SectionTitle name="북북"></SectionTitle>
      <Box sx={{ width: '100%' }}>
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
        >
          <Item
            elevation={3}
            className="relative"
          >
            <div className="float-left text-3xl text-start">한국</div>
            <div className="absolute text-3xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-end right-2 bottom-2">
              {krDay}
            </div>
          </Item>
        </Stack>
      </Box>
    </div>
  )
}

export default BookList
