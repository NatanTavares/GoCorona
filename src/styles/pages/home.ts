import styled from "styled-components";

export const Container = styled.main`
  max-width: 81.25rem;
  margin: auto;

  box-shadow: 0 0 40px 2px ${({ theme }) => theme.palette.shadow};
`;
