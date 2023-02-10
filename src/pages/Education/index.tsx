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
          I have had a diverse educational journey, starting with my studies in
          civil engineering at ISEP in Porto, Portugal. After a year, I shifted
          my focus to physics and continued my studies at Aveiro University for
          two years. However, I wasn't fully satisfied with my choice and
          decided to switch to mechanical engineering back in Porto, where I
          studied for another two years. Despite my best efforts, I lost
          interest in these subjects and left my studies. I then turned to web
          development and started with the basics of HTML, CSS, and JavaScript
          through Rocketseat's Discover program. Over the past two years, I have
          continued my education in web development and have taken the
          opportunity to improve my skills through Rocketseat's Ignite course,
          where I am currently learning React and Next.js.
        </p>
      </Introduction>
      <Divider type="big" />
      <EducationSection>
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
      <Divider type="big" />
      <EducationSection>
        <h2>Physics</h2>
        <Divider type="small" width="partial" />
        <article>
          <img src={physics} alt="" />
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
      <Divider type="big" />
      <EducationSection>
        <h2>Mechanical Engineering</h2>
        <Divider type="small" width="partial" />
        <article>
          <img src={mechanicalEngineering} alt="" />
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
      </FrontEndSection>
    </EducationContainer>
  );
}
