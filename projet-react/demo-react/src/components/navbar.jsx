import { Link } from "react-router-dom";

function Navbar(){
    return (
            <nav>
                <ul>
                <Link to="/">Homepage</Link>
                <Link to="/demo-composant">Demo Composant</Link>
                <Link to="/demo-conditionnel">Demo Conditionnel</Link>
                <Link to="/demo-collections">Demo Collections</Link>
                <Link to="/demo-evenements">Demo Evenements</Link>
                <Link to="/exo1">Exo 1</Link>
                <Link to="/exo2">Exo 2</Link>
                </ul>
            </nav>
    )
}

export default Navbar;