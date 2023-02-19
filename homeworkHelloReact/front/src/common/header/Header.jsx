import {Link} from "react-router-dom";

export default function HeaderMain() {
    return (
        <header className="header">
            <div className="img-holder">
                <img src="https://imgpng.ru/d/minions_PNG17.png" alt="logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}