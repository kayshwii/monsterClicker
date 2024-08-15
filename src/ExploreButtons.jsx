const ExploreButtons = ({button, onClick}) => {
    return (
        <>
            <button className="menuButtons"
            type = 'button'
            key = {button.name}
            onClick = {onClick}
            >
                {button.name}
        </button>
        </>
    )
}

export default ExploreButtons