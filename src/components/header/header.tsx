import { NavLink } from "react-router-dom"

interface Props {
    type: string,
    color: string,
    next: string
}

export const Header: React.FC<Props> = ({ type, color, next }) => {
    return (
        <div className={color}>
            <h2>{type}</h2>
            <NavLink
                to={next}
                className="link-button"
            >
                {next}
            </NavLink>
        </div>
    )
}