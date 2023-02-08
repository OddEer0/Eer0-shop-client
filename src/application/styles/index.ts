import { createGlobalStyle } from "styled-components"

import { resetStyle } from "./reset"

export const GlobalStyle = createGlobalStyle`
	${resetStyle}

	body {
		background: ${({ theme }) => theme.base.bg.primary_50};
		color: ${({ theme }) => theme.base.text.primary_50};
		font-family: 'Inter', sans-serif;
		font-size: 18px;
	}
`
