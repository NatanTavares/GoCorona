import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 18rem;
  min-width: 14rem;
  width: 30vw;

  max-height: 18rem;
  min-height: 14rem;
  height: 30vw;

  background: ${(props) => props.theme.palette.bg.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 18px ${({ theme }) => theme.palette.shadow};

  @media (max-width: 940px) {
    max-width: 14rem;
    min-height: 10rem;

    max-height: 14rem;
    min-height: 10rem;
  }

  @media (max-width: 760px) {
    max-width: 12rem;
    min-width: 10rem;

    min-height: 16rem;
  }

  @media (max-width: 400px) {
    max-width: 10rem;
    min-width: 9rem;

    max-height: 10rem;
    min-height: 9rem;
  }
`;

export const Content = styled.div`
  padding: 0 1rem 2.5rem;
  text-align: center;
  letter-spacing: 0.08em;

  @media (max-width: 400px) {
    padding: 0 1rem 1.5rem;
  }

  h2 {
    font: ${({ theme }) => theme.font.cardLabel};
    margin-bottom: 0.25rem;

    @media (max-width: 400px) {
      font-size: 0.75rem;
      line-height: 1.3rem;
    }
  }

  p {
    font: ${({ theme }) => theme.font.paraph};
    color: ${({ theme }) => theme.palette.gray};

    @media (max-width: 400px) {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  margin: 2.25rem auto auto;

  img {
    @media (max-width: 760px) {
      width: 70%;
    }

    @media (max-width: 400px) {
      width: 50%;
    }
  }
`;
