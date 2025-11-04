function DemoCollections(){
    // liste simple
    const list = [
        "pommes",
        "bananes",
        "oranges",
        "poires"
    ]
    // liste d'objets avec id
    const products = [
        {id: 1, name: "Ordinateur", price: 1500 , promo : true},
        {id: 2, name: "Mac", price: 1500 , promo : false},
        {id: 3, name: "clavier", price: 150 , promo : true},
        {id: 4, name: "souris", price: 150 , promo : false},
    ]

        // liste d'objets sans id
    const productsWithoutId = [
        {name: "Ordinateur", price: 1500 , promo : true},
        {name: "Mac", price: 1500 , promo : false},
        {name: "clavier", price: 150 , promo : true},
        {name: "souris", price: 150 , promo : false},
    ]



    return (
        <>
        <h1 className="text-center mt-3 ">Les collections</h1>

        <div className="card w-75 m-auto mt-1 p-1 bg-primary">
            <div className="card p-1 bg-white">
                <p>Les collections permettent de regrouper des éléments similaires.</p>
                <p>Il sera possible de les manipuler plus facilement (parcourir , ajout , suppression).</p>
                <p>Voici une liste d'exemple :</p>
            </div>
        </div>

        <div className="card w-75 m-auto mt-1 p-1 bg-secondary">
            <div className="card p-1 bg-white">
                <pre>{`
//Liste simple

const list = [ "pommes", "bananes", "oranges", "poires" ];



//Liste d'objets 

const products = [
    {id: 1, name: "Ordinateur", price: 1500 , promo : true},
    {id: 2, name: "Mac", price: 1500 , promo : false},
    {id: 3, name: "clavier", price: 150 , promo : true},
    {id: 4, name: "souris", price: 150 , promo : false},
];

// fonction disponibles

list.map( (item) => { ... } ) // pour parcourir les éléments 

products.filter( (item) => { ... } ) // renvoie une liste filtrée selon une condition

products.find( (item) => { ... } ) // renvoie le premier élément qui correspond à la condition

products.push( newItem ) // ajoute un élément à la fin de la liste

products.splice( index , 1 ) // supprime un élément à l'index spécifié



                `}</pre>
            </div>
        </div>

{/*Liste simple*/}
        <div className="card w-75 m-auto mt-1 p-1 bg-secondary">
            <div className="card p-1 bg-white">
            <h2>Liste simple : string</h2>
            {/* affichage d'une liste en string*/}
            {list}
            {list.map(  (fruit) => <p>{fruit}</p> ) }
        </div>
        </div>

{/*Liste objets avec id*/}
        <div className="card w-75 m-auto mt-1 p-1 bg-secondary">
            <div className="card p-1 bg-white">
            <h2>Liste d'objets avec id</h2>

            {/* affichage d'une liste d'objets avec un composant enfant*/}
            <ul>
            {products.map( (product) => 
                <ItemCollection p={product} />
            )}

            </ul>
        </div>
        </div>

{/*Liste objets sans id*/}
        <div className="card w-75 m-auto mt-1 p-1 bg-secondary">
            <div className="card p-1 bg-white">
            <h2>Liste d'objets sans id</h2>
            {/*Dans le cas ou aucune valeur n'est utilisable comme Key*/}
            {productsWithoutId.map( (product , index) =>
                <li className="card text-center mt-1" key={index}>
                    <h4>{product.name}</h4>
                    <p>Prix : {product.price} €</p>
                    <p>id : {index + 1}</p>
                </li>
            )}
        </div>
        </div>

{/*Liste objets deux composants*/}
        <div className="card w-75 m-auto mt-1 p-1 bg-secondary">
            <div className="card p-1 bg-white">
            <h4>Liste et item dans deux composants séparés</h4>
            <ListCollection list={products} />
        </div>
        </div>

        </>
    )
}

function ItemCollection({ p }){
    return(
        <>
            <li className="card text-center mt-1" key={p.id}>
                <h4>{p.name}</h4>
                <p>Prix : {p.price} €</p>
                <p>id : {p.id}</p>
                <button href={`/product/details/${p.id}`}>Details</button>
            </li>
        </>
    )
}

function ListCollection({ list }){
    return (
        <>
            <ul>
                {list.map ( (item) => <ItemCollection p={item}/>)}
            </ul>
        </>
    )
}

export default DemoCollections