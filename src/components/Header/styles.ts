import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${({ theme }) => theme.scales.spacing.lg};

  div:last-child {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.scales.spacing.md};

    max-width: 42rem;
  }
`;

export const Navigation = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.scales.spacing.md};

  max-width: 21.5rem;

  list-style: none;
  font: ${({ theme }) => theme.font.navigationLabel};
  letter-spacing: 0.14em;

  li {
    transition: 0.2s;
  }

  li:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.palette.red};
    text-decoration-color: ${({ theme }) => theme.palette.contrast};
  }
`;
