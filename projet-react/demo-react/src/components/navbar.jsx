import { Link } from "react-router-dom";

function Navbar(){
    return (
            <div>
                <Link to="/">Homepage</Link>
                <Link to="/composant">Demo Composant</Link>
            </div>
    )
}

export default Navbar;