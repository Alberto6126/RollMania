import './App.css';
// import Die from './Die';
import Dice from './Dice';
import Title from './Title';
import Timer from './Timer';
import RollButton from './RollButton';
import Score from './Score';
import { useState } from 'react';

function App() {

  let [roll, setRoll] = useState(false);

  function Roll_Dice(){
    // alert("RUEDA");
    setRoll(true);
  }

  return (
    <main className='App'>
      <Title text="RollMania!"/>
      <Dice quantity="2" roll={roll}/>
      <section>
        {/* <Timer /> */}
        <RollButton func_roll={Roll_Dice}/>
      </section>
        <Score />

    </main>
  );
}

export default App;
