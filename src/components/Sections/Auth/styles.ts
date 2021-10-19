import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 9.375rem;

  height: 100vh;
  /* padding: 5rem 6.25rem;   */
  padding: 0 ${({ theme }) => theme.scales.spacing.xxl};

  background: ${({ theme }) => theme.palette.bg.secondary};
`;

export const MockContainer = styled.div``;

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
`;
