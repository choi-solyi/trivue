import SectionTitle from '../../components/layout/SectionTitle'
import Title from '../../components/layout/Title'
import Footer from '../../components/layout/Footer'
// import Imgs from '../../components/home/MainItems'
// import Card from '../../components/Card'
import MiniCards from '../../components/MiniCards'
import ImgCards from '../../components/ImgCardList'
import Accordions from '../../components/Accordions'

function Home() {
  return (
    <div>
      <Title></Title>
      {/* <Imgs></Imgs> */}
      <SectionTitle name="Tech Stack"></SectionTitle>
      <MiniCards></MiniCards>
      <SectionTitle name="Project"></SectionTitle>
      <ImgCards>{/* project */}</ImgCards>
      <SectionTitle name="Work experience"></SectionTitle>
      <Accordions>{/* workexperience */}</Accordions>
      <SectionTitle name="Contact"></SectionTitle>
      <Footer></Footer>
      {/* <SectionTitle name="Skills"></SectionTitle> */}
      {/* <Card type="">skills</Card> */}
    </div>
  )
}

export default Home
