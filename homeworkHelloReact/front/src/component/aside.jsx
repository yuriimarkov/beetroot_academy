import {Link} from "react-router-dom";
export default function Side() {
    return (
        <aside className="aside">
        <h2>Aside</h2>
        <ul className="aside-list">
                    <li className="list-item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
        </aside>
    )
}