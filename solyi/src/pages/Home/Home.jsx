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
      <SectionTitle name="Project"></SectionTitle>
      <ImgCards>{/* project */}</ImgCards>
      <SectionTitle name="Work experience"></SectionTitle>
      <Accordions>{/* workexperience */}</Accordions>
      <SectionTitle name="Skills"></SectionTitle>
      <Card type="">{/* skills */}</Card>
    </div>
  )
}

export default Home
