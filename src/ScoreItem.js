import react from 'react'


function ScoreItem(number){
let scoreList = [];
    for(let i = 0; i < number; i++){
        scoreList.push(<li key={i}>Pablo --- 10</li>)
    }
    
    // scoreList.forEach((element)=>{return element});
    console.log(scoreList);
    return scoreList;
}

export default ScoreItem;