import { useState } from "react";
import { enemies } from "./enemies.js";
import { upgrades } from "./upgrades.js";
import { menus } from "./menus.js";
import HpBar from './HpBar.jsx'
import UpgradeButtons from "./UpgradeButtons.jsx";
import MenuButtons from "./MenuButtons.jsx";

const MenuWindow = ({menu}) => {
    return(
        <>
        <div id="menu" className="menu">
            <div className="menuHeader">
                <h3 className="title">{menu.title}</h3>
                <p className="quote"><i>{menu.quote}</i></p>
            </div>
            <div className="menuButtons">
            {menu.menuButtons}
            </div>
        </div>
        </>
    )
}

export default function App() {

    const hpMax = enemies[0].health

    const [gold, setGold] = useState(0)
    const [hp, setHp] = useState(hpMax)
    const [playerDamage, setPlayerDamage] = useState(1)
    const [menu, setMenu] = useState('home')
    
    const upgradeOption = (upgrade) => () => {
        setGold(gold - upgrade.cost)
        setPlayerDamage(upgrade.multiplier)
        upgrade.showUpgrade = false
    }

    const menuHandle = (menuButton) => () => {
        setMenu(menuButton.id)
    }

    const attack = () => {
        setHp(hp - playerDamage)
    }

    const reset = () => {
        setGold(0)
        setHp(hpMax)
        setPlayerDamage(1)
        setMenu('home')
        upgrades.forEach(upgrade =>
            upgrade.showUpgrade = true
        )
    }

    //monster death handler
    hp <= 0 && (
        setGold(gold + enemies[0].gp),
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
        <img id="enemy"
        className="enemy"
        src = {enemies[0].pic}
        width = {'200xp'}
        onClick = {attack}/>

        {/*Display Menu*/}
        {menu === 'home' &&
            <div id="menu" className="menu">
                <div className="menuHeader">
                    <div className="menuHeaderText">
                        <h3 className="title">Home</h3>
                        <p className="quote"><i>Welcome to Monster Clicker</i></p>
                    </div>
                </div>
                <div className="menuButtons">
                    {menus.map((menuButton) => (
                        <MenuButtons key={menuButton.id} menuButton={menuButton} onClick={menuHandle(menuButton)} />
                    ))}
                </div>
            </div>
        }

        {/*Display Shop*/}
        {menu === 'shop' &&
            <div id="menu" className="menu">
                <div className="menuHeader">
                    <div className="menuHeaderText">
                        <h3 className="title">The Shop</h3>
                        <p className="quote"><i>"Waddaya need?"</i></p>
                    </div>
                <div className="menuHeaderReturn">
                    <button className="returnButton"
                        onClick={() => setMenu('home')}>
                        Home
                    </button>
                </div>
                    
                </div>
                <div className="menuButtons">
                    {upgrades.map((upgrade) => (
                        <UpgradeButtons key={upgrade.id} upgrade={upgrade} onClick={upgradeOption(upgrade)} gold = {gold} />
                    ))}
                </div>
            </div>
        }

        {/*Display Player Info*/}
        {menu === 'player' &&
            <div id="menu" className="menu">
                <div className="menuHeader">
                    <div className="menuHeaderText">
                        <h3 className="title">Player Info</h3>
                        <p className="quote"><i>Coming soon!</i></p>
                    </div>
                <div className="menuHeaderReturn">
                    <button className="returnButton"
                        onClick={() => setMenu('home')}>
                        Home
                    </button>
                </div>
                    
                </div>
            </div>
        }

        {/*Display Explore*/}
        {menu === 'explore' &&
            <div id="menu" className="menu">
                <div className="menuHeader">
                    <div className="menuHeaderText">
                        <h3 className="title">More Monsters</h3>
                        <p className="quote"><i>Coming soon!</i></p>
                    </div>
                <div className="menuHeaderReturn">
                    <button className="returnButton"
                        onClick={() => setMenu('home')}>
                        Home
                    </button>
                </div>
                    
                </div>
            </div>
        }
        </>
    )
}