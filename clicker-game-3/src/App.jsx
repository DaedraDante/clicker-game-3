import { useState } from 'react'
import MainMenu from './MainMenu'
import ClickerScreen from './ClickerScreen'

function App() {
  
  const [screen, setScreen] = useState('MainMenu')
  return (
    <>
    {screen === 'MainMenu' && <MainMenu onPlay={() => setScreen('ClickerScreen')} 
    onOptions={() => setScreen('options')} 
    onCredits={() => setScreen('credits')} />}
    {screen === 'ClickerScreen' && <ClickerScreen setScreen={setScreen} />}
    </>
    
  )
}

export default App
