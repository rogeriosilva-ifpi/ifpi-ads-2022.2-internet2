import { Link } from "react-router-dom";

export function Menu(){
    return (
        <nav className='menu'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/players">Players</Link></li>
          </ul>
        </nav>
    )
}