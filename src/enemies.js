import goblin from './assets/goblin.png'
import ogre from './assets/ogre.png'
import cyclops from './assets/cyclops.png'
import ghost from './assets/ghost.png'
import zombie from './assets/zombie.png'
import mummy from './assets/mummy.png'

export const enemies = [{
    id: 0,
    name: 'Goblino',
    health: 25,
    gp: 1,
    pic: goblin,
},{
    id: 1,
    name: 'Pogre',
    health: 40,
    gp: 2,
    pic: ogre,
},{
    id: 2,
    name: 'Whyclop',
    health: 100,
    gp: 4,
    pic: cyclops,
},{
    id: 3,
    name: 'Spooky',
    health: 40,
    gp: 2,
    pic: ghost,
},{
    id: 4,
    name: 'Redead',
    health: 40,
    gp: 2,
    pic: zombie,
},{
    id: 5,
    name: 'Tut',
    health: 40,
    gp: 2,
    pic: mummy,
}]