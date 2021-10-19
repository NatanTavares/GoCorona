import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 12.5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  max-width: 36.6rem;
  max-height: 6.25rem;
  width: 100%;
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
  scale: 1.2;

  position: absolute;
  left: 50%;
  top: 6%;

  transform: translateX(-40%);
  z-index: -999;
`;
