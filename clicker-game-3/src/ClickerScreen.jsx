import pixminn from './assets/pixminn.png';
import { useState } from 'react';
function ClickerScreen({setScreen}) {
    
    const [dabloons, setDabaloons] = useState(0);

    const handleClick = () => {
        setDabaloons(dabloons + 1);
    };

    return (
        <div className="clicker-stage">
            <div className="img-div">
                <img src={pixminn} alt="Pixmin Img" className='pixmin-img' onClick={handleClick}/>
                <h1 className='money-text'>{dabloons} Dabloons</h1>
            </div>
            <div className='upgrades-div'>
                <div className="upgrade-div">
                     <p>Upgrade 1</p>
                     <button>Buy</button>
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
        </div>
    );
}

export default ClickerScreen;