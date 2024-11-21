import { useGSAP } from "@gsap/react"
import gsap, { Back, Expo, Power2 } from "gsap"
import { useRef} from "react"

function ButtonStart(props) {

  const button = useRef()

  useGSAP(()=>{
    const tlButton = new gsap.timeline({repeat: -1, yoyo: true})
    tlButton.fromTo(button.current,0.9,{scale: 1},{scale: 1.2, ease: Power2.easeInOut})
  })

  return (

      <span onClick={()=>{props.changePlay(true)}} ref={button} className="text-[4rem] font-bold bg-white p-4 pl-10 pr-10 rounded-3xl text-dellBlueIntense cursor-pointer">¡Juega y gana!</span>
  
  )
}

export default ButtonStart
