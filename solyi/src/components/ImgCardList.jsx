import ImgCard from './ImgCard'
import { findProjectList } from './../plugins/firestore'
import { useState, useEffect } from 'react'
const ImgCards = ({ name }) => {
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // 데이터 가져오기 예시 (비동기 작업)
      const list = await findProjectList()

      setProjectList(list) // 상태 값 변경
    }
    fetchData()
  }, [])

  return (
    <div className="mx-4 mb-10 xl:mx-60 lg:mx-24 md:mx-16 sm:mx-6">
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {projectList &&
          projectList.map((item, index) => {
            return (
              <ImgCard
                key={index.toString()}
                name={item.id}
                item={item.data}
              ></ImgCard>
            )
          })}
      </div>
    </div>
  )
}

export default ImgCards
