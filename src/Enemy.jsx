const Encounter = (enemy, onclick) => {
    return(
        <>
        <img id={enemy.id}
        className="enemy"
        src = {enemy.pic}
        width = {'200xp'}
        onClick = {onclick}/>
        </>
    )
}

export default Encounter