const MenuButtons = ({menuButton, onClick}) => {
    return (
    <>
        <button className="menuButtons"
            type = 'button'
            key = {menuButton}
            onClick = {onClick}
            >
                {menuButton.name}
        </button>
    </>)
}


export default MenuButtons