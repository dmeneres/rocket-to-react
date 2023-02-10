import styled from "styled-components";
import { Card } from "../Home/styles";

export const ContactPageContainer = styled.main`
  form {
    width: 600px;

    display: flex;
    flex-direction: column;

    margin: 0px auto;
  }
`;

export const SocialCard = styled(Card)`
  display: flex;
  flex-direction: column;

  justify-content: center;

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
