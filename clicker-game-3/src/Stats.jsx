
function Stats({totalClicks, setTotalClicks,cps, setCps, clickForce, setClickForce}) {
    return (       
     <div className='stats-div'>
        <p>Hours played</p>
        <p>3</p>
        <p>Total clicks</p>
        <p>{totalClicks}</p>
        <p>Click force</p>
        <p>{clickForce}</p>
        <p>Clicks per second</p>
        <p>{cps}</p>
        <p>Achievements earned</p>
        <p>12</p>
    </div>
    )
}

export default Stats;