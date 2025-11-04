import { useState,useEffect } from "react";

function HooksUseEffectPage(){


const [showCounter , setShowCounter] = useState(false);

//--------------------------------------------------------------------------
// useEffect(() => {
    
    // console.log("action effectuer au chargement du composant");
    
    // },[]);
    
    //--------------------------------------------------------------------------
    
    // useEffect(() => {
        
    //     console.log("action effectuer lors du changement d'une variable");
        
    // },[showCounter]);// on passe dans le tableau de dependances la variable a espionner
    //--------------------------------------------------------------------------

    // useEffect(() => {
        
        //return () => {
        //     console.log("action effectuer lors du demontage du composant");

    //}
        
    // },[showCounter]);// on passe dans le tableau de dependances la variable a espionner
    //--------------------------------------------------------------------------

//     useEffect(() => {
// console.log("use effect appelé");

// let interval = null;

// if(showCounter){
//     if(!interval){

//         interval = setInterval(() => {
//             setCount( (prevCount) => prevCount + 1 );
//         },1000);
//     }
// }

// console.log(`nouvelle valeur de count ${count}`);


// return ()=>{
//     console.log("composant nettoyé");
//     clearInterval(interval);
    
// }

//     },[showCounter,count])


function toggleShowCount(){
    setShowCounter(!showCounter);
}

    return (
        <>
        <h1 className="mt-3 text-center">Hooks useEffect</h1>
            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
            <p>UseEffect Permet de gerer les effets de bord dans les composants fonctionnels.</p>
            <p>il s'utilise de plusieurs façons : </p>
            <ul>
                <li>Effectuer une action lors du montage du composant</li>
                <li>Effectuer une action lors du changement d'une valeur observé</li>
                <li>Effectuer une action lors du demontage du composant</li>
            </ul>
        </div>
        </div>

                <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
            <h3>Effectuer une action au chargement du composant</h3>
            <pre>{`useEffect(() => { code à executer},[]);`}</pre>
        </div>
        </div>

                <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
            <h3>Effectuer une action lors du changement d'une valeur observée</h3>
            <pre>{`useEffect(() => { code à executer},[valeur]);`}</pre>
        </div>
        </div>

                <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
            <h3>Effectuer une action lors du dechargement du composant</h3>
            <pre>{`useEffect(() => { return () => { code à executer } },[valeur]);`}</pre>
        </div>
        </div>

                <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
            <button onClick={toggleShowCount}>{showCounter ? "Cacher" : "Montrer"}</button>
            {showCounter ? (
                <Test/>
            ) : (
                null
            )}
        </div>
        </div>
        </>
    )
}

function Test(){

    useEffect(() => {
        console.log("Test component mounted");

        return () => {
            console.log("Test component dismantled");
            
        }
    },[]);

//--------------------------------------------------------------------------
    // useEffect(() => {

   //     console.log("action effectuer au chargement du composant");

   // },[]);

//--------------------------------------------------------------------------
    
    // useEffect(() => {
        
    //     console.log("action effectuer lors du changement d'une variable");
        
    // },[showCounter]);// on passe dans le tableau de dependances la variable a espionner

 //--------------------------------------------------------------------------

    // useEffect(() => {
        
        //return () => {
        //     console.log("action effectuer lors du demontage du composant");

    //}
        
    // },[showCounter]);// on passe dans le tableau de dependances la variable a espionner
//--------------------------------------------------------------------------


    return(
        <>
        <h1>Test Component</h1>
        </>
    )
}

export default HooksUseEffectPage;