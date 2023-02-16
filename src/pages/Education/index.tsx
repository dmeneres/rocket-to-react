import { Divider } from "../../components/Divider";
import {
  EducationSection,
  EducationContainer,
  Introduction,
  FrontEndSection,
} from "./styles";

import civilEngineering from "/assets/civil-engineering.jpg";
import physics from "/assets/physics.jpg";
import mechanicalEngineering from "/assets/mechanical-engineering.jpg";
import rocketseat from "/assets/rocketseat.webp";
import freecodecamp from "/assets/freecodecamp.webp";

export function EducationPage() {
  return (
    <EducationContainer>
      <Introduction>
        <h2>My Education</h2>
        <p>
          I have had a diverse educational journey, I started my focus on
          physics and continued my studies on mechanical engineering. In the
          last year of the degree I decided to shift my focus to web development
          as I found more purpose in the area.
        </p>
      </Introduction>
      <Divider type="big" />
      {/* <EducationSection>
        <h2>Civil Engineering</h2>
        <Divider type="small" width="partial" />
        <article>
          <img src={civilEngineering} alt="" />
          <p>
            I have had a diverse educational journey, starting with my studies
            in civil engineering at ISEP in Porto, Portugal. After a year, I
            shifted my focus to physics and continued my studies at Aveiro
            University for two years. However, I wasn't fully satisfied with my
            choice and decided to switch to mechanical engineering back in
            Porto, where I studied for another two years. Despite my best
            efforts, I lost interest in these subjects and left my studies. I
            then turned to web development and started with the basics of HTML,
            CSS, and JavaScript through Rocketseat's Discover program. Over the
            past two years, I have continued my education in web development and
            have taken the opportunity to improve my skills through Rocketseat's
            Ignite course, where I am currently learning React and Next.js.
          </p>
        </article>
      </EducationSection>
      <Divider type="big" /> */}
      <EducationSection>
        <h2>Physics</h2>
        <Divider type="small" width="partial" />
        <article>
          <img src={physics} alt="" />
          <p>
            This is the start of my journey, in Aveiro University for 2 years.
            Here I learned about the fundamentals of physics (eletromagnetism,
            thermodynamics and classical mechanics) as well as fundamentals on
            more complex matters as quantum physics. Here I also found my
            passion in programming as I learned python and started my very first
            personal project, a bot for social media to get more engagement. I
            left prior to finishing the degree as I found it too theoric, I was
            looking for something more pratical to get me into the labor market.
          </p>
        </article>
      </EducationSection>
      <Divider type="big" />
      <EducationSection>
        <h2>Mechanical Engineering</h2>
        <Divider type="small" width="partial" />
        <article>
          <img src={mechanicalEngineering} alt="" />
          <p>
            This degree is the pratical version of physics, therefore it was the
            most logical step afterwards. Mechanical eng is really diverse as it
            is the core of all engineering. You learn design thinking,
            abstraction to solve problems, computer aided design and mathematics
            & algebra. There was nothing left here for me, as my passion for
            programming was growing at a fast pace and finally started my front
            end journey as a self tought dev.
          </p>
        </article>
      </EducationSection>
      <Divider type="big" />
      <FrontEndSection>
        <h2>Frontend Developer</h2>
        <Divider type="small" width="partial" />
        <article>
          <div>
            <img src={rocketseat} alt="" />
            <img src={freecodecamp} alt="" />
          </div>
          <p>
            I wanted to land a first job as dev so I studied the most demanded
            skills and most beginner friendly tools for web dev. Javascript,
            React and Next. Started with a platform called Rocketseat. In there
            I finished two programs, the first, discover program, where you walk
            your first steps in web dev. Learning javascript, html, css as well
            as semantics and accessibility. Then I subscribed to the Ignite
            program where you learn some technologies widely used in the market.
            React is the base of this program so you start with the
            fundamentals. While you learn these they teach you about css
            preprocessors like Sass and some things about databases like
            FaunaDB. The projects developed in there include integrations with
            Stripe API, NextJS with SSR and SPA, ORM's like Prisma. Lastly I
            complemented these with freecodecamp courses, responsive web design
            and javascript algorithms.
          </p>
        </article>
      </FrontEndSection>
    </EducationContainer>
  );
}
