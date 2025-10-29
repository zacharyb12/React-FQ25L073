
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

                 <h1 className="text-center mt-5">Conditions & Collections</h1>
            <div className="bg-primary mt-3 card text-center w-75 ">
                <h2>Conditions</h2>
                <div className="bg-white p-05 m-1 rounded">
                    <p>Les conditions permettent de rendre des éléments de manière conditionnelle.</p>
                    <p>En fonction d'une valeur on peut definir si quelque chose sera afficher ou non.</p>
                    <p>Il est possible de renvoyer null si necessaire.</p>
                </div>
            </div>


            <div className="bg-primary mt-3 card text-center w-75 ">
                <div className="bg-white p-05 m-1 rounded">
                    <p>Il est possible d'utiliser des expressions conditionnelles pour afficher des éléments en fonction de l'état.</p>
                    <p>Comme une ternaire :</p>
                </div>
            </div>


            <div className="bg-secondary mt-3 m-1 card">
                <h2 className="text-center">Conditions exemple</h2>
                <p className="bg-white text-center w-75 m-auto rounded p-05 mt-1">si `props.isLoggedIn` est a true le premier element sera afficher sinon le deuxième</p>
                <pre className="card bg-white mt-1 text-left">
                    {`function MonComposant(props) {
                    return (
                        <div>

                            {props.isLoggedIn ? <p>Bienvenue, utilisateur!</p> : <p>Veuillez vous connecter.</p>}

                        </div>
                        );
                    }`}
                </pre>
            </div>

            <div className="bg-primary mt-3 card text-center w-50">
                <div className="bg-white p-05 m-1 rounded">
                    <p>Ou avec un bloc If :</p>
                </div>
            </div>


            <div className="bg-secondary mt-3 m-1 card">
                <h2 className="text-center">Conditions exemple</h2>
                <p className="bg-white text-center w-75 m-auto rounded p-05 mt-1">si `props.isLoggedIn` est a true le premier element sera afficher sinon le deuxième</p>
                <br />
                <pre className="card bg-white mt-1 text-left">
                    {`function MonComposant(props) {

                    if (props.isLoggedIn) {
                        
                    return (
                            <div>

                                <p>Bienvenue, utilisateur!</p>

                            </div>
                    
                    } else {

                        return (
                            <div>

                                <p>Veuillez vous connecter.</p>

                            </div>
                            );
                    }`}
                </pre>
            </div>

            <div className="bg-primary mt-3 card text-center w-75 ">
                <div className="bg-white p-05 m-1 rounded">
                    <p>Il est également possible de renvoyer null .</p>
                </div>
            </div>


            <div className="bg-secondary mt-3 m-1 card">
                <h2 className="text-center">Conditions exemple null</h2>
                <div className="bg-white p-05 m-1 rounded text-center">
                    <p>Ici si le resultat est faux, rien ne sera affiché.</p>
                </div>
                <br />
                <pre className="card bg-white mt-1 text-left">
                    {`function MonComposant(props) {
            return (
                        <div>

                            {props.isLoggedIn ? <p>Bienvenue, utilisateur!</p> : null }

                        </div>
                    );
        }`}
                </pre>
            </div>

            <div className="bg-primary mt-3 card w-75 ">
                <h2 className="text-center">Collections</h2>
                <div className="bg-white p-05 m-1 rounded">
                    <p>Les collections permettent de gérer des listes d'éléments.</p>
                    <p>On utilise souvent la méthode map pour itérer sur une collection et retourner un élément pour chaque item.</p>
                    <p>Il sera possible de gérer la collections dans un seul composant ou plusieurs </p>
                    <p>un pour la liste , un pour les elements </p>
                </div>

            </div>

            <div className="bg-secondary mt-3 m-1 card text-center">
                <h2>Collections exemple</h2>
                <pre className="card bg-white mt-1 text-left">
                    {`function ListeUtilisateurs(props) {
                    return (
                            <ul>

                                {props.utilisateurs.map(  (user,index) => (<li key={index}>{user}</li>)  )}

                            </ul>

                     );
                }`}
                </pre>
            </div>


            <div className="bg-primary mt-3 card w-75 ">
                <h2 className="text-center">Decomposer la gestion de la liste</h2>
                <div className="bg-white p-05 m-1 rounded">
                    <p>Il est possible de decomposer la gestion de la liste en plusieurs composants.</p>
                    <p>Par exemple, un composant pour la liste et un autre pour chaque élément de la liste.</p>
                    <p>Ce qui permet de mieux organiser le code et de le rendre plus réutilisable.</p>
                </div>
            </div>

            <div className="bg-secondary mt-3 m-1 card text-center">
                <h2>Collections plusieurs composants</h2>

                <pre className="card bg-white mt-1 text-left">
                    {`function ItemUtilisateur(props) {
                    return (
                            <li>{props.utilisateurs}</li>
                     );
                }`}
                </pre>
                <pre className="card bg-white mt-1 text-left">
                    {`function ListeUtilisateurs(props) {
                    return (
                            <ul>

                                {props.utilisateurs.map(  (user,index) => (<ItemUtilisateur key={index} utilisateurs={user} />)  )}

                            </ul>

                     );
                }`}
                </pre>
            </div>

            <div className="bg-primary mt-3 card w-75 ">
                <div className="bg-white p-05 m-1 rounded">
                    <p>Grace à ça l'appel sera plus simple et plus lisible.</p>
                </div>
            </div>

            <div className="bg-secondary mt-3 m-1 card text-center">
                <div className="bg-white p-05 m-1 rounded">
                    <p>Voici un exemple d'utilisation de la liste d'utilisateurs :</p>
                </div>
                <pre className="card bg-white mt-1 text-left">
                    {`function ListeUtilisateurs(props) {

                    return (

                        <ListeUtilisateurs utilisateurs={props.utilisateurs} />

                        );
                        }`}
                </pre>
            </div>

            <div className="bg-primary mt-3 card w-75 ">
                <h2 className="text-center">Gestion d'index dans la liste</h2>
                <div className="bg-white p-05 m-1 rounded">
                    <p>Dans le cas ou aucun index n'est fourni, une erreur sera afficher dans la console.</p>
                    <p>Il est important de fournir une clé unique pour chaque élément de la liste afin d'optimiser le rendu et la mise à jour des éléments.</p>
                    <p>Si aucune propriétés de l'objet ne peut servir de clé il sea possible d'en créer une manuellement.</p>
                    <p>Cette situation sera a utiliser en dernier recours.</p>

                </div>
            </div>

            <div className="bg-secondary mt-3 mb-3 m-1 card text-center">
                <h2>Creer un index au moment du map</h2>

                <pre className="card bg-white mt-1 text-left">
                    {`function ListeUtilisateurs(props) {
                    return (
                            <ul>

                                {props.utilisateurs.map(  (user,index) => (<ItemUtilisateur key={index} utilisateurs={user} />)  )}

                            </ul>

                     );
                }`}
                </pre>
            </div>
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