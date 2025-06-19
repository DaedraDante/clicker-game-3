import { useState } from 'react'
import MainMenu from './MainMenu'
import ClickerScreen from './ClickerScreen'

function App() {
  
  const [screen, setScreen] = useState('MainMenu')
  const [clickSound, setClickSound] = useState(new Audio('/src/assets/button-pressed-38129.mp3'));
  return (
    <>
    {screen === 'MainMenu' && <MainMenu onPlay={() => setScreen('ClickerScreen')} 
    onOptions={() => setScreen('options')} 
    onCredits={() => setScreen('credits')} 
    clickSound={clickSound}
/>}
    {screen === 'ClickerScreen' && <ClickerScreen setScreen={setScreen} />}
    </>
    
  )
}

export default App
