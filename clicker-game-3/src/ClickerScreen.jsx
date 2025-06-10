import pixminn from './assets/pixminn.png';
import { useState } from 'react';
import Upgrades from './Upgrades';
import Stats from './Stats';
import Achievements from './Achievements';


function ClickerScreen({setScreen}) {
    
    const [section, setSection] = useState("Stats")
    const [dabloons, setDabaloons] = useState(0);
    const [increaseAmount, setIncreaseAmount] = useState(1);
    const [upgrade1Cost, setUpgrade1Cost] = useState(30);

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
        setDabaloons(dabloons + increaseAmount);
    };

    const handleUpgrade1 = () => {
        if(dabloons >= upgrade1Cost) {
            alert("You bought upgrade 1!");
            setIncreaseAmount(increaseAmount + 1);
            setDabaloons(dabloons - 30)
        }else {
            alert("Not enough Dabloons");
        }
    };

    return (
        <div className="clicker-stage">
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
                    {section === "Upgrades" && <Upgrades/>}
                    {section === "Stats" && <Stats/>}
                    {section === "Achievements" && <Achievements/>}
                </div>
            </div>
        </div>
    );
}

export default ClickerScreen;