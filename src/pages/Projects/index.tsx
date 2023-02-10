import { ProjectPageContainer, Projects } from "./styles";
import todo from "/assets/todo-cover.png";
import coffeeDelivery from "/assets/coffee-delivery-cover.png";
import githubBlog from "/assets/github-blog-cover.png";
import igniteShop from "/assets/ignite-shop-cover.png";
import { Divider } from "../../components/Divider";

export function ProjectsPage() {
  return (
    <ProjectPageContainer>
      <h2>Rocketseat</h2>
      <Divider type="small" width="partial" />
      <Projects>
        <a
          href="https://ignite-react-js-to-do-list.vercel.app/"
          target="_blank"
        >
          <img src={todo} alt="" />
        </a>
        <a
          href="https://ignite-reactjs-coffee-delivery-gamma.vercel.app/"
          target="_blank"
        >
          <img src={coffeeDelivery} alt="" />
        </a>
        <a href="https://github-blog-two-phi.vercel.app/" target="_blank">
          <img src={githubBlog} alt="" />
        </a>
        <a href="https://ignite-shop-roan-one.vercel.app/" target="_blank">
          <img src={igniteShop} alt="" />
        </a>
      </Projects>
    </ProjectPageContainer>
  );
}
