import { NavLink } from "react-router-dom";
import { Divider, HeaderContainer, NavBar } from "./styles";

export function HomeHeader() {
  let activeStyle = {
    backgroundColor: "rgba(0, 147, 255, 0.5)",
    transition: "0.2s",
  };

  return (
    <HeaderContainer>
      <NavBar>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          about me
        </NavLink>
        <NavLink
          to="/education"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          education
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          projects
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          contact
        </NavLink>
      </NavBar>

      <Divider />
    </HeaderContainer>
  );
}
