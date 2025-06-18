import pixminn from './assets/pixminn.png';
import { useState } from 'react';
import Upgrades from './Upgrades';
import Stats from './Stats';
import Achievements from './Achievements';


function ClickerScreen({setScreen}) {
    
    const [totalClicks, setTotalCicks] = useState(0);
    const [clickForce, setClickForce] = useState(1);
    const [cps, setCps] = useState(1);
    const [achievementTotal, setAchievementTotal] = useState(0);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [popUpVisibility,setPopUpVisibility] = useState(false);
    const [popUpText, setPopUpText] = useState("");
    const [section, setSection] = useState("Upgrades");
    const [dabloons, setDabaloons] = useState(0);
    const [increaseAmount, setIncreaseAmount] = useState(1);
    const [upgrade1Cost, setUpgrade1Cost] = useState(30);

    const backToMenu = () => {
        setScreen("MainMenu")
    }

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
        setDabaloons(dabloons + clickForce);
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
            <button className='menu-btn' onClick={backToMenu}>Back to menu</button>
            <div className="img-div">
                <img src={pixminn} alt="Pixmin Img" className='pixmin-img' onClick={handleClick}/>
                <h1 className='money-text'>{dabloons} Dabloons</h1>
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
                        dabloons={dabloons} 
                        setDabaloons={setDabaloons} 
                        clickForce={clickForce}
                        setClickForce={setClickForce}
                        upgrade1Cost={upgrade1Cost}
                        setUpgrade1Cost={setUpgrade1Cost}
                        cursorPosition={cursorPosition}
                        setPopUpVisibility={setPopUpVisibility}
                        setPopUpText={setPopUpText}
                        displayPopUp={displayPopUp}
                        totalClicks={totalClicks}
                        setTotalCicks={setTotalCicks}
                        cps={cps}
                        setCps={setCps}/>}
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