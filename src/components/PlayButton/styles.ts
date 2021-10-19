import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  gap: ${({ theme }) => theme.scales.spacing.md};
  padding: ${({ theme }) => theme.scales.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  background: ${({ theme }) => theme.palette.bg.main};
  border: none;

  &:hover {
    filter: brightness(0.96);
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    font: ${({ theme }) => theme.font.paraph};
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.palette.highlight};
    letter-spacing: 0.08em;

    p:last-child {
      color: ${({ theme }) => theme.palette.contrast};
      letter-spacing: 0.165em;
      font-size: 0.5625rem;
      line-height: 0.75rem;
    }
  }
`;
