import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 12.5rem;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  max-width: 36.6rem;
  width: 100%;

  max-height: 6.25rem;
  height: 100%;
  margin: auto;

  background: ${({ theme }) => theme.palette.bg.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font: ${({ theme }) => theme.font.subtitle};
      color: ${({ theme }) => theme.palette.red};
      letter-spacing: 0.14em;
    }

    span {
      font: ${({ theme }) => theme.font.paraph};
      font-weight: 700;
      letter-spacing: 0.37em;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100vw;
  max-width: 43.75rem;

  position: absolute;
  left: 50%;

  transform: translateX(-50%);
  z-index: -999;
`;
