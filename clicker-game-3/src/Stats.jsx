
function Stats({totalClicks, setTotalClicks,cps, setCps, clickForce, setClickForce}) {
    return (       
     <div className='stats-div'>
        <h3>Hours played</h3>
        <p>3</p>
        <h3>Total clicks</h3>
        <p>{totalClicks}</p>
        <h3>Click force</h3>
        <p>{clickForce}</p>
        <h3>Clicks per second</h3>
        <p>{cps}</p>
        <h3>Achievements earned</h3>
        <p>12</p>
    </div>
    )
}

export default Stats;