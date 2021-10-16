import styled from "styled-components";

type Props = {
  colorSchema: "red" | "blue";
};

export const Container = styled.button<Props>`
  padding: 0.875rem 1.875rem;

  border: none;
  border-radius: 0.3125rem;

  letter-spacing: 0.14em;
  font: ${({ theme }) => theme.font.buttonLabel};
  color: ${({ theme }) => theme.palette.bg};

  background: ${({ theme, colorSchema }) => {
    if (colorSchema === "red") {
      return theme.palette.red;
    }

    return theme.palette.blue;
  }};
`;
