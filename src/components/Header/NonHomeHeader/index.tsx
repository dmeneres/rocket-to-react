import { NavLink } from "react-router-dom";
import { HeaderContainer, NavBar } from "./styles";
import rtrLogo from "../../../../public/rocket-to-react-favicon.svg";
import { Divider } from "../../Divider";

export function NonHomeHeader() {
  let activeStyle = {
    backgroundColor: "rgba(0, 147, 255, 0.5)",
    transition: "0.2s",
  };

  return (
    <>
      <HeaderContainer>
        <img src={rtrLogo} alt="" />

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
      </HeaderContainer>
      <Divider type="big" />
    </>
  );
}
