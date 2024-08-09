import { useState } from "react";
import HpBar from './HpBar.jsx'
import { enemies } from "./enemies.js";
import { upgrades } from "./upgrades.js";
import UpgradeButtons from "./UpgradeButtons.jsx";

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
        {/*Display Gold */}
        <h3>Gold: {gold}</h3>

        {/*Display Monster HP */}
        <HpBar hp={hp} hpMax={hpMax} />

        {/*Display Monster*/}
        <img id="enemy"
        className="enemy"
        src = {enemies[0].pic}
        onClick = {attack}/>

        {/*Display Shop*/}
        <div id="shop" className="shop">
            <div className="menuHeader">
                <h3 className="title">The Shop</h3>
                <p className="quote"><i>"Waddaya have?"</i></p>
            </div>
            <div className="menuButtons">
            {upgrades.map((upgrade) => (
                <UpgradeButtons key={upgrade.id} upgrade={upgrade} onClick={upgradeOption(upgrade)} gold = {gold} />
                ))}
            </div>
        </div>
        
        
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