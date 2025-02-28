import './App.css';

function GamePunct({value, className}) {
    return (
        <div className="GamePunctContainer">
            <p className={className}>{value}</p>
        </div>
    );
}

export default GamePunct;