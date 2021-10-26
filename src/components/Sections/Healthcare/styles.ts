import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  padding: 5rem 3.125rem 2.5rem;
  background: ${({ theme }) => theme.palette.bg.secondary};

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.scales.spacing.md};

    text-align: center;

    h1 > strong {
      color: ${({ theme }) => theme.palette.red};
    }

    p {
      max-width: 37.5rem;
      text-align: center;
      letter-spacing: 0.08em;

      color: ${({ theme }) => theme.palette.gray};
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 100%;
  height: 23.125rem;
  margin-top: -2rem;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;

  z-index: 1;
`;

export const ImageContainer = styled.div`
  position: absolute;

  img {
    width: 75rem;
  }
`;
