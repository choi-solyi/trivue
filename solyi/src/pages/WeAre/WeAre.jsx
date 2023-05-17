// import './App.css'
import Stack from '@mui/material/Stack' // Grid version 2
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  width: '90%',
  height: '100px',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const TransparentItem = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  width: '90%',
  height: '100px',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

// const fullFormat = {
//   month: 'long',
//   day: 'numeric',
//   hour12: true,
//   hour: '2-digit',
//   minute: '2-digit',
// }
// const dayFormat = {
//   month: 'long',
//   day: 'numeric',
// }
// const timeFormat = {
//   hour12: true,
//   hour: '2-digit',
//   minute: '2-digit',
// }

// 시간을 더하는 함수
function addHours(date, hours) {
  const result = new Date(date)
  result.setTime(result.getTime() + hours * 60 * 60 * 1000)
  return result
}

function WeAre() {
  const [krDay, setKrDay] = useState('')
  const [trtDay, setTrtDay] = useState('')
  const [vcvDay, setVcvDay] = useState('')
  // const [aa, setAa] = useState(getLots)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      // 데이터 가져오기 예시 (비동기 작업)
      const times = []
      let i = 1
      while (i <= 336) {
        if (i % 50 == 0) times.push({ value: i, label: `+${i}H` })
        i++
      }
      setData(times) // 상태 값 변경
    }
    fetchData()

    const koreaFull = new Date().toLocaleString('ko-KR', {
      timeZone: 'Asia/Seoul',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      month: 'long',
      day: 'numeric',
    })
    setKrDay(koreaFull)
    // 토론토 시간
    const torontoFull = new Date().toLocaleString('ko-KR', {
      timeZone: 'America/Toronto',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      month: 'long',
      day: 'numeric',
    })
    setTrtDay(torontoFull)

    // 밴쿠버 시간
    const vancouverFull = new Date().toLocaleString('ko-KR', {
      timeZone: 'America/Vancouver',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      month: 'long',
      day: 'numeric',
    })
    setVcvDay(vancouverFull)
  }, [])

  function setPlusHour(plusHour) {
    const koreaFull = addHours(new Date(), plusHour).toLocaleString('ko-KR', {
      timeZone: 'Asia/Seoul',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      month: 'long',
      day: 'numeric',
    })
    setKrDay(koreaFull)

    const torontoFull = addHours(new Date(), plusHour).toLocaleString('ko-KR', {
      timeZone: 'America/Toronto',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      month: 'long',
      day: 'numeric',
    })
    setTrtDay(torontoFull)

    const vancouverFull = addHours(new Date(), plusHour).toLocaleString(
      'ko-KR',
      {
        timeZone: 'America/Vancouver',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        month: 'long',
        day: 'numeric',
      }
    )
    setVcvDay(vancouverFull)
  }

  function moveSlider(event, plusHour) {
    setPlusHour(plusHour)
  }
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
        >
          <Item elevation={3}>
            <div className="text-3xl text-start float-left">한국</div>
            <div className="text-5xl  text-end">{krDay}</div>
          </Item>
          <Item elevation={3}>
            <div className="text-3xl text-start float-left">토론토</div>
            <div className="text-4xl  text-end">{trtDay}</div>
          </Item>
          <Item elevation={3}>
            <div className="text-3xl text-start float-left">밴쿠버</div>
            <div className="text-4xl  text-end">{vcvDay}</div>
          </Item>
          <TransparentItem elevation={0}>
            <Slider
              defaultValue={0}
              step={1}
              max={336}
              marks={data}
              aria-label="Default"
              onChange={moveSlider}
            />
          </TransparentItem>
        </Stack>
      </Box>
    </div>
  )
}

export default WeAre
