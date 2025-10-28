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
        <h1>Les collections</h1>

        <div className="card w-75 m-auto mt-1">
            <h2>Liste simple : string</h2>
            {/* affichage d'une liste en string*/}
            {list}
            {list.map(  (fruit) => <p>{fruit}</p> ) }
        </div>

        <div className="card w-75 m-auto mt-1">
            <h2>Liste d'objets avec id</h2>

            {/* affichage d'une liste d'objets avec un composant enfant*/}
            <ul>
            {products.map( (product) => 
                <ItemCollection p={product} />
            )}

            </ul>
        </div>

        <div className="card w-75 m-auto mt-1">
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

export default DemoCollections