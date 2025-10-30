// Implementer une calculatrice 
// On aura 4 champs : 
// - un champ nombre 1 (input type="number")
// - operateur (+ - * /) (select)
// - un champ nombre 2 (input type="number")
// button "calculer" ( = ) pour executer le calcul
// - un champ résultat (non modifiable)
import { useState,useEffect } from "react";

function CalculatricePage(){
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(0);

    // useEffect pour mettre a jour le resultat a chaque changement de number1, number2 ou operator
    useEffect(() => {

        switch(operator){
            case '+':
                addition();
                break;
            case '-':
                soustraction();
                break;
            case '*':
                multiplication();
                break;
            case '/':
                division();
                break;
        }
        // Les variables a surveiller sont fournies dans le tableau de dependances
    },[result, operator, number1, number2]);

    function addition(){
        setResult(parseInt(number1) + parseInt(number2));
    }
    function soustraction(){
        setResult(parseInt(number1) - parseInt(number2));
    }
    function division(){
        setResult(parseInt(number1) / parseInt(number2));
    }
    function multiplication(){
        setResult(parseInt(number1) * parseInt(number2));
    }

    // fontion pour recuperer les valeurs des champs du formulaire et effectuer le calcul
    function getResult(e){
        e.preventDefault();
        setNumber1(e.target.number1.value)
        setOperator(e.target.operator.value)
        setNumber2(e.target.number2.value)

        switch(operator){
            case '+':
                addition();
                break;
            case '-':
                soustraction();
                break;
            case '*':
                multiplication();
                break;
            case '/':
                division();
                break;
        }
    }

    return (
        <>
        <h1>Calculatrice</h1>

        <div>
            <form onSubmit={getResult}>
                <div>
                    <label htmlFor="">nb1</label>
                    <br />
                    <input type="number" id="number1" />
                </div>
                <div>
                    <select id="operator">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">nb2</label>
                    <br />
                    <input type="number" id="number2" />
                </div>

                <button type="submit">=</button>
                {/* affichage du resultat sans input */}
                <p>{number1} {operator} {number2} = {result}</p>
            </form>
        </div>
        </>
    )
}

export default CalculatricePage;