import styled from "styled-components";

export const ProjectPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  text-align: center;

  h2 {
    margin-top: 50px;
    font-size: 3rem;
  }

  > div {
    margin-top: 15px;
    box-shadow: 0 0 20px 0px black;
  }
`;

export const Projects = styled.section`
  max-width: 710px;
  margin: 50px auto;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  button {
    background: transparent;
    border: none;
  }
`;
