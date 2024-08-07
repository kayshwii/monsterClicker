import { useState } from "react";
import goblin from './assets/goblin.png'
import goblinHurt from './assets/goblin_hurt.png'

const upgrades = [{
    id: 'x10',
    name: 'Buy Dagger',
    cost: 5,
    multiplier: 10,
    showUpgrade: true
},{
    id: 'x100',
    name: 'Buy Sword',
    cost: 30,
    multiplier: 20,
    showUpgrade: true
}]

const enemies = [{
    id: 0,
    name: 'Goblino',
    health: 25,
    gp: 1,
    pic: goblin,
    hit: goblinHurt
}]

const HpBar = ({hpMax = 100, hp = 100}) => {
    const currentHealth = (hp / hpMax) * 100
    return(
        <>
        <div className = 'barBackground'
            style={{width: '200px',
                height: '25px',
                backgroundColor: 'gray',
                position: 'relative',
                boxSizing: 'border-box',
                margin: 'auto',
                borderRadius: '10px',
                padding: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
        }}>
            <div className="maxHealth"
            style={{width: '100%',
                height: '15px',
                backgroundColor: 'red',
                position: 'relative',
                boxSizing: 'border-box',
                borderRadius: '5px',
            }}>
                <div className="currentHealth"
                style={{width: `${currentHealth}%`,
                    height: '15px',
                    backgroundColor: 'green',
                    position: 'relative',
                    boxSizing: 'border-box',
                    borderRadius: '5px',
                    transition: 'width 0.6s cubic-bezier(0.47, 1.64, 0.41, 0.8)'

                }}>
                </div>
            </div>
            <div
            style={{
                position: 'absolute',
                }}>
            {hp} / {hpMax}
            </div>
        </div>
        
        </>
    )
}


export default function App() {
    const hpMax = 25
    const [gold, setGold] = useState(50)
    const [hp, setHp] = useState(hpMax)
    const [playerDamage, setPlayerDamage] = useState(1)

    const upgradeOption = (upgrade) => () => {
        setGold(gold - upgrade.cost)
        setPlayerDamage(upgrade.multiplier)
        upgrade.showUpgrade = false
    }

    const attack = () => {
        console.log(hpMax)
        setHp(hp - playerDamage)
    }

    const reset = () => {
        setGold(0)
        setHp(hpMax)
        setPlayerDamage(1)
        upgrades.forEach(upgrade =>
            upgrade.showUpgrade = true
        )
    }

    //damage handler
    if(hp <= 0) {
        setGold (gold + enemies[0].gp)
        setHp(hpMax)
    }

    
    return(
        <>
        <h3>Gold: {gold}</h3>
        <HpBar hp={hp} hpMax={hpMax} />
        <img src = {enemies[0].pic}
        width = {'200xp'}
        style = {{display: 'block'}}
        onClick = {attack}/>

        {upgrades.map((upgrade) => (
            gold >= upgrade.cost && upgrade.showUpgrade && <button
            type = 'button'
            key = {upgrade.name}
            onClick = {upgradeOption(upgrade)}
            style={{
                display: 'block',
                margin: 'auto'
            }}
            >
            {upgrade.name}
            </button>
        ))}
        <button
        onClick={reset}
        style={{
            display: 'block',
            margin: 'auto'
        }}
      >
        Reset
      </button>
        </>
    )
}