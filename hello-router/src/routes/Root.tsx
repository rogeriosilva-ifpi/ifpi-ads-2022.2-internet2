import { Link, Outlet } from "react-router-dom";

export function Root(){
    return (
        <div>
            <header>
                <h1>Topo</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/details">Detalhes</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>Rodapé</footer>
        </div>
    )
}