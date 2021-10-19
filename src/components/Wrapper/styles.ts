import styled from "styled-components";

type ContainerProps = {
  size: "small" | "medium" | "large";
};

export const Container = styled.div<ContainerProps>`
  max-width: ${({ size, theme }) => {
    if (size === "small") {
      return theme.scales.boxSize.sm;
    }

    if (size === "medium") {
      return theme.scales.boxSize.md;
    }

    return theme.scales.boxSize.lg;
  }};
`;
