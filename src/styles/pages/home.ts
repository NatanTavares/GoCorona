import styled from "styled-components";

export const Container = styled.main`
  max-width: 1300px;
  margin: auto;
  padding: ${({ theme }) => theme.scales.spacing.xl};
`;
