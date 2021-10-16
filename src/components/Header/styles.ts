import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  div:last-child {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;

    max-width: 42rem;
  }
`;

export const Navigation = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;

  list-style: none;
  font: ${({ theme }) => theme.font.navigationLabel};
  letter-spacing: 0.14em;

  li:hover {
    text-decoration: underline;
  }
`;
