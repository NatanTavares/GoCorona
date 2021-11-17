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
`;

export const Legends = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.scales.spacing.sm};

  margin: ${({ theme }) => theme.scales.spacing.md} 0;
  padding: 0 ${({ theme }) => theme.scales.spacing.lg};

  text-align: center;

  p {
    margin-bottom: ${({ theme }) => theme.scales.spacing.sm};

    font: ${({ theme }) => theme.font.paraph};
    letter-spacing: 0.08em;

    color: ${({ theme }) => theme.palette.gray};

    a {
      font-weight: bold;
      color: ${({ theme }) => theme.palette.red};
    }
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

  > div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.scales.spacing.sm};

    height: 100%;
    margin-bottom: ${({ theme }) => theme.scales.spacing.md};
  }
`;

export const RememberWrapper = styled.div`
  margin: auto;
  margin-bottom: ${({ theme }) => theme.scales.spacing.md};
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
`;
