import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='header'>
            <div className='header__logo'>
                <Link className='header__logo__link' to="/">Guillergweb-dev</Link>
            </div>
            <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                <ul className="header__nav__list">
                    <li className="header__nav__list__item">
                        <Link className="header__nav__list__item__link" to="/">Accueil</Link>
                    </li>
                    <li className="header__nav__list__item">
                        <Link className="header__nav__list__item__link" to="/apropos">Qui suis je ?</Link>
                    </li>
                    <li className="header__nav__list__item">
                        <Link className="header__nav__list__item__link" to="#competences-title">Compétences</Link>
                    </li>
                    <li className="header__nav__list__item">
                        <Link className="header__nav__list__item__link" to="/projets">Projets</Link>
                    </li>
                    <li className="header__nav__list__item" id="nav-contact">
                        <a href="mailto:guillerg680@gmail.com">Contact</a>
                    </li>   
                </ul>
            </nav>
            <div className={`header__burger ${isMenuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
                <div className="header__burger__line"></div>
                <div className="header__burger__line"></div>
                <div className="header__burger__line"></div>
            </div>
        </header>
    );
}

export default Header;



