import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  header {
    position: relative;

    h3 {
      font: ${({ theme }) => theme.font.subtitle};
      margin-bottom: ${({ theme }) => theme.scales.spacing.sm};
    }
  }

  p {
    font: ${({ theme }) => theme.font.paraph};
    letter-spacing: 0.08em;
    margin-bottom: ${({ theme }) => theme.scales.spacing.sm};
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.scales.spacing.sm};

  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  background: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  transition: background-color 0.2s;

  :hover {
    background: ${({ theme }) => theme.palette.bg.main};
  }
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  margin-top: ${({ theme }) => theme.scales.spacing.md};

  > div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.scales.spacing.md};

    height: 100%;

    margin: ${({ theme }) => theme.scales.spacing.sm};
  }
`;
