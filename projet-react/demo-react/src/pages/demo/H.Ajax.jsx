import { useState, useEffect } from "react";
import axios from 'axios';


function AjaxPage() {

    const [dataFetch, setDataFetch] = useState(null);
    const [dataAxios, setDataAxios] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [showPicture, setShowPicture] = useState(false);

    async function getDataFetch() {
        try {

            const response = await fetch('https://dog.ceo/api/breeds/image/random')

            const result = await response.json();

            setDataFetch(result.message);
        }
        catch (error) {
            setErrorMessage('Une erreur est survenue lors de la requete fetch:' + error.message);
            console.error('Erreur:', error);
        }

    }

    async function getDataAxios() {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            setDataAxios(response.data.message);

        } catch (error) {
            setErrorMessage('Une erreur est survenue lors de la requete Axios:' + error.message);
            console.error('Erreur:', error);
        }

    }


    useEffect(() => {
        if (showPicture) {
            getDataAxios();
            getDataFetch();
        }

        return () => {
            setDataAxios(null);
            setDataFetch(null);
            setErrorMessage(null);
        }

    }, [showPicture])


    return (
        <>
            <h1 className="text-center mt-3">Demo Ajax et Fetch</h1>
            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">

                    <p>Pour executer une requete Ajax, nous allons utiliser la fonction fetch.</p>
                    <pre>{`await fetch('https://api.example.com/data')
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.error('Erreur:', error));
            `}</pre>
                </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
                    <p>Pour Utiliser axios :</p>
                    <ul>
                        <li>installer axios : <pre>npm install axios</pre></li>
                        <li>importer axios : <pre>import axios from 'axios';</pre></li>
                        <li>utiliser axios : <pre>axios.get('https://api.example.com/data')</pre></li>
                    </ul>
                </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">

                    <h3>utilisation de useEffect</h3>
                    <button onClick={() => setShowPicture(!showPicture)}>Afficher</button>
                </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
                    <h3>Fetch simple</h3>
                    <button onClick={getDataFetch}>Get Data</button>
                    {dataFetch ? (
                        <img src={dataFetch} alt="image" width="500" />
                    ) :
                        (
                            null
                        )}
                    {errorMessage ? <p className="text-danger">{errorMessage}</p> : (null)}
                </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
                    <h3>Fetch Axios</h3>
                    <button onClick={getDataAxios}>Get Data</button>
                    {dataAxios ? (
                        <img src={dataAxios} alt="image" width="500" />
                    ) :
                        (
                            null
                        )}
                    {errorMessage ? <p className="text-danger">{errorMessage}</p> : (null)}
                </div>
            </div>
        </>
    )
}

export default AjaxPage;