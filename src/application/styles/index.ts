import { createGlobalStyle } from "styled-components"

import { datePickerLibStyles } from "./datePickerLib"
import { globalStyle } from "./global"
import { libSliderStyle } from "./lib"
import { resetStyle } from "./reset"
import { StyledToastifyLib } from "./toastify.lib"

export const GlobalStyle = createGlobalStyle`
	${resetStyle}
	${libSliderStyle}
	${datePickerLibStyles}
	${globalStyle}
	${StyledToastifyLib}

	html {
		scrollbar-width: thin;
		scrollbar-color: ${({ theme }) => theme.ui.color.primary_50} transparent;
		
	}

	html,
	body,
	#__next {
		width: 100%;
		height: 100%;
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
