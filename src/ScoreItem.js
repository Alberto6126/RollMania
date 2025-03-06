import react from 'react'


function ScoreItem(){
let puntos = [
{
    "nombre":"pablo",
    "score":33
},
{
    "nombre":"gerundio",
    "score":13
},
{
    "nombre":"miguel",
    "score":300
},
{
    "nombre":"Alberto",
    "score":13000
},

]

puntos.sort((a,b)=>b.score - a.score); //crea dos variables a y b y se les asocia temporalmente el contenido de el elemento de la array, ordena en función que a sea menor que b
let ScoreList = [];
    for(let i = 0; i < puntos.length; i++)
    {
        ScoreList.push(<li key={i}>{puntos[i].nombre}   ||      {puntos[i].score}</li>)
    }
    console.log(ScoreList);
    return ScoreList;
}

export default ScoreItem;