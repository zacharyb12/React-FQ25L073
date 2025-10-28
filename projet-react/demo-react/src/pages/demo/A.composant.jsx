import { Link } from 'react-router-dom';

function DemoComposant(){
    return (
        <>

        
        <h1 className="text-center mt-3">Les composants avec React</h1>

        <div className="card mt-3 ">
            <p> Un composant est une brique réutilisable de l'interface utilisateur dans une application React. Il permet de diviser l'interface en parties indépendantes et réutilisables, facilitant ainsi la gestion et la maintenance du code.</p>
            <p> Ce sont des classes ES6 qui étendent la classe de base React.Component. Ils offrent plus de fonctionnalités, comme la gestion de l'état et des cycles de vie.</p>
            <p> Un composant peut être composé d'autres composants, ce qui permet de créer des interfaces utilisateur complexes à partir de blocs de construction simples.</p>
        </div>

        <div className="card mt-3 ">
            <p>Un composant est tout simplement une fonction qui retourne un élément React.</p>
            <p>Un composant ne peut retourner qu'une seule balise parent peu importe le nombre d'éléments qu'il contient.</p>
        </div>

        <div className="card mt-3 bg-primary">
            <h2>Demo Composant Simple</h2>
            <DemoComposantSimple />
        </div>

        <div className="card mt-3 ">
            <p>Il existe une balise speciale appelé fragment qui permet de regrouper plusieurs éléments sans ajouter de nœud supplémentaire au DOM.</p>
            <p>La particularité des fragments est qu'ils ne créent pas de nœud supplémentaire dans le DOM contrairement a une autre balise comme <strong>div</strong> </p>
        </div>

        <div className="card mt-3 bg-primary">
            <h2>Demo Composant Fragment</h2>
            <DemoComposantFragment />
        </div>

        <div className="card mt-3 ">
            <p>Les composants peuvent obtenir des valeurs lorsqu'on les appelles</p>
            <p>Ces valeurs peuvent avoir une valeur par defaut</p>
        </div>

        <div className="card mt-3 bg-primary">
            <h2>Demo Composant avec Props</h2>
            <DemoComposantProps />
        </div>

        <div className="card mt-3 bg-primary">
            <h2>Demo Composant avec Props facultatives</h2>
            <DemoComposantPropsNullable />
        </div>


        <div className="card mt-3 ">
            <h4>Le style </h4>
            <ol>
                <li>Utilisation de classes CSS</li>
                <li>Styles en ligne</li>
                <li>Bibliothèques de styles (ex : styled-components, emotion)</li>
            </ol>
        </div>

        <div className="bg-primary mt-3 w-75 card">
        <h2 className="text-center">Demo Composant Style : Classes</h2>
        <DemoComposantStyleClass />
      </div>

            <div className="bg-primary mt-3 w-75 card">
        <h2 className="text-center">Demo Composant Style : Ligne</h2>
        <DemoComposantStyleligne />
      </div>

        <div className="bg-primary mt-3 w-75 card">
        <h2 className="text-center">Demo Composant Style : Classes Librairie</h2>
        <DemoComposantStyleClassLibrairie />
      </div>
        </>
    )
}

// Demo Composant -------------------------------------------------------------
function DemoComposantSimple(){
    return (
        <div className="bg-white card mt-3">
            <h4 className="text-center">Démonstration du Composant</h4>
            <pre>
                {`function MonComposant() {
                    return <div>Hello, World!</div>;
                }`}
            </pre>
        </div>
    );
}
// ----------------------------------------------------------------------------

// Demo Composant -------------------------------------------------------------
function DemoComposantFragment(){
    return (
        <div className="bg-white card mt-3">
            <h4 className="text-center">Démonstration du Composant</h4>
            <pre>
                {`function MonComposant() {
                    return (
                        <>
                            <div>Hello, World!</div>
                            <div>Hello, World!</div>
                            <div>Hello, World!</div>
                        </>
                    );
                }`}
            </pre>
        </div>
    );
}
// ----------------------------------------------------------------------------

// Demo Composant style Class-------------------------------------------------------------
function DemoComposantStyleClass(){
    return (
        <div className="bg-white card mt-3">
            <h4 className="text-center">Démonstration du Composant</h4>
            <pre>
                {`function MonComposant() {
                    return <div className="mon-style">Hello, World!</div>;
                }`}
            </pre>
        </div>
    );
}
// ----------------------------------------------------------------------------

// Demo Composant style ligne-------------------------------------------------------------
function DemoComposantStyleligne(){
    return (
        <div className="bg-white card mt-3">
            <h4 className="text-center">Démonstration du Composant</h4>
            <pre>
                {`function MonComposant() {
                    return <div style={{ color: 'red' }}>Hello, World!</div>;
                }`}
            </pre>
        </div>
    );
}
// ----------------------------------------------------------------------------

// Demo Composant style class librairie-------------------------------------------------------------
function DemoComposantStyleClassLibrairie(){
    return (
        <div className="bg-white card mt-3">
            <h4 className="text-center">Démonstration du Composant</h4>
            <pre>
                {`function MonComposant() {
                    return <div className="m-auto p-1 border rounded">Hello, World!</div>;
                }`}
            </pre>
        </div>
    );
}
// ----------------------------------------------------------------------------

// Demo Composant Props -------------------------------------------------------------
function DemoComposantProps(){
    return (
        <div className="bg-white card mt-3">
            <h4 className="text-center">Démonstration du Composant avec Props</h4>
            <pre>
                {`function MonComposant(name) {
                    return <div>Hello, {name}!</div>;
                }`}
            </pre>

        </div>
    );
}
// ----------------------------------------------------------------------------

// Demo Composant Props valeurs nullables -------------------------------------------------------------
function DemoComposantPropsNullable({title = "Default Title", description = "aucune description"}){
    return (
        <div className="bg-white card mt-3">
            <h2 className="text-center">{title}</h2>
             <p>{description}</p>
            <pre>
                {`function PropsExample({title = "Default Title", description = "aucune description"}) {
                    return (
                        <div>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    );
}`}
            </pre>
        </div>
    );
}


export default DemoComposant;