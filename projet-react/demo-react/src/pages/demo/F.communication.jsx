import { useEffect, useState } from "react";

function CommunicationPage(){
    return (
        <>
        <h1>Communication entre composants</h1>

            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
                <h2>Communication Parent Vers Enfant</h2>
                <CommunicationParent />
                </div>
            </div>

                <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
                    <pre>{`function CommunicationParent(){
    const [valueParent  , setValueParent] = useState("");
    return (
        <>
        <div className="card">
            <h1>Parent</h1>
            <input type="text" id="valueParent" onChange={(e) => {setValueParent(e.target.value)}}/>
        </div>

        <div className="card mt-1">
            <CommunicationEnfant valueFromParent={valueParent} />
        </div>

        </>
    )
}`}</pre>
                </div>
                <div className="card p-1 mt-1 bg-white">
                    <pre>{`function CommunicationEnfant({valueFromParent}){
    return (
        <>
        <h1>Enfant</h1>
        <p>Valeur reçue du parent : {valueFromParent}</p>
        </>
    )
}`}</pre>
                </div>
                </div>


            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
            <h2>Communication Enfant Vers Parent</h2>
            <CommunicationParent2 />
            </div>
            </div>

                <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
                   <pre>{`function CommunicationParent2(){
    const [valueParent  , setValueParent] = useState("");
    return (
        <>
        <div className="card">
            <h1>Parent</h1>
            <p>Valeur reçue de l'enfant : {valueParent}</p>
        </div>

        <div className="card mt-1">
            <CommunicationEnfant2 action={setValueParent} />
        </div>

        </>
    )
}`}</pre>
                </div>
                <div className="card p-1 mt-1 bg-white">
                        <pre>{`function CommunicationEnfant2({action}){
    return (
        <>
        <h1>Enfant</h1>
        <input type="text" onChange={(e) => {action(e.target.value)}} />
        
        </>
    )
}`}</pre>
                </div>
                </div>


            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
                <h2>Communication Entre composant Freres</h2>
                <CommunicationParentFreres />

            </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 mt-1 bg-white">
                    <pre>{`function CommunicationParentFreres(){

    const [listParent , setList] = useState([]);
    const [valueInput , setValueInput] = useState("");

    function getValueFromFrere1(e){
        e.preventDefault();
        setValueInput(e.target.valueFrere1.value);
    }



    useEffect(() => {
                       // ["message1", "message2", "nouveau message"]
        setList([...listParent           , valueInput])
    },[valueInput])

    return (
        <>
            <h1>Parent</h1>


        <div className="card mt-1 d-flex justify-content-evenly">
            <div>
                <CommunicationFrere1 action={getValueFromFrere1} />
            </div>

            <div>
                <CommunicationFrere2 list={listParent} />
            </div>

        </div>

        </>
    )
}`}</pre>
                </div>
                <div className="card p-1 mt-1 bg-white">
                    <pre>{`function CommunicationFrere1({action}){
    return (
        <>
        <h2>Frere 1 : input</h2>
        <form onSubmit={action}>
            <input type="text" id="valueFrere1"/>
            <button type="submit">Ajouter</button>
        </form>

        
        </>
    )
}`}</pre>
                </div>
                <div className="card p-1 mt-1 bg-white">
                    <pre>{`function CommunicationFrere2({list}){
    return (
        <>
        <h2>Frere 2</h2>
        <ul>
            {list.map( (item , index) => 
            <p key={index}>{item}</p>
            )}
        </ul>
        
        </>
    )
}`}</pre>
                </div>
            </div>


        </>
    )
}

// ------------- Communication Parent Vers Enfant ---------------
function CommunicationParent(){
    const [valueParent  , setValueParent] = useState("");
    return (
        <>
        <div className="card">
            <h1>Parent</h1>
            <input type="text" id="valueParent" onChange={(e) => {setValueParent(e.target.value)}}/>
        </div>

        <div className="card mt-1">
            <CommunicationEnfant valueFromParent={valueParent} />
        </div>

        </>
    )
}

function CommunicationEnfant({valueFromParent}){
    return (
        <>
        <h1>Enfant</h1>
        <p>Valeur reçue du parent : {valueFromParent}</p>
        </>
    )
}
// -----------------------------------------------------------------
// ------------- Communication Enfant Vers Parent ---------------
function CommunicationParent2(){
    const [valueParent  , setValueParent] = useState("");
    return (
        <>
        <div className="card">
            <h1>Parent</h1>
            <p>Valeur reçue de l'enfant : {valueParent}</p>
        </div>

        <div className="card mt-1">
            <CommunicationEnfant2 action={setValueParent} />
        </div>

        </>
    )
}

function CommunicationEnfant2({action}){
    return (
        <>
        <h1>Enfant</h1>
        <input type="text" onChange={(e) => {action(e.target.value)}} />
        
        </>
    )
}
// -----------------------------------------------------------------

// ------------- Communication entre composants frères  ---------------
function CommunicationParentFreres(){

    const [listParent , setList] = useState([]);
    const [valueInput , setValueInput] = useState("");

    function getValueFromFrere1(e){
        e.preventDefault();
        setValueInput(e.target.valueFrere1.value);
    }



    useEffect(() => {
                       // ["message1", "message2", "nouveau message"]
        setList(() =>[...listParent           , valueInput])
    },[valueInput])

    return (
        <>
            <h1>Parent</h1>


        <div className="card mt-1 d-flex justify-content-evenly">
            <div>
                <CommunicationFrere1 action={getValueFromFrere1} />
            </div>

            <div>
                <CommunicationFrere2 list={listParent} />
            </div>

        </div>

        </>
    )
}

function CommunicationFrere1({action}){
    return (
        <>
        <h2>Frere 1 : input</h2>
        <form onSubmit={action}>
            <input type="text" id="valueFrere1"/>
            <button type="submit">Ajouter</button>
        </form>

        
        </>
    )
}

function CommunicationFrere2({list}){
    return (
        <>
        <h2>Frere 2</h2>
        <ul>
            {list.map( (item , index) => 
            <p key={index}>{item}</p>
            )}
        </ul>
        
        </>
    )
}
// -----------------------------------------------------------------

export default CommunicationPage;