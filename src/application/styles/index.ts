import { createGlobalStyle } from "styled-components"

import { globalStyle } from "./global"
import { libStyle } from "./lib"
import { resetStyle } from "./reset"

export const GlobalStyle = createGlobalStyle`
	${resetStyle}
	${libStyle}
	${globalStyle}

	html {
		scrollbar-width: thin;
		scrollbar-color: ${({ theme }) => theme.ui.color.primary_50} transparent;
	}

	body {
		background: ${({ theme }) => theme.base.bg.primary_50};
		color: ${({ theme }) => theme.base.text.primary_50};
		font-family: 'Inter', sans-serif;
		font-size: 18px;
		overflow-x: hidden;
	}

	#myportal {
		z-index: 1000;
		position: relative;
	}

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
  	background: transparent;
	}

	::-webkit-scrollbar-thumb {
  	background: ${({ theme }) => theme.ui.color.primary_50};
	}

	::-moz-range-thumb {
		background: ${({ theme }) => theme.ui.color.primary_50};
		border-radius: 20px;
	}
`
