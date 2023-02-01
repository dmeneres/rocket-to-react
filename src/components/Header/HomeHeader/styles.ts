import styled from "styled-components";

export const HeaderContainer = styled.header``;

export const NavBar = styled.nav`
  width: 75%;
  height: 50px;
  align-items: center;
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  background-color: rgba(156, 171, 207, 0.5);
  border-radius: 100px;

  a {
    color: ${({ theme }) => theme.colors["base-text"]};
    width: 9.375rem;
    text-align: center;
    border-radius: 100px;

    padding: 0.25rem;
  }

  a:hover {
    background-color: rgba(0, 147, 255, 0.2);
    transition: 0.2s;
  }
`;
