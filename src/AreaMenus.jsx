const AreaMenus = ({explorationArea, setMenu, buttonsList = [], ButtonComponent, handleEnemy}) => {
    return (
        <div id="menu" className="menu">
                <div className="menuHeader">
                    <div className="menuHeaderText">
                        <h3 className="title">{explorationArea.name}</h3>
                        <p className="headerText"><i>{explorationArea.headerText}</i></p>
                    </div>
                    <div className="menuHeaderReturn">
                        <button className="returnButton"
                            onClick={() => setMenu('home')}>
                            Home
                        </button>
                    </div>
                </div>
                <div className="menuButtonBox">
                    <button className="menuButtons"
                    onClick={()=> setMenu('explore')}>Back</button>
                    {buttonsList.map((button) => (
                        <ButtonComponent key={button.id} 
                        button={button}
                        handleEnemy={handleEnemy(button)}
                        />
                    ))}
                </div>
            </div>
    )
}

export default AreaMenus