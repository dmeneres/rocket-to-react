import styled from "styled-components";

export const HomeContainer = styled.main`
  padding: 100px 190px;
  display: block;
  width: 80vw;

  margin: 0px auto;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1060px;
  width: 80vw;
  margin: 3rem auto;
`;

export const CardsContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  max-width: 1060px;
  width: 80%;
  margin: 25px auto 0px;

  justify-content: center;

  gap: 1rem;
`;

export const Card = styled.div`
  width: 1fr;
  width: 21.125rem;
  height: 16.06rem;

  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 30px;

  display: block;

  img {
    display: flex;
    height: 62px;
    margin: 25px auto 20px;
  }

  p {
    margin: 0px 54px 25px;
    text-align: center;
  }
`;
