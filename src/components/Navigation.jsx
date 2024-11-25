import logo from "/images/logo.png"

function Navigation(props) {

  return (
    <>
      <div className="fixed w-full z-50 left-0 top-0 p-8 text-[1.5rem] flex justify-between items-center">

        <span className="text-[2rem] w-1/3" ><img className="w-[60%]" src={logo} alt="" /></span>

        <span className="font-normal w-1/3 text-center">Employee Resource Groups</span>

        {props.playing ? <span onClick={() => { props.changePlay(false) }} className="w-1/3 text-right text-[1.8rem] cursor-pointer font-light"> Volver</span> :         <span className="text-[2rem] w-1/3" ></span>
      }

      </div>
    </>
  )
}

export default Navigation
