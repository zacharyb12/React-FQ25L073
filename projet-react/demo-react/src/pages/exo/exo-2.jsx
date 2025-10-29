// Creer une liste de produits 

// - un nom , une description , un prix et un id unique ( bonus : isPromo : booleen)

// Minimum - Afficher la liste avec ou sans composant enfant

// Normal - Afficher la liste avec un composant enfant 

// Bonus - Afficher la liste avec un composant pour la liste un pour les élements 
// et afficher le prix dans une couleur différente si le produit est en promo
// appliquer un style pour le resultat final

function ListProductsPage(){

    const products = [
        {
            id: 1,
            name: "chaussures",
            description: "belles chaussures",
            price: 59.99,
            isPromo: true
        },
        {
            id: 2,
            name: "t-shirt",
            description: "beau t-shirt",
            price: 29.99,
            isPromo: false
        },
        {
            id: 3,
            name: "pantalon",
            description: "beau pantalon",
            price: 49.99,
            isPromo: false
        },
        {
            id: 4,
            name: "veste",
            description: "belle veste",
            price: 89.99,
            isPromo: true
        }
    ]
    return(
        <>
        <h1>Affichage d'une liste</h1>
        <div className="card w-75 text-center m-auto ">
            {/* Affichage de la liste dans une liste non-ordonnée simple */}
            <ul>
                    {products.map( (p) => 
                    <li>
                        <h2>{p.name}</h2>
                        <p>{p.description}</p>
                        { p.isPromo ? <p style={{ color: 'red' }}>{p.price}€</p> : <p>{p.price}€</p> }
                    </li>
                )}
            </ul>
        </div>
        {/* Affichage de la liste avec deux composant enfant */}
        <div className="card w-75 text-center m-auto ">
            <ProductList list={products} />
        </div>
        </>
    )
}

function ProductList({list}){
    return(
        <>
        <ul className="w-75 m-auto list-unstyled">
           {list.map( (product) => 
             <ProductItem p={product} />
        )}
        </ul>
        </>
    )
}

function ProductItem({p}){
    return(
        <li className="card mt-1">
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            { p.isPromo ? <p style={{ color: 'red' }}>{p.price}€</p> : <p>{p.price}€</p> }
            <button>Details</button>
        </li>
    )
}

export default ListProductsPage;
