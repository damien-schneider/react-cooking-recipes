import './Navbar.css';
import { Link } from 'react-router-dom';
//components
import SearchBar from './SearchBar';

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to='/' className="brand">
                    <h1>Poly Cooking</h1>
                </Link>
                <SearchBar />
                <Link to='/create'>
                    Create Recipes
                </Link>
            </nav>
        </div>
    )
}
