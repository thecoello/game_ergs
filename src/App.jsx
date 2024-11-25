import { useState } from 'react'
import imageBg from '/images/bg_forms.png'
import ButtonStart from './components/ButtonStart'
import Navigation from './components/Navigation'
import Options from './components/Options'


function App() {

  const [play, setPlay] = useState(false)

  const playing = (value)=>{
    setPlay(value)
  }


  return (
    <div className="w-screen h-screen bg-dellBlue flex items-center justify-center">
      
      <Navigation playing={play} changePlay={playing} />

      <div className='fixed z-10 flex items-center justify-center w-full h-full left-0 top-0'>

      {!play ? <ButtonStart changePlay={playing} /> : <Options /> }

      </div>

      <div className='absolute top-0 left-0 object-fill w-full h-full'>
        <img className="w-auto h-auto opacity-55" src={imageBg} alt="Background Image" />
      </div>

    </div>
  )
}

export default App
