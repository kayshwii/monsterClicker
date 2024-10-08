const UpgradeButtons = ({button, upgradeOption, gold}) => {
    const disableButton = gold >= button.cost
    return (
    <>
        {button.showUpgrade &&
        <button className="menuButtons"
            disabled = {!disableButton}
            type = 'button'
            key = {button.name}
            onClick = {upgradeOption}
            >
            {button.name}: <br></br>
            {button.cost} gold<br></br>
            <i>{button.description}</i>
        </button>
        }
    </>)
}

export default UpgradeButtons