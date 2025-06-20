import pixminn from './assets/pixminn.png';
import { use, useState } from 'react';
import Upgrades from './Upgrades';
import Stats from './Stats';
import Achievements from './Achievements';
import clickSoundFile from '/src/assets/button-pressed-38129.mp3';
import music1 from '/src/assets/Jeremy Blake - Powerup!  NO COPYRIGHT 8-bit Music.mp3';

function ClickerScreen({setScreen}) {
    const [clickSound] = useState(() => new Audio(clickSoundFile));
    // const [music1] = useState(() => new Audio(music1));
    // music1.play();
    const [totalClicks, setTotalCicks] = useState(0);
    const [clickForce, setClickForce] = useState(1);
    const [cps, setCps] = useState(0);
    const [achievementTotal, setAchievementTotal] = useState(0);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [popUpVisibility,setPopUpVisibility] = useState(false);
    const [popUpText, setPopUpText] = useState("");
    const [section, setSection] = useState("Upgrades");
    const [dabloons, setDabloons] = useState(0);
    const [increaseAmount, setIncreaseAmount] = useState(1);
    const [upgrade1Cost, setUpgrade1Cost] = useState(30);
    const [upgrade2Cost, setUpgrade2Cost] = useState(30);
    const [upgrade3Cost, setUpgrade3Cost] = useState(30);
    const [upgrade4Cost, setUpgrade4Cost] = useState(30);
    const [upgrade1Qty, setUpgrade1Qty] = useState(0);
    const [upgrade2Qty, setUpgrade2Qty] = useState(0);
    const [upgrade3Qty, setUpgrade3Qty] = useState(0);
    const [upgrade4Qty, setUpgrade4Qty] = useState(0);

    const backToMenu = () => {
    setScreen("MainMenu")
    }
    const playClickSound = () => {
        clickSound.currentTime = 0; // Reset sound to start
        clickSound.play().catch(error => {
            console.error("Error playing sound:", error);
        });
    };
    const handleMouseMove = (event) => {
    // const rect = event.target.getBoundingClientRect()
    setCursorPosition({
        x: event.clientX,
        y: event.clientY
    });
    };

    const displayPopUp = (popUpText) => {
    setPopUpVisibility(true);
    setPopUpText(popUpText);
    };

    const handleUpgradeSectionChange = () => {
    setSection("Upgrades");
    };
    const handleStatsSectionChange = () => {
    setSection("Stats");
    };
    const handleAchievementsSectionChange = () => {
    setSection("Achievements");
    };

    const handleClick = () => {
    setDabloons(dabloons + clickForce);
    setTotalCicks(totalClicks + 1);
    };

    return (
    <div className="clicker-stage" onMouseMove={handleMouseMove}>
        {popUpVisibility === true && 
        <div className='popup' style={{position:"absolute",top:cursorPosition.y + "px",left:cursorPosition.x + "px"}}>
            <p>{popUpText}</p>
        </div>
        }
        {/* <p>x: {cursorPosition.x} y: {cursorPosition.y}</p> */}
        <button className='menu-btn' onClick={() => {backToMenu(),playClickSound()}}>Back to menu</button>
        <div className="img-div">
            <img src={pixminn} alt="Pixmin Img" className='pixmin-img' onClick={handleClick}/>
            <h1 className='money-text'>{dabloons} Dabloons</h1>
            <h5 className='click-force-text'>{clickForce} Click Force</h5>
            <h5 className='cps-text'>{cps} Clicks per second</h5>
        </div>
        <div className='right-div'> 
            <div className='select-bar'>
                <div className='upgrades-img'>
                    <h2 onClick={handleUpgradeSectionChange}>Upgrades</h2>
                </div>
                <div className='stats-img'>
                    <h2 onClick={handleStatsSectionChange}>Stats</h2>
                </div>
                <div className='achievements-img'>
                    <h2 onClick={handleAchievementsSectionChange}>Achievements</h2>
                </div>
            </div>
            <div className='content-div'>
                {section === "Upgrades" && <Upgrades 
                    clickSound={clickSound}
                    playClickSound={playClickSound}
                    dabloons={dabloons} 
                    setDabloons={setDabloons} 
                    clickForce={clickForce}
                    setClickForce={setClickForce}
                    upgrade1Cost={upgrade1Cost}
                    setUpgrade1Cost={setUpgrade1Cost}
                    upgrade2Cost={upgrade2Cost}
                    setUpgrade2Cost={setUpgrade2Cost}
                    upgrade3Cost={upgrade3Cost}
                    setUpgrade3Cost={setUpgrade3Cost}
                    upgrade4Cost={upgrade4Cost}
                    setUpgrade4Cost={setUpgrade4Cost}
                    cursorPosition={cursorPosition}
                    setPopUpVisibility={setPopUpVisibility}
                    setPopUpText={setPopUpText}
                    displayPopUp={displayPopUp}
                    totalClicks={totalClicks}
                    setTotalCicks={setTotalCicks}
                    cps={cps}
                    setCps={setCps}
                    upgrade1Qty={upgrade1Qty}
                    setUpgrade1Qty={setUpgrade1Qty}
                    upgrade2Qty={upgrade2Qty}
                    setUpgrade2Qty={setUpgrade2Qty}
                    upgrade3Qty={upgrade3Qty}
                    setUpgrade3Qty={setUpgrade3Qty}
                    upgrade4Qty={upgrade4Qty}
                    setUpgrade4Qty={setUpgrade4Qty}   
                    />}
                {section === "Stats" && <Stats
                    cursorPosition={cursorPosition}
                    setPopUpVisibility={setPopUpVisibility}
                    setPopUpText={setPopUpText}
                    displayPopUp={displayPopUp}
                    totalClicks={totalClicks}
                    setTotalCicks={setTotalCicks}
                    clickForce={clickForce}
                    setClickForce={setClickForce}
                    cps={cps}
                    setCps={setCps}/>}
                {section === "Achievements" && <Achievements/>}
            </div>
        </div>
    </div>
    );
}

export default ClickerScreen;