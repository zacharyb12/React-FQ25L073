
function DemoConditionnel(){

    // on peut utiliser une variable pour stocker une valeur qui sera utilisée pour 
    // modifier l'affichage
    const isLogged = true;

    // On peut utiliser le if/else classique pour definir ce qui sera affiché
    // On peut aussi utiliser l'opérateur ternaire

    // { conditions ? afficher si vrai : afficher si faux }
    // variable pour la condition ternaire
    const isAdmin = false;

    if(isLogged){
        // affichage si l'utilisateur est connecté
        return (
            <>
                {/*On peut utiliser l'operateur ternaire de plusieurs façons*/}
                {isAdmin ? <h1>Bienvenue Admin!</h1> : <h1>Bienvenue utilisateur connecté!</h1>}
                {/* (!isAdmin ? <h1>Bienvenue Admin!</h1> : <h1>Bienvenue utilisateur connecté!</h1>)  */}

                {/*Il sera possible de creer un composant pour gérer un affichage conditionnel*/}
                <TitreConditionnel isLogged={isLogged} />
            </>
        )
    }else{
        return (
            <>
                {/*Valeur a renvoyer si le booleen isLogges est a false*/}
                <h1>Bienvenue utilisateur voulez-vous vous connecter?</h1>
            </>
        )
    }
}

function TitreConditionnel(isLogged){
    return(
        <>
            {isLogged ? <h1>Bienvenue Utilisateur!</h1> : <h1>Connecter vous !</h1>}
        </>
    )
}
export default DemoConditionnel