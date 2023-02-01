import styled from "styled-components";

export const AboutMeContainer = styled.main``;

export const Description = styled.div`
  display: flex;

  max-width: 1260px;
  width: 100%;
  margin: 100px auto;

  justify-content: space-between;

  section {
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
