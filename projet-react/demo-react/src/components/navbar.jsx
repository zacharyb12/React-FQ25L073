import { Link } from "react-router-dom";

function Navbar(){
    return (
            <nav>
                <ul>
                <Link to="/">Homepage</Link>
                <Link to="/demo-composant">Demo Composant</Link>
                <Link to="/exo1">Exo 1</Link>
                <Link to="/demo-conditionnel">Demo Conditionnel</Link>
                <Link to="/demo-collections">Demo Collections</Link>
                </ul>
            </nav>
    )
}

export default Navbar;