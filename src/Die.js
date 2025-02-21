import './Die.css';
import { useState } from 'react';

function Die(props) {
  // let randomNum; 
  let [number, setNumber] = useState("¿?");
  let [isRolling, setRoll] = useState(false);

  function setRandom()
  {
    let randomNum = Math.floor(Math.random()*6) + 1;
    // console.log("Random:" + randomNum);
    // console.log("Num Ant:" + number);
        while(randomNum == number){
      randomNum = (Math.floor(Math.random()*6) + 1);
    }
    setNumber(randomNum);
  }

  if (props.roll){
    setRandom();
  }


  return (
    <button className='Die' onClick={setRandom}>
      <p className='DieNumber'>{number}</p>
    </button>
  );
}

export default Die;
