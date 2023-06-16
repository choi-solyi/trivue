const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]
const Title = props => {
  return (

    <div className="m-10 mx-4 xl:mx-60 lg:mx-24 md:mx-16 sm:mx-6">
      <div>
         <p className='my-4 text-5xl'>Hi😄,</p>
         <p className='my-4 text-5xl'>My name is</p>
         <p className='my-4 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-my-color-1 to-my-color-3'>Solyi Choi</p>
         <p className='my-4 text-2xl lg:text-5xl '>I build things for web 👩‍💻</p>
       </div>
    </div>
  //   <div className="relative p-24 overflow-hidden isolate sm:py-32">
  //   <div>
  //     <p>Hi👩‍💻,</p>
  //     <p>My name is</p>
  //     <p>Solyi Choi</p>
  //     <p>I build things for web</p>
  //   </div>
  //  <img
  //    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
  //    alt=""
  //    className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
  //  />
  //  <div
  //    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
  //    aria-hidden="true"
  //  >
  //    <div
  //      className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
  //      style={{
  //        clipPath:
  //          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  //      }}
  //    />
  //  </div>
  //  <div
  //    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
  //    aria-hidden="true"
  //  >
  //    <div
  //      className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
  //      style={{
  //        clipPath:
  //          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  //      }}
  //    />
  //  </div>
  //  <div className="px-6 mx-auto max-w-7xl lg:px-8">
  //    <div className="max-w-2xl mx-auto lg:mx-0">
  //      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
  //        Work with us
  //      </h2>
  //      <p className="mt-6 text-lg leading-8 text-gray-300">
  //        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
  //        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
  //        fugiat aliqua.
  //      </p>
  //    </div>
  //    <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
  //      <div className="grid grid-cols-1 text-base font-semibold leading-7 text-white gap-x-8 gap-y-6 sm:grid-cols-2 md:flex lg:gap-x-10">
  //        {links.map(link => (
  //          <a
  //            key={link.name}
  //            href={link.href}
  //          >
  //            {link.name} <span aria-hidden="true">&rarr;</span>
  //          </a>
  //        ))}
  //      </div>
  //      <dl className="grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
  //        {stats.map(stat => (
  //          <div
  //            key={stat.name}
  //            className="flex flex-col-reverse"
  //          >
  //            <dt className="text-base leading-7 text-gray-300">
  //              {stat.name}
  //            </dt>
  //            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
  //              {stat.value}
  //            </dd>
  //          </div>
  //        ))}
  //      </dl>
  //    </div>
  //  </div> 
  // </div>
  )
}

export default Title
