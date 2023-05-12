const Imgs = props => {
  return (
    <div className="sm:p-12 xs:p-12">
      <div className="lg:px-40 lg:py-3 bg-my-color text-center text-5xl  py-12 sm:py-32 grid lg:grid-cols-6 gap-6">
        <button className="lg:col-span-2 lg:row-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-16 px-4 border border-blue-700 rounded-lg">
          01
        </button>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-16 px-4 border border-blue-700 rounded-lg">
          02
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-16 px-4 border border-blue-700 rounded-lg">
          03
        </button>
        <button className="lg:col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-16 px-4 border border-blue-700 rounded-lg">
          04
        </button>
        <button className="lg:col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-16 px-4 border border-blue-700 rounded-lg">
          05
        </button>
        <button className="lg:col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-16 px-4 border border-blue-700 rounded-lg">
          06
        </button>
      </div>
    </div>
  )
}

export default Imgs
