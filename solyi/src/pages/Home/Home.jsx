import SectionTitle from '../../components/layout/SectionTitle'
import Imgs from '../../components/home/MainItems'
import Card from '../../components/Card'
import ImgCards from '../../components/ImgCardList'
import Accordions from '../../components/Accordions'

function Home() {
  return (
    <div>
      {/* <Title></Title> */}
      <Imgs></Imgs>
      <SectionTitle name="프로젝트"></SectionTitle>
      <ImgCards>{/* project */}</ImgCards>
      <SectionTitle name="경력"></SectionTitle>
      <Accordions>{/* workexperience */}</Accordions>
      <SectionTitle name="교육/이수/자격증"></SectionTitle>
      <Card type="">{/* skills */}</Card>
    </div>
  )
}

export default Home
