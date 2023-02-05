import { ProjectPageContainer, Projects } from "./styles";
import todo from "../../assets/todo-cover.png";
import coffeeDelivery from "../../assets/coffee-delivery-cover.png";
import githubBlog from "../../assets/github-blog-cover.png";
import igniteShop from "../../assets/ignite-shop-cover.png";
import { Divider } from "../../components/Divider";

export function ProjectsPage() {
  return (
    <ProjectPageContainer>
      <h2>Rocketseat</h2>
      <Divider type="small" width="partial" />
      <Projects>
        <button>
          <img src={todo} alt="" />
        </button>
        <button>
          <img src={coffeeDelivery} alt="" />
        </button>
        <button>
          <img src={githubBlog} alt="" />
        </button>
        <button>
          <img src={igniteShop} alt="" />
        </button>
      </Projects>
    </ProjectPageContainer>
  );
}
