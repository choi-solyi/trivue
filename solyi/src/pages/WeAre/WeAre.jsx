// import './App.css'
import Stack from '@mui/material/Stack'; // Grid version 2
import Header from '../../components/AppBar'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  width:'90%',
  height:'100px',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const TransparentItem = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  width:'90%',
  height:'100px',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function getCurrentTime(offset) {
    const currentTime = new Date(); // 현재 시간
    // UTC 시간에 지역별 시차를 더하여 시간 조정
    const adjustedTime = currentTime.getTime() + (offset * 60 * 60 * 1000);
    // 조정된 시간을 이용하여 새로운 Date 객체 생성 
    const adjustedDate = new Date(adjustedTime);
    return adjustedDate;
  }
  
  // 한국 시간 표시
  const koreaOffset = 9; // 한국은 UTC+9:00
  const koreaTime = getCurrentTime(koreaOffset);
  const koreaDate = koreaTime.toLocaleString('ko-KR', {
    month: 'long',
    day: 'numeric'
  });
  const koreaTimeFormatted = koreaTime.toLocaleString('ko-KR', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  });
  console.log('한국 시간:', koreaDate, koreaTimeFormatted);
  
  // 토론토 시간 표시
  const torontoOffset = -4; // 토론토는 UTC-4:00
  const torontoTime = getCurrentTime(torontoOffset);
  
  const torontoDate = torontoTime.toLocaleString('ko-KR', {
    month: 'long',
    day: 'numeric'
  });
  const torontoTimeFormatted = torontoTime.toLocaleString('ko-KR', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  });

  console.log('토론토 시간:', torontoDate, torontoTimeFormatted);
  
  // 밴쿠버 시간 표시
  const vancouverOffset = -7; // 밴쿠버는 UTC-7:00
  const vancouverTime = getCurrentTime(vancouverOffset);
  const vancouverDate = vancouverTime.toLocaleString('ko-KR', {
    month: 'long',
    day: 'numeric'
  });
  const vancouverTimeFormatted = vancouverTime.toLocaleString('ko-KR', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  });
  console.log('밴쿠버 시간:', vancouverDate, vancouverTimeFormatted);

  
function WeAre() {
return (
    <div >
      <Header></Header>
      <div className='container mx-auto'>
        <Box sx={{ width: '100%' }}>
          <Stack
            direction="column"
            alignItems="center"
            spacing={2}
            >
            <Item elevation={3}>           
              <div className='text-3xl text-start float-left'>한국</div>
              <div className='text-2xl text-end'>
                {koreaDate}
              </div>
              <div className='text-5xl  text-end'>
                {koreaTimeFormatted}
              </div>
            </Item>
            <Item elevation={3}>           
              <div className='text-3xl text-start float-left'>토론토</div>
              <div className='text-2xl text-end'>
               {torontoDate}
              </div>
              <div className='text-4xl  text-end'>
               {torontoTimeFormatted}
              </div>
            </Item>
            <Item elevation={3}>           
              <div className='text-3xl text-start float-left'>밴쿠버</div>
              <div className='text-2xl text-end'>
                {vancouverDate}
              </div>
              <div className='text-4xl  text-end'>
                {vancouverTimeFormatted}
              </div>
            </Item>
            <TransparentItem  elevation={0}>
              <Slider defaultValue={50} aria-label="Default"  />
           </TransparentItem>
          </Stack>
        </Box>
      </div>
    </div>
  )
}

export default WeAre
