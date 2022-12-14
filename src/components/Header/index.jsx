import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

export default function Header() {
    return (
        <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>Survey</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>
        </nav>
    )
}