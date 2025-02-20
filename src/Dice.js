import './Dice.css';
import { useState } from 'react';

function Dice() {
  // let randomNum; 
  let [number, setNumber] = useState(1);
  number = Math.floor(Math.random()*6) + 1

  function roll()
  {
    let randomNum = Math.floor(Math.random()*6) + 1;
    // console.log("Random:" + randomNum);
    // console.log("Num Ant:" + number);
        while(randomNum == number){
      randomNum = (Math.floor(Math.random()*6) + 1);
    }
    setNumber(randomNum);
  }


  return (
    <button className='Dice' onClick={roll}>
      <p className='DiceNumber'>{number}</p>
    </button>
  );
}

export default Dice;
