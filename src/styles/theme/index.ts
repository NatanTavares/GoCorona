import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: {
    sm: "5px",
    md: "8px",
    lg: "16px",
    xl: "30px",
  },

  scales: {
    boxSize: {
      sm: "18.75rem",
      md: "25rem",
      lg: "31.25rem",
    },

    spacing: {
      sm: "0.25rem",
      md: "0.875rem",
      lg: "1.875rem",
      xl: "4.375rem",
      xxl: "6.25rem",
    },
  },

  palette: {
    bg: {
      main: "#FAFBFD",
      secondary: "#FFFFFF",
    },
    contrast: "#111111",
    highlight: "#B0B0B0",

    red: "#EC5863",
    blue: "#4285F4",
    gray: "#616161",

    shadow: "rgba(0, 0, 0, 0.1)",
  },

  font: {
    title: "700 2.75rem /3.4rem Rubik",
    subtitle: "700 2.25rem /2.675rem Rubik",
    cardLabel: "700 1rem /1.9rem Rubik",
    paraph: "400 0.75rem /1rem Rubik",
    buttonLabel: "800 0.625rem /0.75rem Raleway",
    navigationLabel: "700 0.625rem /0.75rem Raleway",
  },
};
