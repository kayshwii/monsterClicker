const Encounter = ({enemy, onClick}) => {
    return(
        <>
        <h3 className="enemyName">{enemy.name}</h3>
        <img id={enemy.id}
        className="enemy"
        src = {enemy.pic}
        width = {'200xp'}
        onClick={onClick} />
        </>
    )
}

export default Encounter