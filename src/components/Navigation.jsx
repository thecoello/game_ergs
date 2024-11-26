import logo from "/images/logo.png"

function Navigation(props) {

  return (
    <>
      <div className="fixed w-full z-50 left-0 top-0 p-8 text-[1.5rem] flex justify-between items-center">

        <span className="text-[2rem] w-1/3" ><img className="w-[60%]" src={logo} alt="" /></span>

    <span className="text-[2.2rem] w-1/3 text-center">Employee Resource Groups</span>

        {props.playing ? <span onClick={() => { props.changePlay(false) }} className="text-right text-[1.5rem] cursor-pointer font-light w-1/3 flex items-center justify-end gap-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
</svg>
 Volver</span> :         <span className="text-[2rem] w-1/3" ></span>
      }

      </div>
    </>
  )
}

export default Navigation
