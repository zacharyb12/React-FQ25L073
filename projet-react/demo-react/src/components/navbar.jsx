import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(){
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [isExoOpen, setIsExoOpen] = useState(false);

    return (
            <nav className="navbar">
                <ul>
                <Link className="bg-white p-05 rounded" style={{color : 'black !important'}} to="/">Homepage</Link>

                {isDemoOpen ?
                    <ul className="navbar-links-open" onMouseLeave={() => setIsDemoOpen(!isDemoOpen)}>
                        
                        <li><Link to="/demo-composant">Composant</Link></li>
                        <li><Link to="/demo-conditionnel">Conditionnel</Link></li>
                        <li><Link to="/demo-collections">Collections</Link></li>
                        <li><Link to="/demo-evenements">Evenements</Link></li>
                    </ul> 
                :
                <button className="bg-white p-05 rounded" onClick={() => setIsDemoOpen(!isDemoOpen)}>Demo</button> 
                }

                {isExoOpen ?
                    <ul className="navbar-links-open" onMouseLeave={() => setIsExoOpen(!isExoOpen)}>
                        <li><Link to="/exo1">Composant</Link></li>
                        <li><Link to="/exo2">List</Link></li>
                        <li><Link to="/exo3">Compteur</Link></li>
                    </ul>
                :
                <button className="bg-white p-05 rounded" onClick={() => setIsExoOpen(!isExoOpen)}>Exo</button>
                }

                </ul>
            </nav>
    )
}

export default Navbar;