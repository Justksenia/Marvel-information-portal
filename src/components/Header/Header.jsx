
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

const Header = () => {
    let activeStyle = {
        color: "#9F0013"
      };
    return (
        <header>
            <h1 className={style.headerTitle}>
                <NavLink to="/">
                    <span>Marvel</span> information portal
                </NavLink>
            </h1>
            <nav>
            <div className={style.headerMenu}>
                <ul>
                    <li><NavLink style={({ isActive }) =>
                        isActive ? activeStyle : null
                         } to="/" end>Characters</NavLink></li>
                    /
                    <li><NavLink style={({ isActive }) =>
                        isActive ? activeStyle : null
                         } to="/comics" end>Comics</NavLink></li>
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;