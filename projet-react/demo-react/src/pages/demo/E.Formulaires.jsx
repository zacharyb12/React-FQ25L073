import { useState } from "react";

function FormulairesPages(){

    // Formulaire simple non controlé
    function handleChange(e){
        console.log(e.target.value);
    }
    
    // Formulaire simple non controlé
    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target.input.value);
    }


    // Formulaire controlé
    const [inputFirstname, setInputFirstname] = useState("");
    const [inputLastname, setInputLastname] = useState("");
    const [inputAge, setInputAge] = useState(0);

    function handleSubmitControl(e){
        e.preventDefault();
        setInputFirstname(e.target.firstname.value);
        setInputLastname(e.target.lastname.value);
        setInputAge(e.target.age.value);
        console.log(` l'utilisateur ${inputFirstname} - ${inputLastname} à ${inputAge} ans `);
    }

        // Formulaire controlé unique
    const [inputUserInfo, setInputUserInfo] = useState({
        firstname: "",
        lastname: "",
        age: 0
    })

// input Simple : string & number
    function handleSubmitControlUnique(e){
        e.preventDefault();
        setInputUserInfo({
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            age: e.target.age.value
        })
        
        

    }

// Formulaire controlé textarea
    const [inputTextareaInfo, setInputTextareaInfo] = useState({
        textarea: "",
    })

    function handleSubmitControlTextarea(e){
        e.preventDefault();
        setInputTextareaInfo({
            textarea: e.target.textarea.value,
        })
        
        

    }

    // Formulaire controlé Select
    const [inputSelectInfo, setInputSelectInfo] = useState({
        select: "",
    })

    function handleSubmitSelect(e){
        e.preventDefault();
        setInputSelectInfo({
            select : e.target.select.value,
        }) 

    }

    // Demo Formulaires
    const [valueForm , setValueForm] = useState({quantity: 0,price : 0, total : 0});
    function DemoFormulaires(e){
        e.preventDefault();

        setValueForm({
            quantity: e.target.quantity.value,
            price : e.target.price.value,
            total : e.target.quantity.value * e.target.price.value
        })

    }


    return (
        <>
        <h1 className="text-center mt-3">Les formulaires</h1>

            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
            <h2>On retrouve deux types de formulaires</h2>
            <ul>
                <li>Les formulaires controlé</li>
                <li>Les formulaires non controlé</li>
            </ul>

            <p>Un formulaire non-controlé consiste a recuperer les valeurs directement dans l'input</p>
            <p>Un formulaire controlé consiste a recuperer les valeurs via des states</p>

        </div>
        </div>


            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
            <p>On log directement l'information depuis l'input a chaque changement</p>
            <pre>{`onChange => {console.log(e.target.value)}`}</pre>
            <input type="text" onChange={(e) => console.log(e.target.value)} />
        </div>
        </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
            <p>On log directement l'information depuis l'input a chaque changement en passant par une fonction</p>
            <pre>{`onChange => {handleChange}`}</pre>
            <input type="text" onChange={handleChange} />
        </div>
        </div>
            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
            <p>On log directement l'information depuis un formulaire qui contient les valeurs</p>
            <p>On identifie chaque input grace a son id</p>
            <pre>{`onChange => {handleSubmit}`}</pre>
            <form onSubmit={handleSubmit}>
                <input type="text" id="input" />
                <button type="submit">send</button>
            </form>
        </div>
        </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
            <h2>Utilisation du state</h2>
            <p>On log directement l'information depuis un formulaire controlé</p>
            <pre>{`onChange => {handleSubmitControl}`}</pre>
            <p>Valeur : {`${inputFirstname} - ${inputLastname} à ${inputAge} ans `}</p>
                <form onSubmit={handleSubmitControl}>

                    <div>
                        <label htmlFor="lastname">Nom</label>
                        <input type="text" id="lastname" />
                    </div>

                    <div>
                        <label htmlFor="firstname">Prénom</label>
                        <input type="text" id="firstname" />
                    </div>

                    <div>
                        <label htmlFor="age">Âge</label>
                        <input type="number" id="age" />
                    </div>

                    <button type="submit">send</button>

                </form>
        </div>
        </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
            <p>On recupere toutes les valeurs du formulaire dans un seul state (de type object)</p>
                        <p>Valeur : {`${inputUserInfo.lastname} - ${inputUserInfo.firstname} à ${inputUserInfo.age} ans `}</p>
            <pre>{`onChange => {handleSubmitControlUnique}`}</pre>
                <form onSubmit={handleSubmitControlUnique}>

                    <div>
                        <label htmlFor="lastname">Nom</label>
                        <input type="text" id="lastname" />
                    </div>

                    <div>
                        <label htmlFor="firstname">Prénom</label>
                        <input type="text" id="firstname" />
                    </div>

                    <div>
                        <label htmlFor="age">Âge</label>
                        <input type="number" id="age" />
                    </div>

                    <button type="submit">send</button>

                </form>
        </div>
        </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
            <p>On retrouve plusieurs type d'input le fonctionnement reste le même </p>
            <p>Valeur textarea : {inputTextareaInfo.textarea}</p>
            <pre>{`onChange => {handleSubmitControlTextarea}`}</pre>
                <form onSubmit={handleSubmitControlTextarea}>

                    <div>
                        <label htmlFor="lastname">Nom</label>
                        <textarea id="textarea" />
                    </div>

                    <button type="submit">send</button>

                </form>
        </div>
        </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
                    <p>On retrouve plusieurs type d'input le fonctionnement reste le même </p>
                    <p>Valeur select : {inputSelectInfo.select}</p>
            <pre>{`onChange => {handleSubmitSelect}`}</pre>
                <form onSubmit={handleSubmitSelect}>

                    <div>
                        <label htmlFor="select">Select</label>
                        <select id="select">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>

                    <button type="submit">send</button>

                </form>
        </div>
        </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
            <h2>Demo Formulaires</h2>

            <p>Valeur quantité : {valueForm.total}€ est de type {typeof valueForm.total}</p>

                <div className="card mt-3 w-75 text-center">
                <form onSubmit={DemoFormulaires}>
                    <div>
                        <label htmlFor="">quantité</label>
                        <br />
                        <input type="number" id="quantity" />
                    </div>

                    <div>
                        <label htmlFor="">prix</label>
                        <br />
                        <input type="text" id="price" />
                    </div>
                    <div>
                        <label htmlFor="">total</label>
                        <br />
                        <input type="text" id="total" readOnly />
                    </div>

                    <button type="submit">Envoyer</button>

                </form>
            </div>
        </div>
        </div>


        </>
    )
}

export default FormulairesPages;