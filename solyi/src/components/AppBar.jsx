const AppBar = props => {
  return (
    <header className="bg-my-color">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Choi Solyi</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div>아이콘</div>
      </nav>
    </header>
    // <div className="w-full flex justify-center content-center">
    //   aasdfdsafafdsbc
    // </div>
  )
}

export default AppBar
