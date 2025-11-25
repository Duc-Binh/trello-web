// import { createTheme, useColorScheme } from "@mui/material/styles";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// import { red } from "@mui/material/colors";
// import { light } from "@mui/material/styles/createPalette";
// import { Mail, Palette } from "@mui/icons-material";
import { teal, deepOrange, cyan, orange } from "@mui/material/colors";

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: "48px",
    boardBarHeight: "58px",
  },

  colorScheme: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
});

// const theme = extendTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         primary: {
//           main: teal[500],
//         },
//         secondary: {
//           main: deepOrange[500],
//         },
//       },
//     },
//     dark: {
//       palette: {
//         primary: {
//           main: cyan[500],
//         },
//         secondary: {
//           main: orange[500],
//         },
//       },
//     },
//   },
// });

export default theme;
