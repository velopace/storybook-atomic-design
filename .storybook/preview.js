import { ThemeProvider } from "styled-components";

import themeDefault from "../src/components/particles/themeDefault";
import GlobalStyles from "../src/components/particles/globalStyles";
import ApolloWrapper from "../src/components/particles/apollo/provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ApolloWrapper>
      <ThemeProvider theme={themeDefault}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </ApolloWrapper>
  ),
];
