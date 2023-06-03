// import './App.css'
import Header from '../../components/layout/AppBar'
import ToastEditor from '../../components/editor/ToastEditor'
import SectionTitle from '../../components/layout/SectionTitle'
import Forms from '../../components/editor/Forms'
// const [count, setCount] = useState(0)
function Create() {
  return (
    <div>
      <div className="mx-4 mb-10 xl:mx-60 lg:mx-24 md:mx-16 sm:mx-6">
        <SectionTitle name="내용 추가"></SectionTitle>
        <Forms></Forms>
        <ToastEditor></ToastEditor>
      </div>
    </div>
  )
}

export default Create
