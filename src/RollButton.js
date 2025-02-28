import './App.css';
import { useState, useEffect } from 'react';

function RollButton(prop){
    let [countdown, setCountdown] = useState("Roll");
    let [buttonClass, setButtonClass] = useState("RollButton");

    useEffect(() => {
        if (countdown > 0 && countdown !== "Roll") {
            setButtonClass("RollButtonDisabled");
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setButtonClass("RollButton");
        }
    }, [countdown]);

    return(
        <div>
            <button className={buttonClass} onClick={()=>{setCountdown(3); prop.func_roll();}} disabled={countdown > 0}>
                {countdown > 0 ? countdown : "Roll"}
            </button>
        </div>
    );
}

export default RollButton;