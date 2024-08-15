import { useState } from "react";
import { enemies } from "./enemies.js";
import { upgrades } from "./upgrades.js";
import { explorationAreas } from "./eplorationAreas.js";
import { menus } from "./menus.js";
import HpBar from './HpBar.jsx'
import UpgradeButtons from "./UpgradeButtons.jsx";
import ExploreButtons from "./ExploreButtons.jsx";
import MenuButtons from "./MenuButtons.jsx";
import MenuDisplay from "./MenuDisplay.jsx";
import Encounter from "./Enemy.jsx";


export default function App() {
    
    const [activeEnemy, setActiveEnemy] = useState(enemies[0])
    const hpMax = activeEnemy.health
    const [gold, setGold] = useState(0)
    const [hp, setHp] = useState(hpMax)
    const [playerDamage, setPlayerDamage] = useState(1)
    const [menu, setMenu] = useState('home')


    
    //click handlers
    const upgradeOption = (upgrade) => () => {
        setGold(gold - upgrade.cost)
        setPlayerDamage(upgrade.multiplier)
        upgrade.showUpgrade = false
    }

    const menuHandle = (menuButton) => () => {
        setMenu(menuButton.id)
    }

    const handleEnemy = (enemy) => {
        setHp(enemy.health)
        setActiveEnemy(enemy)
    }

    const attack = () => {
        setHp(hp - playerDamage)
    }

    const reset = () => {
        setGold(0)
        setHp(hpMax)
        setPlayerDamage(1)
        setMenu('home')
        setActiveEnemy(enemies[0])
        upgrades.forEach(upgrade =>
            upgrade.showUpgrade = true
        )
    }

    //monster death handler
    hp <= 0 && (
        setGold(gold + activeEnemy.gp),
        setHp(hpMax))
   
    //menu reset handler
    menu === 'reset' && reset()
    
    
    return(
        <>
        {/*Display Gold */}
        <h3>Gold: {gold}</h3>

        {/*Display Monster HP */}
        <HpBar hp={hp} hpMax={hpMax} />

        {/*Display Monster*/}
        <Encounter enemy={activeEnemy} onClick={attack}></Encounter>


        {/*Display Menu*/}
        {menu === 'home' &&
            <div id="menu" className="menu">
                <div className="menuHeader">
                    <div className="menuHeaderText">
                        <h3 className="title">Home</h3>
                        <p className="headerText"><i>Welcome to Monster Clicker</i></p>
                    </div>
                </div>
                <div className="menuButtonBox">
                    {menus.map((menuButton) => (
                        <MenuButtons key={menuButton.id} menuButton={menuButton} onClick={menuHandle(menuButton)} />
                    ))}
                </div>
            </div>
        }

        {/*Display Shop*/}
        {menu === 'shop' &&
            <MenuDisplay 
            key={menus[0].id} 
            menu={menus[0]}
            setMenu={setMenu}
            upgradeOption={upgradeOption} 
            gold={gold}
            buttonsList={upgrades}
            ButtonComponent={UpgradeButtons}>
            </MenuDisplay>
        }

        {/*Display Player Info*/}
        {menu === 'player' &&
            <MenuDisplay 
            key={menus[1].id} 
            menu={menus[1]}
            setMenu={setMenu}
            upgradeOption={upgradeOption} 
            gold={gold}>
            </MenuDisplay>
        }

        {/*Display Explore*/}
        {menu === 'explore' &&
            <MenuDisplay 
            key={menus[2].id} 
            menu={menus[2]}
            setMenu={setMenu}
            upgradeOption={upgradeOption} 
            gold={gold}
            buttonsList={explorationAreas}
            ButtonComponent={ExploreButtons}>
            </MenuDisplay>
        }
        </>
    )
}