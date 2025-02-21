import Die from './Die.js';


function GetDice(quantity){
    let diceList = [];
    for(let i = 0; i < quantity; i++){
        diceList.push(<Die key={i}/>)
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