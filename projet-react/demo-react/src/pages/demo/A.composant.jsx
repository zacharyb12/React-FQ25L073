import { Link } from 'react-router-dom';

function DemoComposant(){
    return (
        <>

        <div className="card mt-3 w-50 ">
            <TitreComposant title="Titre du composant" />
            <ParagrapheComposant />
            <ParagrapheComposant value="Voici la valeur du paragraphe" />
        </div>

        
        <h1 className="text-center mt-3">Les composants avec React</h1>

        <div className="bg-primary mt-3 card w-75">
            <div className='bg-white p-05 m-1 rounded'>
            <p> Un composant est une brique réutilisable de l'interface utilisateur dans une application React. Il permet de diviser l'interface en parties indépendantes et réutilisables, facilitant ainsi la gestion et la maintenance du code.</p>
            <p> Ce sont des classes ES6 qui étendent la classe de base React.Component. Ils offrent plus de fonctionnalités, comme la gestion de l'état et des cycles de vie.</p>
            <p> Un composant peut être composé d'autres composants, ce qui permet de créer des interfaces utilisateur complexes à partir de blocs de construction simples.</p>
            </div>
        </div>

        <div className="bg-primary mt-3 card w-75">
            <div className='bg-white p-05 m-1 rounded'>
            <p>Un composant est tout simplement une fonction qui retourne un élément React.</p>
            <p>Un composant ne peut retourner qu'une seule balise parent peu importe le nombre d'éléments qu'il contient.</p>
        </div>
        </div>

        <div className="card mt-3 bg-secondary">
            <h2>Demo Composant Simple</h2>
            <DemoComposantSimple />
        </div>


        <div className="bg-primary mt-3 card w-75">
            <div className='bg-white p-05 m-1 rounded'>
            <p>Il existe une balise speciale appelé fragment qui permet de regrouper plusieurs éléments sans ajouter de nœud supplémentaire au DOM.</p>
            <p>La particularité des fragments est qu'ils ne créent pas de nœud supplémentaire dans le DOM contrairement a une autre balise comme <strong>div</strong> </p>
        </div>
        </div>

        <div className="card mt-3 bg-secondary">
            <h2>Demo Composant Fragment</h2>
            <DemoComposantFragment />
        </div>

        <div className="bg-primary mt-3 card w-75">
            <div className='bg-white p-05 m-1 rounded'>
            <p>Les composants peuvent obtenir des valeurs lorsqu'on les appelles</p>
            <p>Ces valeurs peuvent avoir une valeur par defaut</p>
        </div>
        </div>

        <div className="card mt-3 bg-secondary">
            <h2>Demo Composant avec Props</h2>
            <DemoComposantProps />
        </div>

        <div className="card mt-3 bg-secondary">
            <h2>Demo Composant avec Props facultatives</h2>
            <DemoComposantPropsNullable />
        </div>


        <div className="bg-primary mt-3 card w-75">
            <div className='bg-white p-05 m-1 rounded'>
            <h2 className="text-center">Le style </h2>
            <ol className="ml-1">
                <li>Utilisation de classes CSS</li>
                <li>Styles en ligne</li>
                <li>Bibliothèques de styles (ex : styled-components, emotion)</li>
            </ol>
        </div>
        </div>

        <div className="bg-secondary mt-3 w-75 card">
        <h2 className="text-center">Demo Composant Style : Classes</h2>
        <DemoComposantStyleClass />
      </div>

            <div className="bg-secondary mt-3 w-75 card">
        <h2 className="text-center">Demo Composant Style : Ligne</h2>
        <DemoComposantStyleligne />
      </div>

        <div className="bg-secondary mt-3 w-75 card">
        <h2 className="text-center">Demo Composant Style : Classes Librairie</h2>
        <DemoComposantStyleClassLibrairie />
      </div>
        </>
    )
}

// Demo Composant -------------------------------------------------------------
// Pour creer un composant avec d'autres composants

// Composant Titre reutilisable
function TitreComposant({title}){
    return(  <h1 className='text-center'>{title}</h1>   )
}

// Composant Paragraphe reutilisable
function ParagrapheComposant({value = "Ce texte n'est pas disponible"}){
    return(
        <>
        <p className='text-center mt-3'>{value}</p>
        </>
    )
}


// ----------------------------------------------------------------------------


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