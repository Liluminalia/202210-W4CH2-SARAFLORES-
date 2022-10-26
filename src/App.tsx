// import React, { useState } from "react";
import "./App.css";
import { Paso1 } from "./components/Paso1";
import "./components/Form.scss";
//not used yet
// import { Paso2 } from "./components/paso2";
// import { Paso3 } from "./components/paso3";
// import { Submited } from "./components/Submited";

function App() {
    // codigo comentado xq no recuerdo bien como hacer la herencia y sino no me funciona netlify

    // const [counter, setCounter] = useState(0);

    // const handlerCounter = (item: number) => {
    //     setCounter(counter + item);
    // };
    // if ((setCounter = 1)) {
    //     return (
    //         <div className="App">
    //             <Paso2></Paso2>
    //         </div>
    //     );
    // }
    // if ((setCounter = 2)) {
    //     return (
    //         <div className="App">
    //             <Paso3></Paso3>
    //         </div>
    //     );
    // }
    // if ((setCounter = 3)) {
    //     return (
    //         <div className="App">
    //             <Submited></Submited>
    //         </div>
    //     );
    // }
    return (
        <div className="App">
            <Paso1></Paso1>
        </div>
    );
}

export default App;
