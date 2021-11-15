import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.scales.spacing.xl};

  height: 100vh;
  padding: 3.25rem ${({ theme }) => theme.scales.spacing.xl} 0;
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
