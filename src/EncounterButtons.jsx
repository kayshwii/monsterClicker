const EncounterButtons = ({button, handleEnemy}) => {
    return (
        <>
            <button className="menuButtons"
            type = 'button'
            key = {button.name}
            onClick={handleEnemy}
            >
                {button.name}
        </button>
        </>
    )
}

export default EncounterButtons