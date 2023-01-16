import { Link } from "react-router-dom"

export default function Navbar() {
    return <>
        <div>
            <ul>
                <li>
                    <Link to="/shopping">shoopin list</Link>
                </li>
                <li>
                    <Link to="/todo"> class todos</Link>
                </li>
                <li>
                    <Link to="/counter">Counter </Link>

                </li>
            </ul>
        </div>
    </>
}