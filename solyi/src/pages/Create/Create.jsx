// import './App.css'
import Header from '../../components/AppBar'
import ToastEditor from '../../components/ToastEditor'

// const [count, setCount] = useState(0)
function Create() {
return (
    <div>
      <Header></Header>
      <div className="px-40 sm:p-12 xs:p-12">
        <ToastEditor></ToastEditor>
        {/* {a} */}
      </div>
    </div>
  )
}

export default Create
