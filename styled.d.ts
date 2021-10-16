import "styled-components";

type IPlatte = {
  main: string;
  contrast: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    scales: {
      spacing: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };

    palette: {
      bg: string;
      contrast: string;
      highlight: srting;

      red: string;
      blue: string;
      gray: string;

      shadow: string;
    };

    font: {
      title: string;
      paraph: string;
      buttonLabel: string;
      navigationLabel: string;
    };
  }
}
