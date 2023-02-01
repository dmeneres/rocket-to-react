import styled from "styled-components";

export const HomeContainer = styled.main`
  padding: 100px 190px;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;

  width: 1060px;
  margin: auto;
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 1060px;
  margin: 25px auto 0px;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 21.125rem;
  height: 16.06rem;

  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 30px;

  display: block;

  img {
    height: 62px;
    margin: 25px 141px 20px;
  }

  p {
    margin: 0px 54px 25px;
    text-align: center;
  }
`;
