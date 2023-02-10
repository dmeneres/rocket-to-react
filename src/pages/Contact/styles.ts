import styled from "styled-components";
import { Card } from "../Home/styles";

export const ContactPageContainer = styled.main`
  display: flex;
  width: 100vw;

  margin: 200px 0px;
  gap: 25px;

  justify-content: center;
  align-items: center;

  form {
    width: 600px;

    display: flex;

    margin: 0px auto;
  }
`;

export const SocialCard = styled(Card)`
  display: flex;
  flex-direction: column;

  justify-content: center;

  p {
    width: fit-content;

    margin-top: -30px;
    margin-left: 20px;

    font-weight: bold;
  }

  button {
    background-color: transparent;
    border: none;
  }

  div {
    height: fit-content;
    width: fit-content;
    margin: 0px auto;
  }

  a {
    margin: 0px auto;
    text-align: center;
    color: black;
  }

  a:hover {
    text-decoration: underline;
    transition: 0.2s;
  }
`;
