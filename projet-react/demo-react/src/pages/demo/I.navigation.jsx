function NavigationParamsPage() {
    return (
        <>
            <h1 className="mt-3 text-center">Navigation avec paramètres</h1>

            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
                    <p>Pour naviguer entre les pages il existe plusieurs méthodes</p>
                    <ul>
                        <li>Utiliser le hook useNavigate pour rediriger l'utilisateur vers une autre page</li>
                        <li>Utiliser le hook useParams pour récupérer les paramètres d'URL</li>
                    </ul>

                    <p>Il faut également ajouter un paramètre dans l'URL pour que le composant puisse récupérer les données correspondantes.</p>
                    <p>ce paramètre sera ajouter dans la route correspondante</p>
                </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
                    <p><code>&lt;Route path="/demo-navigation/:id" element=&#123;&lt;NavigationParamsPage /&gt;&#125; /&gt;</code></p>
                </div>
            </div>


            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
                    <h2>Redirection</h2>
                </div>
                <div className="card p-1 mt-2 bg-white">
                    <pre>{`
    import { useParams, useNavigate } from 'react-router-dom';

    function NavigationParamsPage() {

        const { id } = useParams();

        const navigate = useNavigate();

        function goToDetails() {

            navigate(\`https://monapi.com/user/\${id}\`);
        }
        return (
            <div>
                <h2>Paramètre ID : {id}</h2>
                <button onClick={goToDetails}>Aller à l'accueil</button>
            </div>
        );
    }
    `}</pre>
                </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
                    <h2>Récupération des paramètres</h2>
                </div>
                <div className="card p-1 mt-2 bg-white">
                    <pre>{`
    import { useParams } from 'react-router-dom';

    function NavigationParamsPage() {

        const { id } = useParams();

        useEffect(() => {
axios.get(\`https://monapi.com/user/\${id}\`)
.then((response) => setData(response.data))
.catch((error) => console.error('Error fetching data:', error));
  }, []);

        return (
            <>
                <h2>Paramètre ID : {id}</h2>
            </>
        );

    }
`}</pre>
                </div>
            </div>
        </>
    );
}

export default NavigationParamsPage;