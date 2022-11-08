import { NavLink } from "react-router-dom";
import logo from "../assets/engineer.ico";
import "../styles/navbar.css";

const Navbar = ({ route }) => {
  return (
    <>
      {route === "/" ? null : (
        <nav>
          <div className="logo">
            <img src={logo} height="40px" />
            <h3>Jadoel</h3>
          </div>
          <div className="nav-menu">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              About
            </NavLink>
            <NavLink
              to={"/project"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Projects
            </NavLink>
            <NavLink
              to={"/blog"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Blog
            </NavLink>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
