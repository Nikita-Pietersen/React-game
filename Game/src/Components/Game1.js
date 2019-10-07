import React from "react";
import ReactDOM from "react-dom";

const element = {
    riddle1 :"I'm tall when I'm young and I'm short when I'm old. What am I?",
    riddle2 :"What has hands but can not clap?",
    riddle3 :"You can drop me from the tallest building and I'll be fine, but if you drop me in water I die. What am I?",
    answer1 :"A Candle.",
    answer2 :"A Clock.",
    answer3 :"Paper."
};


function Game1(){
    return(
        <div id="Second">
            <h1>Here We GO!</h1> 
            <br></br><br></br>
            <h2>{element.riddle2}</h2>
            <br></br>
            <ul>
                <li><button class='Button' value="Y" onClick={CorrectOrWrong}>{element.answer2}</button></li>
                <li><button class='Button' value="N" onClick={CorrectOrWrong}>A Dog.</button></li>
                <li><button class='Button' value="N" onClick={CorrectOrWrong}>A Human.</button></li>
            </ul>
            <br></br><br></br>
        </div>
    )
};

function CorrectOrWrong(e){
    var Choice = e.target.value;
    if (Choice  == "Y") {
        alert("You WON!");
    } else {
        alert("You LOST!");
    }
}

export default Game1;