import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 35px 0xp;
  width: 1310px;
  margin: 0px auto;

  align-items: center;
  justify-content: space-between;
`;

export const NavBar = styled.nav`
  width: 75%;
  height: 50px;
  align-items: center;
  margin: 2rem 10px;
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

export const Divider = styled.div`
  width: 100vw;
  height: 0px;

  border: 3px solid #0093ff;
`;
