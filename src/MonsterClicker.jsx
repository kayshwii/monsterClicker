import { useState } from "react";
import goblin from './assets/goblin.png'
import goblinHurt from './assets/goblin_hurt.png'

const upgrades = [{
    id: 'dagger',
    name: 'Dagger: 5 gold',
    cost: 5,
    multiplier: 10,
    showUpgrade: true
},{
    id: 'sword',
    name: 'Sword: 25 gold',
    cost: 25,
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
        <div className = 'barBackground'>
            <div className='maxHealth'>
                <div className='currentHealth'
                style={{width: `${currentHealth}%`}}>
                </div>
            </div>
            <div style={{position: 'absolute'}}>
                {hp} / {hpMax}
            </div>
        </div>
        
        </>
    )
}

const UpgradeButtons = ({upgrade, onClick, gold}) => {
    const disableButton = gold >= upgrade.cost
    return (
    <>
        {upgrade.showUpgrade &&
        <button 
            disabled = {!disableButton}
            type = 'button'
            key = {upgrade.name}
            onClick = {onClick}
            style={{
                display: 'block',
                margin: 'auto'
            }}
            >
            {upgrade.name}
        </button>
        }
    </>)
}

export default function App() {
    const hpMax = enemies[0].health
    const [gold, setGold] = useState(0)
    const [hp, setHp] = useState(hpMax)
    const [playerDamage, setPlayerDamage] = useState(1)

    const upgradeOption = (upgrade) => () => {
        setGold(gold - upgrade.cost)
        setPlayerDamage(upgrade.multiplier)
        upgrade.showUpgrade = false
    }

    const attack = () => {
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
        <UpgradeButtons key={upgrade.id} upgrade={upgrade} onClick={upgradeOption(upgrade)} gold = {gold} />
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