import styled from "styled-components";

export const EducationContainer = styled.main`
  background-color: #d1d1e8;
`;

export const Introduction = styled.section`
  max-width: 1260px;
  margin: 0px auto;
  padding: 100px 0px;

  h2 {
    font-size: 5rem;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 65px;
  }
`;

export const EducationSection = styled(Introduction)`
  h2 {
    font-size: 3rem;
  }

  img {
    width: 500px;
    height: 600px;
    border-radius: 50px;
    object-fit: cover;

    border: 1px solid black;
    box-shadow: 0 0 40px 2px black;
  }

  > div {
    margin-top: 15px;
    box-shadow: 0 0 20px 0px black;
  }

  article {
    display: flex;
    margin-top: 100px;
    justify-content: space-between;
    align-items: center;

    p {
      max-width: 600px;
      margin: auto 0px;
    }
  }
`;

export const FrontEndSection = styled(EducationSection)`
  img {
    width: 500px;
    height: 250px;
  }

  article > div {
    display: block;
  }
`;
