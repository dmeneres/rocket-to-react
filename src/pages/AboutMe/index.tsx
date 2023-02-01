import { AboutMeContainer, Description, Hero } from "./styles";
import portoSaoBento from "../../assets/porto-sao-bento-clock.jpg";

export function AboutMePage() {
  return (
    <AboutMeContainer>
      <Description>
        <Hero>Hi</Hero>
        <section>
          <img src={portoSaoBento} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            lectus et est tempus tempor id non ipsum. Cras ac eros dapibus,
            blandit metus eget, tempor lectus. Maecenas tempus semper nulla in
            convallis. Vestibulum commodo risus id leo sagittis molestie.
            Curabitur mollis ligula ac faucibus gravida. Nullam ut suscipit
            nunc. Nunc in urna sit amet lacus lacinia pellentesque. In eget.
          </p>
        </section>
      </Description>
    </AboutMeContainer>
  );
}
