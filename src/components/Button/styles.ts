import styled from "styled-components";

type Props = {
  colorSchema: "red" | "blue";
};

export const Container = styled.button<Props>`
  padding: ${({ theme }) => theme.scales.spacing.md} ${({ theme }) => theme.scales.spacing.lg};

  border: none;
  border-radius: ${({theme}) => theme.borderRadius.sm};

  letter-spacing: 0.14em;
  font: ${({ theme }) => theme.font.buttonLabel};
  color: ${({ theme }) => theme.palette.bg.main};

  background: ${({ theme, colorSchema }) => {
    if (colorSchema === "red") {
      return theme.palette.red;
    }

    return theme.palette.blue;
  }};
`;
