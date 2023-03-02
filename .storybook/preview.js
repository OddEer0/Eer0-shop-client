import * as NextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from '../src/application/styles'
import { theme } from '../src/application/theme'

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
		Provider: RouterContext.Provider,
	},
}

const withStyledComponents = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story/>
  </ThemeProvider>
)

export const decorators = [withStyledComponents]
