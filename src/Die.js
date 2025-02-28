import './App.css';
import { useState, useEffect } from 'react';

function Die({ roll, className, value }) {
  let [number, setNumber] = useState("¿?");

  // function setRandom() {
  //   let randomNum = Math.floor(Math.random() * 6) + 1;
  //   while (randomNum === number) {
  //     randomNum = Math.floor(Math.random() * 6) + 1;
  //   }
  //   setNumber(randomNum);
  // }

  useEffect(() => {
    if (roll) {
      // setRandom();
      setNumber(value);
    }
  }, [roll]);
  // console.log("Class name die: ", className);
  return (
    <div className={className}>
      <p className='DieNumber'>{number}</p>
    </div>
  );
}

export default Die;
