import { useState } from "react";

function EvenementsPage() {

    // Exemple 1  : evenement + fonction ------------------
    function handleClick() {
        alert("Bouton cliqué via une fonction!");
    }
    // ----------------------------------------------------

    // Exemple 2 : state + evenement------------------
    const [value, setValue] = useState(false);

    function toggleValue() {
        setValue(!value)
    }
    // ----------------------------------------------------

    // Exemple 3 : state + evenement ------------------
    const [result, setResult] = useState(1);

    // Implementation d'une fonction pour la lisibilité
    function multiplyByTen() {
        setResult(result * 10);
    }
    // ----------------------------------------------------


    // Exemple 4 : evenement avec input------------------
    function handleInputChange(event) {
        console.log(event.target.value)
    }
    // ----------------------------------------------------


    return (
        <>
            <h1>Les evenements React</h1>
            {/* Exemple 1 */}
            <div className="bg-primary mt-3 card w-75 ">
                <div className="bg-white p-05 m-1 rounded">
                    <h2>Utilisation des evenements 1</h2>
                    <p>Definir une evenement et le lié à une action</p>
                    <p>Il suffit d'assigner la fonction à l'événement souhaité pour qu'elle soit déclenchée.</p>
                    <p>Exemple : <pre>{`<button onClick={() => alert("Bouton cliqué!")}>Cliquez-moi!</button>`}</pre></p>

                </div>
            </div>

            <div className="bg-secondary mt-3 m-1 card text-center">
                <div className="bg-white p-05 m-1 rounded">
                    <button onMouseOver={() => alert("Vous avez survolé le bouton")} onClick={handleClick}>Cliquez-moi!</button>
                    <button onClick={() => alert("Bouton cliqué via une fonction flechée!")}>Cliquez-moi!</button>
                </div>
            </div>

            {/* Exemple 2 */}
            <div className="bg-primary mt-3 card w-75 ">
                <div className="bg-white p-05 m-1 rounded">
                    <h2>Utilisation des evenements 2</h2>
                    <p>Il est possible d'utiliser une fonction flechée ou d'implementer une fonction pour définir l'événement.</p>
                    <p>Exemple : <pre>{`<button onClick={() => alert("Bouton cliqué!")}>Cliquez-moi!</button>`}</pre></p>
                    <p>Exemple : <pre>{`<button onClick={handleClick}>Cliquez-moi!</button>`}</pre></p>

                </div>
            </div>


            <div className="bg-secondary mt-3 m-1 card text-center">
                <div className="bg-white p-05 m-1 rounded">
                    <p>{value === true ? "Vrai" : "Faux"}</p>
                    <button onClick={toggleValue}>Cliquez-moi!</button>

                </div>
            </div>

            {/* Exemple 3 */}
            <div className="bg-primary mt-3 card w-75 ">
                <div className="bg-white p-05 m-1 rounded">
                    <h2>Utilisation des evenements et du State</h2>
                    <p>Le rendu etant déja fait il n'est pas possible de modifier les valeurs a moins de reexecuter un rendu </p>
                    <p>Le <strong>State</strong> permet de stocker des valeurs qui peuvent changer au cours du temps.</p>
                    <p>En modifiant le state via un evenement, React reexecute un rendu avec les nouvelles valeurs.</p>
                    <p>Exemple : <pre>{`const [result, setResult] = useState(1);`}</pre></p>
                    <p>Exemple : <pre>{`<button onClick={() => setResult(result * 10)}>Cliquez-moi!</button>`}</pre></p>

                </div>
            </div>


            <div className="bg-secondary mt-3 m-1 card text-center">
                <div className="bg-white p-05 m-1 rounded">
                    <p>{result}</p>
                    <button onClick={multiplyByTen}>Cliquez-moi!</button>
                    <button onClick={() => setResult(result * 10)}>Cliquez-moi!</button>
                </div>
            </div>

            {/* Exemple 4 */}
            <div className="bg-primary mt-3 card w-75 ">
                <div className="bg-white p-05 m-1 rounded">
                    <h2>Evenements avec input</h2>
                    <p>Definir une action et la lié avec une fonction flechée ou un fonction déclarée</p>
                    <pre>{`<input type="text" onChange={handleInputChange} />`}</pre>
                </div>
            </div>


            <div className="bg-secondary mt-3 m-1 card text-center">
                <div className="bg-white p-05 m-1 rounded">
                    <h2>Evenements avec input</h2>
                    <input type="text" onChange={handleInputChange} />
                </div>
            </div>
        </>
    )
}

export default EvenementsPage;