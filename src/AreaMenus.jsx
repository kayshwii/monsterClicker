const MenuDisplay = ({explorationArea, setMenu, handleArea, gold, buttonsList = [], ButtonComponent}) => {
    return (
        <div id="menu" className="menu">
                <div className="menuHeader">
                    <div className="menuHeaderText">
                        <h3 className="title">{explorationArea.name}</h3>
                        <p className="headerText"><i>"{explorationArea.headerText}</i></p>
                    </div>
                    <div className="menuHeaderReturn">
                        <button className="returnButton"
                            onClick={() => setMenu('home')}>
                            Home
                        </button>
                    </div>
                </div>
                <div className="menuButtonBox">
                    {buttonsList.map((button) => (
                        <ButtonComponent key={button.id} handleArea={handleArea(button)} button={button} gold={gold} />
                    ))}
                </div>
            </div>
    )
}

export default MenuDisplay