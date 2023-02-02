import { ProjectsContainer } from "./styles";
import todo from "../../assets/todo-cover.png";
import coffeeDelivery from "../../assets/coffee-delivery-cover.png";
import githubBlog from "../../assets/github-blog-cover.png";
import igniteShop from "../../assets/ignite-shop-cover.png";

export function ProjectsPage() {
  return (
    <ProjectsContainer>
      <h2>Rocketseat</h2>
      <a href="/">
        <img src={todo} alt="" />
      </a>
      <a href="/">
        <img src={coffeeDelivery} alt="" />
      </a>
      <a href="/">
        <img src={githubBlog} alt="" />
      </a>
      <a href="/">
        <img src={igniteShop} alt="" />
      </a>
    </ProjectsContainer>
  );
}
