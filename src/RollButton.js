import './RollButton.css';

function RollButton(prop){

    return(
        <div>
            <input className="RollButton" type="button" value="Roll" onClick={prop.func_roll} /> 
        </div>
    );
}

export default RollButton;