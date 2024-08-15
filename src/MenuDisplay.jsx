const MenuDisplay = ({menu, setMenu, upgradeOption, gold, buttonsList = [], ButtonComponent}) => {
    return (
        <div id="menu" className="menu">
                <div className="menuHeader">
                    <div className="menuHeaderText">
                        <h3 className="title">{menu.name}</h3>
                        <p className="headerText"><i>"{menu.headerText}</i></p>
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
                        <ButtonComponent key={button.id} upgrade={button} exploreButton={button} onClick={upgradeOption(button)} gold = {gold} />
                    ))}
                </div>
            </div>
    )
}

export default MenuDisplay