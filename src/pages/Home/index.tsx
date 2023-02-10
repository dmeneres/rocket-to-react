import { Card, CardsContainer, Hero, HomeContainer } from "./styles";
import logo from "/assets/rocket-to-react-logo.svg";
import iconProgrammer from "/assets/icon-programmer.png";
import iconEducation from "/assets/icon-education.png";
import iconProjects from "/assets/icon-projects.png";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <HomeContainer>
      <Hero>
        <img src={logo} alt="" />
      </Hero>
      <CardsContainer>
        <Card>
          <Link to="/about">
            <img src={iconProgrammer} alt="" />
          </Link>
          <p>
            Aspiring web developer showcasing skills and projects. Focused on
            future tech.
          </p>
        </Card>
        <Card>
          <Link to="/education">
            <img src={iconEducation} alt="" />
          </Link>
          <p>
            Studying computer science, gaining experience as junior web
            developer.
          </p>
        </Card>
        <Card>
          <Link to="/projects">
            <img src={iconProjects} alt="" />
          </Link>
          <p>Building digital solutions, experienced with React.</p>
        </Card>
      </CardsContainer>
    </HomeContainer>
  );
}
