import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png';

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    return (
        <header>
            <div className="container">
                <Link to="/" className="title">
                    <img src={logo} alt="Elisa Bitmoji"/>
                    <h1>Epsilon</h1>
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/"><h1>Accueil</h1></Link></li>
                        <li><Link to="/projects"><h1>Projets</h1></Link></li>
                    </ul>
                </nav>
                <Link onClick={() => setIsActive(!isActive)} className="burger"><i class="fa-solid fa-bars"></i></Link>
                <nav className={`menu${isActive ? ' active' : ''}`}>
                    <ul>
                        <li><Link onClick={() => setIsActive(false)} to="/"><h1>Accueil</h1></Link></li>
                        <li><Link onClick={() => setIsActive(false)} to="/projects"><h1>Projets</h1></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};