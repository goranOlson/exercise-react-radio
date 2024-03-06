import { NavLink } from "react-router-dom";
import { IRoute } from "../interfaces"

export interface IHeaderProps {
    links: IRoute[];
}

export function Header({links}: IHeaderProps):JSX.Element {

    return (
        <header className="page-header">
          <h1>React Radio</h1>
          <nav className="page-navbar">
            {links.map((link) => (
              <NavLink className="link" to={link.path} key={link.id}>
                {link.title}
              </NavLink>
            ))}
          </nav>
        </header>
      );
}