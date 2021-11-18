import styled from "styled-components";

type ContainerProps = {
  error: boolean;
};

export const Container = styled.label<ContainerProps>`
  p {
    font: ${({ theme }) => theme.font.navigationLabel};
    font-size: 1rem;
    margin-bottom: ${({ theme }) => theme.scales.spacing.md};
  }

  textarea {
    resize: none;

    height: 100vh;
    max-height: 200px;
    width: 100%;

    padding: ${({ theme }) => theme.scales.spacing.sm};

    border: 1px solid;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border-color: ${({ theme, error }) =>
      error ? theme.palette.red : theme.palette.gray};
  }
`;
