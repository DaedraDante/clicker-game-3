import { useEffect } from "react";

function Upgrades({dabloons,setDabloons,
                   upgrade1Cost, setUpgrade1Cost,upgrade2Cost, setUpgrade2Cost,
                   upgrade3Cost, setUpgrade3Cost,upgrade4Cost, setUpgrade4Cost,
                   clickForce, setClickForce,
                   cursorPosition, setPopUpVisibility, setPopUpText,
                   displayPopUp,cps,setCps,upgrade1Qty,setUpgrade1Qty,
                   upgrade2Qty,setUpgrade2Qty,upgrade3Qty,setUpgrade3Qty,
                   upgrade4Qty,setUpgrade4Qty,}) {

    //useEffect hook meant for autoClicking function that updates when 
    //the cps value changes
    useEffect(() => {
        if(cps > 0) {
           const intervalId = setInterval(() => {
                setDabloons(prevDabloons => prevDabloons + cps)
            }, 1000);
            
           return () => clearInterval(intervalId);
        }
    }, [cps]);
       // function meant for handling the Upgrade 1 Click Force
       const handleUpgrade1 = () => {
            if(dabloons >= upgrade1Cost && upgrade1Qty <= 10) {
                setClickForce(clickForce + 1);
                setDabloons(dabloons - upgrade1Cost);
                setUpgrade1Cost(Math.round(upgrade1Cost * 1.5));
                setUpgrade1Qty(prevUpgrade1Qty => prevUpgrade1Qty + 1);
                // console.log(upgrade1Qty)
            }else if(upgrade1Qty >= 10){
                alert("You maxed this upgrade");
            }else {
                alert("Not enough Dabloons");
            }
        };
       const handleUpgrade2 = () => {
          if(dabloons >= upgrade2Cost && upgrade2Qty <= 25) {
            setCps(prevCps => prevCps + 1);
            setDabloons(prevDabloons => prevDabloons - upgrade2Cost);
            setUpgrade2Cost(Math.round(upgrade2Cost * 1.5));
            setUpgrade2Qty(prevUpgrade2Qty => prevUpgrade2Qty + 1);
          }else if(upgrade2Qty >= 25) {
            alert("You maxed this upgrade");
          }else {
            alert("Not enough Dabloons");
          }
        }
        const handleAutoClick = () => {
            console.log(dabloons);
        }
        // for(let i = 0;i<5;i++) {
        //     handleAutoClick();
        // }
    return (
        <div className='upgrades-div'>
            <div className="upgrade-div">
                <p>Upgrade Click Force</p>
                <button onClick={handleUpgrade1} 
                        onMouseEnter={() => displayPopUp(`Cost:${upgrade1Cost}, +1 Click Force`)}
                        onMouseLeave={() => setPopUpVisibility(false)}
                        id="upgrade1Btn">Buy</button>
            </div>
            <div className="upgrade-div">
                <p>Hire Hobos</p>
                <button onClick={handleUpgrade2} 
                        onMouseEnter={() => displayPopUp(`Cost:${upgrade2Cost}, +1 CPS`)}
                        onMouseLeave={() => setPopUpVisibility(false)}
                        id="upgrade2Btn">Buy</button>
            </div>
            <div className="upgrade-div">
                <p>Hire Low Wage Workers</p>
                <button>Buy</button>
            </div>
            <div className="upgrade-div">
                <p>Hire Salary men</p>
                <button>Buy</button>
            </div>
        </div>
    )
 }

 export default Upgrades;