import React from 'react';
import Die from './Die.js';


function GetDice(quantity, roll){
    let diceList = [];
    for(let i = 0; i < quantity; i++){
        diceList.push(<Die key={i} roll={roll}/>)
    }
    // console.log(diceList);
    return diceList;
}

function Dice(prop){
    return(
    <section className = 'DiceStructure'>
        {GetDice(prop.quantity, prop.roll)}
    </section>
    );
}


export default Dice;