import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.scales.spacing.lg};

  height: 100vh;
  padding: 3.25rem ${({ theme }) => theme.scales.spacing.xl} 0;

  @media (max-width: 810px) {
    padding-top: ${({ theme }) => theme.scales.spacing.xl};
  }
`;

export const Summary = styled.div`
  flex: 1;
  margin: 0 ${({ theme }) => theme.scales.spacing.xl};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.scales.spacing.lg};

  @media (max-width: 810px) {
    flex-direction: column-reverse;
    justify-content: space-around;

    text-align: center;

    gap: 0;
  }
`;

export const Content = styled.div`
  article {
    margin-bottom: ${({ theme }) => theme.scales.spacing.lg};

    h1 {
      margin-bottom: ${({ theme }) => theme.scales.spacing.md};

      strong {
        color: ${({ theme }) => theme.palette.blue};
      }
    }

    p {
      max-width: 22.5rem;
      color: ${({ theme }) => theme.palette.gray};
      letter-spacing: 0.08em;
    }
  }
`;

export const ScoreboardWrapper = styled.div`
  @media (max-width: 460px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  @media (max-width: 810px) {
    display: flex;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  min-width: 25rem;

  button {
    background: none;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.md};

    :hover {
      filter: brightness(0.96);
    }
  }
`;
