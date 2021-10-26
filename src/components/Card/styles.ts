import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 18rem;
  height: 18rem;

  background: ${(props) => props.theme.palette.bg.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 18px ${({ theme }) => theme.palette.shadow};
`;

export const Content = styled.div`
  padding: 0 1rem 2.5rem;
  text-align: center;
  letter-spacing: 0.08em;

  h2 {
    font: ${({ theme }) => theme.font.cardLabel};
    margin-bottom: 4px;
  }

  p {
    font: ${({ theme }) => theme.font.paraph};
    color: ${({ theme }) => theme.palette.gray};
  }
`;

export const ImageWrapper = styled.div`
  margin: 2.25rem auto 3.625rem;
  scale: 1.2;
`;
