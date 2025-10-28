// Creeer un composant 
// Afficher un message de bienvenue avec nom et prenom
// Afficher un message avec : vous avez X ans
// Afficher : et ajourdhui nous sommes "Jour"

function Exo1({nom = "inconnu",prenom = "inconnu",age = 0,jour = "inconnu"}){
    return(
        <>
            <h1 className="text-center m-auto mt-3">Exercice 1 : creation d'un composant avec props</h1>

            <div className="card text-center mt-3 bg-primary">
                <h4>Bienvenue {nom} {prenom} sur l'application React</h4>
                <p>Vous avez {age} ans.</p>
                <p>Et aujourd'hui nous sommes {jour}.</p>
            </div>
        </>
    )
}

export default Exo1;