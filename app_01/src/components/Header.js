import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="menu">
            <p >Contact APP</p>
            <NavLink style={{textDecoration:"none",fontSize:20}} to={'/login'}>Enter</NavLink>
        </header>
    )
}
export default Header;