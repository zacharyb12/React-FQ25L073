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