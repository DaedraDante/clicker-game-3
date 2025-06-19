
function MainMenu({onPlay, onOptions, onCredits, clickSound, setClickSound}) {
    return (
        <>
          <div>
              <h1 className="game-title">Pixmin</h1>
              <div className="main-menu-buttons-div">
                <button className="button" onClick={() => {onPlay(),clickSound.play()}}>
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <div className="front">
                        <span>Play</span>
                    </div>
                </button>
                <button className="button" onClick={() => {clickSound.play()}}>
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <div className="front">
                        <span>Options</span>
                    </div>
                </button>
                <button className="button" onClick={() => {clickSound.play()}} >
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <div className="front">
                        <span>Credits</span>
                    </div>
                </button>
               </div>
          </div>
        </>
    )
}
export default MainMenu;