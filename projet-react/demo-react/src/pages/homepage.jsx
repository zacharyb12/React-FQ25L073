
function Homepage() {


    return (
        <>
            <h1 className="mt-3 text-center">Homepage</h1>

            <div className="card w-75 text-center mt-3">
                <h2>React</h2>
                <p>React est une bibliothèque JavaScript pour la création d'interfaces utilisateur.</p>
                <p>Elle utilise le concept de composants pour construire des interfaces de manière modulaire.</p>
                <p>React utilise un DOM virtuel pour optimiser les performances.</p>
            </div>

            <div className="card w-75 text-center mt-3">
                <h2>Installation</h2>
                <p>Pour installer React, vous pouvez utiliser Vite avec la commande suivante :</p>
                <pre><code>npm create vite@latest</code></pre>
                <p>Ensuite sélectionnez le modèle "React" lors de l'invite.</p>
                <p>Ainsi qu'un language</p>
            </div>

            <div className="card w-75 text-center mt-3 mb-3">
                <h2>Commandes React</h2>
                <p>Pour lancer le projet, utilisez la commande suivante :</p>
                <pre><code>npm run dev</code></pre>

                <p>Pour construire le projet pour la production, utilisez :</p>
                <pre><code>npm run build</code></pre>

                <p>Pour prévisualiser le build de production, utilisez :</p>
                <pre><code>npm run preview</code></pre>

                <p>Pour installer les dépendances , utilisez :</p>
                <p>Necessaire apres un telechargement de github ou si les nodes-modules ne sont pas présent</p>
                <pre><code>npm install</code></pre>
            </div>
        </>
    )
}

export default Homepage;