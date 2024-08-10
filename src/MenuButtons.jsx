const MenuButtons = ({menuButton, onClick}) => {
    return (
    <>
        <button className="upgrades"
            type = 'button'
            key = {menuButton.name}
            onClick = {onClick}
            >
                {menuButton.name}
        </button>
    </>)
}


export default MenuButtons