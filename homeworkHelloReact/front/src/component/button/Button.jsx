
import './index.css';

export function Button(props) {
    return <button className={`button ${props.className || ''}`}>{props.name || "Start"}</button>
}
