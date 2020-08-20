import React from "react";

import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";

import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import themes from "../../styles/theme";

const theme: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={themes}>
      <ColorModeProvider value="dark">
        <EmotionThemeProvider theme={themes}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
};

export default theme;
