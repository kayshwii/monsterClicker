const ExploreButtons = ({exploreButton, onClick}) => {
    return (
        <>
            <button className="menuButtons"
            type = 'button'
            key = {exploreButton.name}
            onClick = {onClick}
            >
                {exploreButton.name}
        </button>
        </>
    )
}

export default ExploreButtons