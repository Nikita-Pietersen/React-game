import React from "react";

let Helpful = [
    {help: "Have FUN!"},
    {help: "Do not search the answer."},
    {help: "You have one guess per riddle."},
    ];

const items = Helpful.map((item, key) =>
    <li key={key}>{item.help}</li>
);

function Help(){
    return(
        <div id="help">
            <h1>Rules Of The Game:</h1>
              {items}
              <br></br>
        </div>
    )
}

export default Help;