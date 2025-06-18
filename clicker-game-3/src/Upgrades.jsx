import { useEffect } from "react";

function Upgrades({dabloons,setDabaloons,
                   upgrade1Cost,clickForce, setClickForce, setUpgrade1Cost,
                   cursorPosition, setPopUpVisibility, setPopUpText,
                   displayPopUp,cps,setCps}) {

    useEffect(() => {
        
        if(cps > 0) {
           const intervalId = setInterval(() => {
                setDabaloons(prevDabloons => prevDabloons + cps)
            }, 1000);
            
           return () => clearInterval(intervalId);
        }
    }, [cps]);

       const handleUpgrade1 = () => {
            if(dabloons >= upgrade1Cost) {
                // alert("You bought upgrade 1!");
                setClickForce(clickForce + 1);
                setDabaloons(dabloons - upgrade1Cost)
                setUpgrade1Cost(Math.round(upgrade1Cost * 1.5))
            }else {
                alert("Not enough Dabloons");
            }
        };

        const handleAutoClick = () => {
            console.log(dabloons);
        }
        // for(let i = 0;i<5;i++) {
        //     handleAutoClick();
        // }
    return (
        <div className='upgrades-div'>
            <div className="upgrade-div">
                <p>Upgrade 1</p>
                <button onClick={handleUpgrade1} 
                        onMouseEnter={() => displayPopUp(`Cost:${upgrade1Cost}, +1 Click Force`)}
                        onMouseLeave={() => setPopUpVisibility(false)}>Buy</button>
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
    )
 }

 export default Upgrades;