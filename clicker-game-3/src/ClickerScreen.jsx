import pixminn from './assets/pixminn.png';
import { useState } from 'react';
function ClickerScreen({setScreen}) {
    
    const [dabloons, setDabaloons] = useState(0);
    const [increaseAmount, setIncreaseAmount] = useState(1);
    const [upgrade1Cost, setUpgrade1Cost] = useState(30);

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
                        <h2>Upgrades</h2>
                    </div>
                    <div className='stats-img'>
                        <h2>Stats</h2>
                    </div>
                    <div className='achievements-img'>
                        <h2>Achievements</h2>
                    </div>
                </div>
                <div className='content-div'>
                    <div className='upgrades-div'>
                        <div className="upgrade-div">
                            <p>Upgrade 1</p>
                            <button onClick={handleUpgrade1}>Buy</button>
                        </div>
                        <div className="upgrade-div">
                            <p>Upgrade 2</p>
                            <button>Buy</button>
                        </div>
                        <div className="upgrade-div">
                            <p>Upgrade 3</p>
                            <button>Buy</button>
                        </div>
                        <div className="upgrade-div">
                            <p>Upgrade 4</p>
                            <button>Buy</button>
                        </div>
                     </div>
                    <div className='stats-div'>
                        <h3>Hours played</h3>
                        <p>3</p>
                        <h3>Total clicks</h3>
                        <p>5923</p>
                        <h3>Click power</h3>
                        <p>32</p>
                        <h3>Clicks per second</h3>
                        <p>2.1</p>
                        <h3>Achievements earned</h3>
                        <p>12</p>
                    </div>
                    <div className='achievements-div'>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ClickerScreen;