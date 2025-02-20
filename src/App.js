import './App.css';
import Dice from './Dice';
import Title from './Title';
import Timer from './Timer';

function App() {
  return (
    <main className='App'>
      <Title />
      <section className='DiceStructure'>
        <Dice />
        <Dice />
      </section>
      <section className='DiceStructure'>
        <Dice />
        <Dice />
      </section>
      <section>
        <Timer />
      </section>
    </main>
  );
}

export default App;
