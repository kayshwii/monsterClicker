import HpBar from "./HpBar"

const UpgradeButtons = ({upgrade, onClick, gold}) => {
    const disableButton = gold >= upgrade.cost
    return (
    <>
        {upgrade.showUpgrade &&
        <button className="upgrades"
            disabled = {!disableButton}
            type = 'button'
            key = {upgrade.name}
            onClick = {onClick}
            >
            {upgrade.name}: <br></br>
            {upgrade.cost} gold<br></br>
            <i>{upgrade.description}</i>
        </button>
        }
    </>)
}

export default UpgradeButtons