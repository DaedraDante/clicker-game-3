
function MainMenu({onPlay, onOptions, onCredits}) {
    return (
        <>
          <div>
              <h1 className="game-title">Pixmin</h1>
              <div className="main-menu-buttons-div">
                <button class="button" onClick={onPlay}>
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <div class="front">
                        <span>Play</span>
                    </div>
                </button>
                <button class="button">
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <div class="front">
                        <span>Options</span>
                    </div>
                </button>
                <button class="button">
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <div class="front">
                        <span>Credits</span>
                    </div>
                </button>
               </div>
          </div>
        </>
    )
}
export default MainMenu;