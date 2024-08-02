import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (  
        <div className="Nav-bar">
            <h2>Dojo Blog</h2>
            <div className="link">
                <Link to = '/'>Home</Link>
                <Link to  = '/create'> Blog </Link>
            </div>
        </div>
    );
}
 
export default Navbar;