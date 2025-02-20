import './Timer.css';

let time = 5;
let intervalStatus = false;

function timerHandler(){
    time--;
    console.log(time);
}

function Timer(){
    if(!intervalStatus){
        intervalStatus = true;
        setInterval(timerHandler, 1000);
        return(
            <div className='gameTime'>{time}</div>
        );
    }
}

export default Timer;