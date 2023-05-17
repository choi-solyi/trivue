import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import Imgs from '../../components/Imgs'
import Card from '../../components/Card'
import Title from '../../components/Title'

function Home() {
  return (
    <div>
      <Title></Title>
      <Imgs></Imgs>
      <SectionTitle name="경력"></SectionTitle>
      <Card type="workexperience"></Card>
      <Card></Card>
      <SectionTitle name="프로젝트"></SectionTitle>
      <Card type="project"></Card>
      <Card></Card>
      <SectionTitle name="교육/이수/자격증"></SectionTitle>
      <Card type="skills"></Card>
      <Card></Card>
    </div>
  )
}

export default Home
