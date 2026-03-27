import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" end className={({ isActive }) => `nav-button${isActive ? " active" : ""}`}>
        Home
      </NavLink>
      <NavLink to="/cv" className={({ isActive }) => `nav-button${isActive ? " active" : ""}`}>
        CV
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => `nav-button${isActive ? " active" : ""}`}>
        Projects
      </NavLink>
    </nav>
  );
}
