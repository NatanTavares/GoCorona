import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  height: 100vh;
  padding: ${({ theme }) => theme.scales.spacing.md}
    ${({ theme }) => theme.scales.spacing.xl} 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 100%;
  padding: 0 0 ${({ theme }) => theme.scales.spacing.xl} 0;

  > div:first-child {
    margin: auto 0;
  }
`;

export const Started = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.scales.spacing.lg};

  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.scales.spacing.md};

    > h1 {
      strong {
        color: ${({ theme }) => theme.palette.blue};
      }
    }

    p {
      color: ${({ theme }) => theme.palette.gray};
      letter-spacing: 0.08em;
    }
  }
`;

export const RedAside = styled.aside`
  position: absolute;
  top: 0rem;
  right: -75%;
  z-index: -999;

  width: 100%;
  height: 100vh;

  border-top-left-radius: ${({ theme }) => theme.borderRadius.xl};
  border-bottom-left-radius: 30px;

  background: ${({ theme }) => theme.palette.red};
`;

export const Illustration = styled.div`
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
`;
