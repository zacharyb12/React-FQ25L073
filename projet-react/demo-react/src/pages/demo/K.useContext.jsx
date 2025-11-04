function DemoUseContext() {
    return (
        <>
            <h1 className="mt-3 text-center">useContext</h1>

            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
                    <p>Le hook useContext permet de partager des données entre plusieurs composants sans avoir à passer les props manuellement à chaque niveau de l'arborescence.</p>
                    <p>Il est souvent utilisé pour gérer des thèmes, des préférences utilisateur ou des données globales dans une application React.</p>
                    <p>il contient deux éléments principaux : le Provider et le Consumer.</p>
                    <ul>
                        <li>Le Provider : Il permet de fournir une valeur à tous les composants enfants qui consomment ce contexte.</li>
                        <li>Le Consumer : Il permet aux composants d'accéder à la valeur fournie par le Provider.</li>
                    </ul>
                </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
                    <p>Ici on commence par creer le context : ThemeContext</p>
                    <p>Ensuite on implemente les valeurs pour dark ou light mode</p>
                    <p>Enfin on utilise le Provider pour encapsuler notre application et fournir le contexte</p>
                    <p>Grace à ça le ou les children peuvent récuperer le contexte en utilisant le hook useContext</p>
                </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
                    <pre>{`
import { createContext, useState } from "react";

const ThemeContext = createContext();

const themes = {
    light: {
        backgroundColor: 'white',
        color: 'black'
    },
    dark: {
        backgroundColor: 'black',
        color: 'white'
    }
};


export const ThemeProvider = ({ children }) => {

    const [currentTheme, setCurrentTheme] = useState('light');

    const toggleTheme = () => {
        setCurrentTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };


    const themeValue = {
        theme: themes[currentTheme],
        currentTheme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={themeValue}>

            <button onClick={toggleTheme}>Toggle Theme</button>

            {children}

        </ThemeContext.Provider>
    );
};

export default ThemeContext; 
`}</pre>

                </div>
            </div>

            <div className="card w-75 mt-3 p-1 text-center bg-primary">
                <div className="card p-1 bg-white">
                    <h2>Consomation du contexte</h2>
                    <p>La consomation du context est simple, il suffit d'utiliser le hook useContext dans n'importe quel composant enfant pour accéder aux valeurs du contexte.</p>

                </div>
            </div>


            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
                <div className="card p-1 bg-white">
                    <pre>{`
import { useContext } from "react";

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <>
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>

            <Router>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                </Routes>
            </Router>

        </div>
    </>
  )}

export default App
                `}</pre>
                </div>
            </div>
        </>
    )
}

export default DemoUseContext;