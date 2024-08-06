import { useState } from "react";
import goblin from './assets/goblin.png'
import goblinHurt from './assets/goblin_hurt.png'

const upgrades = [{
    id: 'x10',
    name: 'x 10',
    cost: 5,
    multiplier: 10,
    showUpgrade: true
},{
    id: 'x100',
    name: 'x 100',
    cost: 30,
    multiplier: 100,
    showUpgrade: true
},{
    id: 'reset',
    name: 'Reset',
    cost: 0,
    showUpgrade: true
}]

const enemies = [{
    id: 0,
    name: 'Goblino',
    hpMax: 25,
    hpCurrent: 25,
    gp: 1,
    pic: goblin,
    hit: goblinHurt
}]


export default function App() {
    const [gold, setGold] = useState(0)
    const [monsterHealth, setMonsterHealth] = useState(enemies[0].hpMax)
    const [playerDamage, setPlayerDamage] = useState(1)

    const upgradeOption = (upgrade) => () => {
        setGold(gold - upgrade.cost)
        setPlayerDamage(upgrade.multiplier)
        if(upgrade.id === 'reset'){
            reset()
        }else upgrade.showUpgrade = false
    }

    const attack = () => {
        setMonsterHealth(monsterHealth - playerDamage)
    }

    const reset = () => {
        setGold(0)
        setMultiplier(1)
        setmonsterHealth(enemies[0].hpMax)
        upgrades.forEach(upgrade =>
            upgrade.showUpgrade = true
        )
    }

    //damage handler
    if(monsterHealth <= 0) {
        setMonsterHealth(enemies[0].hpMax)
        setGold (gold + enemies[0].gp)
    }

    return(
        <>
        <h3>Gold: {gold}</h3>
        <progress 
        max={enemies[0].hpMax} 
        value={monsterHealth} 
        />
        <img src = {enemies[0].pic}
        width={'200xp'}
        style={{display: 'block'}}
        onClick={attack}/>

        {upgrades.map((upgrade) => (
            gold >= upgrade.cost && upgrade.showUpgrade && <button
            type = 'button'
            key = {upgrade.name}
            onClick = {upgradeOption(upgrade)}
            >
            {upgrade.name}
            </button>
        ))}
    
        </>
    )
}