import { createGlobalStyle } from "styled-components"

import { resetStyle } from "./reset"

export const GlobalStyle = createGlobalStyle`
	${resetStyle}

	body {
	background: rgb(62, 62, 62);
}
`
