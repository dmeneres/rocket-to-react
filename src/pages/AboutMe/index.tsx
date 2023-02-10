import { AboutMeContainer, Description, Hero, MyStory } from "./styles";
import portoSaoBento from "/assets/porto-sao-bento-clock.jpg";
import aveiroUniversity from "/assets/aveiro-university.jpg";
import isep from "/assets/isep.jpg";
import { Divider } from "../../components/Divider";

export function AboutMePage() {
  return (
    <AboutMeContainer>
      <Description>
        <Hero>Hi</Hero>
        <article>
          <img src={portoSaoBento} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            lectus et est tempus tempor id non ipsum. Cras ac eros dapibus,
            blandit metus eget, tempor lectus. Maecenas tempus semper nulla in
            convallis. Vestibulum commodo risus id leo sagittis molestie.
            Curabitur mollis ligula ac faucibus gravida. Nullam ut suscipit
            nunc. Nunc in urna sit amet lacus lacinia pellentesque. In eget.
          </p>
        </article>
      </Description>
      {/* <Divider type="big" /> */}
      <MyStory>
        <article>
          <div className="imagesContainer">
            <img src={aveiroUniversity} alt="" />
            <img src={isep} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tempor lobortis tincidunt. Cras feugiat porttitor fringilla. Sed
            luctus justo quis nunc hendrerit, sit amet bibendum nunc
            pellentesque. Nunc erat metus, ullamcorper sit amet dignissim ac,
            vehicula a magna. Aliquam lacinia dui sed urna tristique sodales.
            Mauris urna erat, placerat et massa sit amet, consequat ultrices
            lorem. Duis cursus ipsum vitae pulvinar rutrum. Etiam porta in elit
            et malesuada. Donec sit amet massa eleifend, tempus purus eget,
            aliquet tellus. Nullam pharetra nisi ut finibus aliquet. Morbi eget
            purus quam. Fusce efficitur ultricies felis, et egestas elit rutrum
            et. Sed non lectus mollis, porta quam dignissim, varius nibh.
            Aliquam a scelerisque urna. In ultricies tellus ut ex gravida
            scelerisque. Aliquam erat volutpat. Vestibulum pulvinar dui nisl, ac
            commodo lectus dictum id. Nam nec blandit velit. Curabitur ornare
            turpis id blandit eleifend. Maecenas ex nunc, porta ut placerat et,
            pellentesque nec massa. Suspendisse ex dolor, tempus eget erat ac,
            tincidunt pulvinar dolor. Suspendisse dictum dictum interdum. Nulla
            vulputate ex in arcu ullamcorper, dignissim tempor mi euismod.
            Praesent vulputate lorem nisi, quis posuere elit viverra eu. Mauris
            dapibus libero eget orci fringilla, non iaculis est malesuada.
            Pellentesque sollicitudin, ipsum eget sodales euismod, dolor lectus
            luctus sapien, at varius neque elit eu nisl. Vestibulum tincidunt
            nec ligula ut tincidunt. Quisque viverra vehicula dolor, sit amet
            vulputate tellus dignissim sit amet.
          </p>
        </article>
      </MyStory>
    </AboutMeContainer>
  );
}
