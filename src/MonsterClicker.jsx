import { useState } from "react";
import goblin from './assets/goblin.png'
import goblinHurt from './assets/goblin_hurt.png'

const upgrades = [{
    id: 'x10',
    name: 'x 10',
    cost: 10,
    multiplier: 10,
    showUpgrade: true
},{
    id: 'x100',
    name: 'x 100',
    cost: 100,
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
    hpMax: 100,
    hpCurrent: 100,
    gp: 1,
    pic: goblin,
    hit: goblinHurt
}]

export default function App() {
    const [counter, setCounter] = useState(0)
    const [multiplier, setMultiplier] = useState(1)
    const [health, setHealth] = useState(enemies[0].hpMax)

    const upgradeOption = (upgrade) => () => {
        setCounter(counter - upgrade.cost)
        setMultiplier(upgrade.multiplier)
        if(upgrade.id === 'reset'){
            upgrade.showUpgrade = true
            reset()
        }else upgrade.showUpgrade = false
    }

    const attack = () => {
        setHealth(health - 1)
        if(health <= 0) {
            setHealth(enemies[0].hpMax)
            countClick()
        }
    }

    const countClick = () => {
        setCounter(counter + multiplier)
    }

    const reset = () => {
        setCounter(0)
        setMultiplier(1)
        upgrades.forEach(upgrade =>
            upgrade.showUpgrade = true
        )

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