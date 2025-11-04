function DemoHooksPerso() {
    return (
        <>
            <h1 className="mt-3 text-center">Hooks Perso</h1>

            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
                <p>Pour simplifier l'utilisation des appels API, vous pouvez créer un hook personnalisé.</p>
                <p>Ce qui permet de simplifier l'utilisation des requêtes HTTP.</p>
            </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
                <p>Dans ce cas-ci on prévoit un état de chargement , un message d'erreur et les données récupérées.</p>
                <p>le state loading est defini a true au debut de l'appel API et passe a false une fois les données récupérées ou en cas d'erreur.</p>
                <p>Le state error est utilisé pour stocker un message d'erreur en cas d'échec de l'appel API.</p>
                <p>Le state data stocke les données récupérées de l'API.</p>
                <p>Le tout est renvoyé par le hook personnalisé .</p>
            </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
                <pre>{`import { useState, useEffect } from 'react';
                       import axios from 'axios';
function useFetchData(url) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchData() {
            setLoading(true);

            try {

                const response = await axios.get(url);
                setData(response.data);

            } catch (error) {
                setError(error);

            }finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [url]);

    return { data, error, loading };
}
`}</pre>
            </div>
            </div>


            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
                <p>Ensuite pour l'utiliser dans un composant fonctionnel , il suffit d'importer le hook et de l'appeler en lui passant l'URL de l'API.</p>
                <p>On peut ensuite utiliser les données, l'état de chargement et le message d'erreur dans le rendu du composant.</p>
            </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
                <pre>{`
import React from 'react';
import useFetchData from '../hooks/useFetchData';

    function MyComponent() {
    const { data, error, loading } = useFetchData('https://monapi.com/data');

return (
            <div>

                <h1>Data from API:</h1>

                {loading ? <p>Loading...</p> : null}

                {error ? <p>Error: {error.message}</p> : null}

                {data ? <p>{JSON.stringify(data)}</p> : null}

            </div>
);
}
`}</pre>
            </div>
            </div>
        </>
    )
}

export default DemoHooksPerso;