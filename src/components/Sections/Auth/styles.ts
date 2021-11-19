import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 9rem;

  min-height: 100vh;
  padding: 0 ${({ theme }) => theme.scales.spacing.xxl};

  background: ${({ theme }) => theme.palette.bg.secondary};

  @media (max-width: 800px) {
    gap: ${({ theme }) => theme.scales.spacing.xl};

    flex-direction: column;
  }
`;

export const MockContainer = styled.div`
  max-width: 21.125rem;

  @media (max-width: 800px) {
    margin-top: ${({ theme }) => theme.scales.spacing.lg};
    max-width: 18rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.scales.spacing.lg};

  article {
    strong {
      color: ${({ theme }) => theme.palette.red};
    }

    p {
      color: ${({ theme }) => theme.palette.gray};
      letter-spacing: 0.08em;
      margin-top: ${({ theme }) => theme.scales.spacing.md};
    }
  }

  @media (max-width: 800px) {
    text-align: center;
    align-items: center;
  }
`;
