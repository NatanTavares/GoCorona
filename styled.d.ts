import "styled-components";

type IPlatte = {
  main: string;
  contrast: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    scales: {
      boxSize: {
        sm: string;
        md: string;
        lg: string;
      };

      spacing: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
    };

    palette: {
      bg: {
        main: string;
        secondary: string;
      };

      contrast: string;
      highlight: string;

      red: string;
      blue: string;
      gray: string;

      shadow: string;
    };

    font: {
      title: string;
      subtitle: string;
      paraph: string;
      buttonLabel: string;
      navigationLabel: string;
    };
  }
}
