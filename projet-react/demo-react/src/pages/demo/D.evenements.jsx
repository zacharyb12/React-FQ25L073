import { useState } from "react";

function EvenementsPage() {
    // Exemple 1 
    function handleClick(){
        alert("Bouton cliqué via une fonction!");
    }

    // Exemple 2 : state + evenement
    const [value , setValue] = useState(false);

    function toggleValue(){
        setValue(!value)
    }

    // Exemple 3 : state + evenement 
    const [result , setResult] = useState(1);

    // Implementation d'une fonction pour la lisibilité
    function multiplyByTen(){
        setResult(result * 10);
    }

    return (
        <>
        <h1>Les evenements React</h1>

        <div>
            <h2>Utilisation des evenements 1</h2>
            <p>Definir une action et la lié avec une fonction flechée ou un fonction déclarée</p>
            <button onMouseOver={() => alert("Vous avez survolé le bouton")} onClick={handleClick}>Cliquez-moi!</button>
            <button onClick={() => alert("Bouton cliqué via une fonction flechée!")}>Cliquez-moi!</button>
        </div>

        <div>
            <h2>Utilisation des evenements 2</h2>
            <p>Definir une action et la lié avec une fonction flechée ou un fonction déclarée</p>
            <p>{value === true ? "Vrai" : "Faux"}</p>
            <button onClick={toggleValue}>Cliquez-moi!</button>
        </div>

        <div>
            <h2>Utilisation des evenements 2</h2>
            <p>Definir une action et la lié avec une fonction flechée ou un fonction déclarée</p>
            <p>{result}</p>
            <button onClick={multiplyByTen}>Cliquez-moi!</button>
            <button onClick={() => setResult(result * 10)}>Cliquez-moi!</button>
        </div>
        </>
    )
}

export default EvenementsPage;