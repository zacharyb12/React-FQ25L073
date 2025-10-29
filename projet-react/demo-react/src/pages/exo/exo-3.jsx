// implementer un compteur 
// incrementation 
// decrementation : ne descend pas en dessous de 0
// reset : remet le compteur a 0 
// reset ne s'affiche que si le compteur est different de 0

import { useState } from "react";

function Compteur(){
    const [count,setCount] = useState(0);

    function increment(){
       setCount(count + 1);
    }

    function decrement(){
        if(count > 0){
            setCount(count - 1);
        }
        else{
            alert("Le compteur ne peut pas descendre en dessous de 0");
        }
    }

    function reset(){
        setCount(0);
    }

return(
    <>
    {/* Titre */}
    <h1 style={{
        margin : '1rem auto',
        textAlign : 'center'
    }}>Compteur</h1>

{/* Affichage du compteur */}
    <div style={{
        border: '1px solid black',
        width : '50%',
        borderRadius : '10px',
        padding : '1rem',
        margin : '1rem auto',
        boxShadow : '2px 2px 10px grey',

    }}>
        <p style={{
            textAlign : 'center',
        }}>{count}</p>
        <div style={{
            justifyContent : 'space-evenly',
            textAlign : 'center',
        }}>

{/* Button increment */}
            <button 
            style={{
                backgroundColor: "lightblue",
                borderRadius : "5px",
                padding : "3px",
                height : "25px",
                width : "30px",
                margin : '0 10px'
            }} 
            onClick={increment}>
                +
            </button>

{/* Button decrement */}
            <button 
            style={{
                backgroundColor: "red",
                borderRadius : "5px",
                padding : "3px",
                height : "25px",
                width : "30px",
                margin : '0 10px'
            }} 
            onClick={decrement}>
                -
            </button>

{/* Button reset avec condition d'affichage */}
            {count > 0 ? 
                <button 
                style={{
                backgroundColor: "lightgreen",
                borderRadius : "5px",
                padding : "3px",
                height : "25px",
                width : "fit-content",
                margin : '0 10px'
                }} 
                onClick={reset}>
                    reset
                </button> 
            : 
            null}
        </div>
    </div>
    </>
)
}

export default Compteur;