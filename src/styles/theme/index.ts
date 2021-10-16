import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "0.3125rem",

  scales: {
    spacing: {
      sm: ".25rem",
      md: "0.875rem",
      lg: "1.875rem",
    },
  },

  palette: {
    bg: "#FAFBFD",
    contrast: "#111111",
    highlight: "#B0B0B0",

    red: "#EC5863",
    blue: "#4285F4",
    gray: "#616161",

    shadow: "rgba(0, 0, 0, 0.1)",
  },

  font: {
    title: "700 2.75rem /3.4rem Rubik",
    paraph: "400 0.75rem /1rem Rubik",
    buttonLabel: "800 0.625rem /0.75rem Rubik",
    navigationLabel: "700 0.75rem /1rem Raleway",
  },
};
