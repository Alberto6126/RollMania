import './Score.css';
import ScoreItem from './ScoreItem'; 


function Score(){

    return(
        <div className="ScoreContainer">
            <ol>
                <ScoreItem />
            </ol>
        </div>
    );
}

export default Score;