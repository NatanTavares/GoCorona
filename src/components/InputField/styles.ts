import styled from "styled-components";

type InputFieldProps = {
  error: boolean;
};

export const Container = styled.label<InputFieldProps>`
  p {
    font: ${({ theme }) => theme.font.cardLabel};
    font-size: 0.8125rem;
    letter-spacing: 0.03em;
  }

  input {
    padding: ${({ theme }) => theme.scales.spacing.sm};

    border: 1px solid;
    border-color: ${({ theme, error }) =>
      error ? theme.palette.red : theme.palette.gray};
    border-radius: ${({ theme }) => theme.borderRadius.sm};

    font-size: 0.8125rem;
    color: ${({ theme, error }) => error && theme.palette.red};
  }
`;
