import './App.css';
import { useState } from 'react';
// import Die from './Die';
import Dice from './Dice';
import Title from './Title';
// import Timer from './Timer';
import RollButton from './RollButton';
import Score from './Score';
import GamePunct from './GamePunct';
import PlayerInfo from './PlayerInfo';

function App() {

  let [roll, setRoll] = useState(false);
  let [diceValues, setDiceValues] = useState([Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]);
  let [enemyDiceValues, setEnemyDiceValues] = useState([Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]);
  let [GamePoints, setGamePoints] = useState([0,0]);
  let [audioClass, setAudioClass] = useState("AudioIcoTrue");
  let [menu, setMenu] = useState("MenuWindowFalse");
  let [GameItemsClass, setGameItemsClass] = useState("GameItemsTrue");

  function Roll_Dice(){
    // alert("RUEDA");
    setRoll(true);
    if(diceValues[0] + diceValues[1] > enemyDiceValues[0] + enemyDiceValues[1]){
      setGamePoints([GamePoints[0] + 1, GamePoints[1]]);
    }else if(diceValues[0] + diceValues[1] < enemyDiceValues[0] + enemyDiceValues[1]){
      setGamePoints([GamePoints[0], GamePoints[1] + 1]);
    }else if(diceValues[0] + diceValues[1] === enemyDiceValues[0] + enemyDiceValues[1]){
      setGamePoints([GamePoints[0] + 1, GamePoints[1] + 1]);
    }
    setTimeout(() => {
      setRoll(false);
      setDiceValues(diceValues.map(() => Math.floor(Math.random() * 6) + 1));
      setEnemyDiceValues(enemyDiceValues.map(() => Math.floor(Math.random() * 6) + 1));
      console.log("Dice values: ", diceValues);
      console.log("Enemy dice values: ", enemyDiceValues);
    }, 500);
  }

  return (
    <main className='App'>
      <Title text="RollMania!"/>
      <section className="gameWindow">
        <section className={menu}>
          <Score />
        </section>
      <section className={GameItemsClass}>
      <Dice quantity="2" roll={roll} classNa="DiceStructure" values={diceValues}/>
      <Dice quantity="2" roll={roll} classNa="EnemyStructure" values={enemyDiceValues}/>
      {/* <Dice quantity="2" roll={roll}/> */}
      <section className='punctuation'>
        <GamePunct value={GamePoints[0]} className="playerPunct"/>
        <GamePunct value={GamePoints[1]} className="enemyPunct"/>
      </section>
      <section>
        {/* <Timer /> */}
        <RollButton func_roll={Roll_Dice}/>
      </section>
      </section>  
      <section className='LeaderboardIcoContainer'>
        <input className='LeaderboardIco' type="button" value="" onClick={()=>{if(menu==="MenuWindowFalse"){setMenu("MenuWindowTrue"); setGameItemsClass("GameItemsFalse")}else{setMenu("MenuWindowFalse"); setGameItemsClass("GameItemsTrue")}}}/>
      </section>
      <section className='AudioContainer'>
        <input className={audioClass} type="button" value="" onClick={()=>{if(audioClass==="AudioIcoTrue"){setAudioClass("AudioIcoFalse")}else{setAudioClass("AudioIcoTrue")}}}/>
      </section>
      <section className='AlertContainer'>
        <input className='AlertIco' type="button" value=""/>
      </section>
        <PlayerInfo />
      </section>

    </main>
  );
}

export default App;
