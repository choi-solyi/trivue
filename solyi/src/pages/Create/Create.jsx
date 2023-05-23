// import './App.css'
import Header from '../../components/layout/AppBar'
import ToastEditor from '../../components/editor/ToastEditor'

// const [count, setCount] = useState(0)
function Create() {
  return (
    <div>
      <div className="md:px-40">
        {/* <div className="px-40 sm:p-12 xs:p-12"> */}
        <ToastEditor></ToastEditor>
        {/* {a} */}
      </div>
    </div>
  )
}

export default Create
