import styled from "styled-components";

export const AboutMeContainer = styled.main``;

export const Description = styled.section`
  display: flex;

  max-width: 1260px;
  width: 100%;
  margin: 100px auto;

  justify-content: space-between;

  article {
    max-width: 600px;
    margin: 0px 0px auto auto;
    height: fit-content;

    text-align: center;

    img {
      width: 600px;
      height: 300px;
      border-radius: 50px;
      margin-bottom: 30px;
    }
  }
`;

export const Hero = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 31.25rem;
  line-height: 46.875rem;
  color: ${({ theme }) => theme.colors["base-title"]};

  margin-top: -100px;
`;

export const MyStory = styled.section`
  background-color: ${({ theme }) => theme.colors["base-title"]};
  color: ${({ theme }) => theme.colors["base-background"]};

  article {
    max-width: 1260px;
    width: 100%;

    margin: 0px auto;
    padding: 100px 0px;
    display: flex;

    justify-content: space-between;

    p {
      display: flex;
      max-width: 600px;
      text-align: center;
      align-items: center;
    }

    .imagesContainer {
      display: flex;
      flex-direction: column;
      img {
        width: 600px;
        height: 300px;
        border-radius: 50px;
        margin-bottom: 30px;
      }
    }
  }
`;
