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
    const [counter, setCounter] = useState(0)
    const [health, setHealth] = useState(enemies[0].hpMax)
    const [damage, setDamage] = useState(1)

    const upgradeOption = (upgrade) => () => {
        setCounter(counter - upgrade.cost)
        setDamage(upgrade.multiplier)
        if(upgrade.id === 'reset'){
            reset()
        }else upgrade.showUpgrade = false
    }

    const attack = () => {
        setHealth(health - damage)
    }

    const countClick = () => {
        setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(0)
        setMultiplier(1)
        setHealth(enemies[0].hpMax)
        upgrades.forEach(upgrade =>
            upgrade.showUpgrade = true
        )
    }

    //damage handler
    if(health <= 0) {
        setHealth(enemies[0].hpMax)
        countClick()
    }

    return(
        <>
        <h3>{counter}</h3>
        <progress 
        max={enemies[0].hpMax} 
        value={health} 
        />
        <img src = {enemies[0].pic}
        width={'200xp'}
        style={{display: 'block'}}
        onClick={attack}/>

        {upgrades.map((upgrade) => (
            counter >= upgrade.cost && upgrade.showUpgrade && <button
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