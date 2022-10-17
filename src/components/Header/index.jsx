import { Link } from 'react-router-dom'
 
export default function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/survey">Questionnaire</Link>
        </nav>
    )
}