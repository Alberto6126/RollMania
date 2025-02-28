import React from 'react';
import './App.css';
import Die from './Die.js';

function GetDice(quantity, roll, dieClass, values) {
    let diceList = [];
    for (let i = 0; i < quantity; i++) {
        diceList.push(<Die key={i} roll={roll} className={dieClass} value={values[i]} />);
    }
    return diceList;
}

function Dice({ quantity, roll, classNa, values }) {
    const dieClass = classNa === "EnemyStructure" ? "EnemyDie" : "Die";
    // console.log("Dice class: ", dieClass);
    return (
        <div className={classNa}>
            {GetDice(quantity, roll, dieClass, values)}
        </div>
    );
}

export default Dice;