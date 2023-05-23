import snowimg from '../../assets/snow.jpg'
const Imgs = props => {
  return (
    <div className="mx-4 xl:mx-60 lg:mx-24 md:mx-16 sm:mx-6">
      <div className="grid gap-6 py-12 text-5xl text-center bg-my-bg-color sm:py-32 lg:grid-cols-6 sm:grid-cols-2 ">
        <div
          className="bg-my-color-1 lg:col-span-2 lg:row-span-2 sm:col-span-2 sm:row-span-2 hover:bg-my-color-8 text-white font-bold 
          py-36 px-4 border rounded-lg lg:bg-top 
          md:bg-[center_top_-10rem] sm:bg-[center_top_-10rem]"
          style={{
            backgroundImage: `url(${snowimg})`,
            backgroundSize: 'cover',
          }}
        ></div>
        {/* <button>Engineer</button> */}
        <button className="px-4 py-16 text-4xl font-bold text-white border rounded-lg bg-my-color-2 hover:bg-my-color-8">
          Learn
        </button>
        <button className="px-4 py-16 text-4xl font-bold text-white border rounded-lg bg-my-color-3 hover:bg-my-color-8">
          CHOI
        </button>
        <button className="px-4 py-16 text-5xl font-bold text-white border rounded-lg bg-my-color-5 lg:col-span-2 sm:col-span-2 hover:bg-my-color-8">
          Sol
        </button>
        <button className="px-4 py-16 text-5xl font-bold text-white border rounded-lg bg-my-color-4 lg:col-span-2 sm:col-span-2 hover:bg-my-color-8">
          LOL
        </button>
        <button className="px-4 py-16 text-5xl font-bold text-white border rounded-lg bg-my-color-6 lg:col-span-2 sm:col-span-2 hover:bg-my-color-8">
          yi
        </button>
      </div>
    </div>
  )
}

export default Imgs
