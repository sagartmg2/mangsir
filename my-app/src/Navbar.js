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
                <li>
                    <Link to="/cart">Cart </Link>
                </li>
                <li>
                    <Link to="/comments">Fetch Async Comment from API </Link>
                </li>
            </ul>
        </div>
    </>
}