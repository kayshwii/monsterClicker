const ExploreButtons = ({button, handleArea}) => {
    return (
        <>
            <button className="menuButtons"
            type = 'button'
            key = {button.name}
            onClick = {handleArea}
            >
                {button.name}
        </button>
        </>
    )
}

export default ExploreButtons