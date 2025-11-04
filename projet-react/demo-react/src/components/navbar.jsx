import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [isExoOpen, setIsExoOpen] = useState(false);

    return (
        <nav className="navbar">
            <ul>

                <li><Link className="bg-white rounded color-black" to="/">Homepage</Link></li>

                {/*Affichage conditionnel des liens , utilisation d'une variable ( state )*/}
                {/* l' element se referme si on sort de la zone  ou si on clique */}
                {isDemoOpen ?
                    <li className="navbar-block">
                        <ul className="navbar-links-open" onMouseLeave={() => setIsDemoOpen(!isDemoOpen)} onClick={() => setIsDemoOpen(!isDemoOpen)} >
                            {/* Liens */}
                            <li><Link to="/demo-composant">Composant</Link></li>
                            <li><Link to="/demo-conditionnel">Conditionnel</Link></li>
                            <li><Link to="/demo-collections">Collections</Link></li>
                            <li><Link to="/demo-evenements">Evenements</Link></li>
                            <li><Link to="/demo-formulaires">Formulaires</Link></li>
                            <li><Link to="/demo-communication">Communication</Link></li>
                            <li><Link to="/demo-useEffect">Hooks useEffect</Link></li>
                            <li><Link to="/demo-ajax">Ajax et Fetch</Link></li>
                            <li><Link to="/demo-hooks-perso">Hooks Perso</Link></li>
                            <li><Link to="/demo-useContext">useContext</Link></li>
                            <li><Link to="/demo-navigation">Navigation</Link></li>

                        </ul>
                    </li>

                    :
                    <li>
                        <button className="bg-white p-05 rounded" onClick={() => setIsDemoOpen(!isDemoOpen)}>Demo</button>
                    </li>

                }

                {/*Affichage conditionnel des liens , utilisation d'une variable ( state )*/}
                {/* l' element se referme si on sort de la zone  ou si on clique */}
                {isExoOpen ?
                    <li className="navbar-block">

                        <ul className="navbar-links-open " onMouseLeave={() => setIsExoOpen(!isExoOpen)} onClick={() => setIsExoOpen(!isExoOpen)}>

                            {/* Liens */}
                            <li><Link to="/exo1">Composant</Link></li>
                            <li><Link to="/exo2">List</Link></li>
                            <li><Link to="/exo3">Compteur</Link></li>
                            <li><Link to="/exo4/form">Formulaire user</Link></li>
                            <li><Link to="/exo4.1/calculatrice">Calculatrice</Link></li>
                            <li><Link to="/exo5/todo">Todo List</Link></li>

                        </ul>
                    </li>

                    :
                    <li>
                        <button className="bg-white p-05 rounded" onClick={() => setIsExoOpen(!isExoOpen)}>Exo</button>
                    </li>

                }

            </ul>
        </nav>
    )
}

export default Navbar;