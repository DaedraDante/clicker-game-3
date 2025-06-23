
function Options({setScreen}) {

    const backToMenu = () => {
      setScreen("MainMenu")
    };

    return (
        <>
          <div className="options">
            <h2>Options</h2>
            <div className="options-inner1">
              <p>Volume</p>
              <p>0</p>
              <p>Music</p>
              <p>Track 1</p>
              <p>Theme</p>
              <p>Green Two</p>
            </div>
            <div className="options-inner2">
              <button className="button" onClick={() => {backToMenu()}}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <div className="front">
              <span>Back to menu</span>
              </div>
              </button>
            </div>
          </div>
        </>
    )
}

export default Options