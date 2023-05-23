import ImgCard from './ImgCard'
import SectionTitle from './layout/SectionTitle'
import { Box } from '@mui/material'

const ImgCards = ({ name }) => {
  return (
    <div className="xl:mx-60 lg:mx-24 md:mx-16 sm:mx-6 mb-10">
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <ImgCard></ImgCard>
        <ImgCard></ImgCard>
        <ImgCard></ImgCard>
      </div>
    </div>
  )
}

export default ImgCards
