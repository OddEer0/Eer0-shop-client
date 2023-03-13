import styled from "styled-components"

import { StyledEmpty } from "./Empty.types"

export const $Empty = styled.div<StyledEmpty>`
	height: 0;
	width: ${({ width }) => width};
`
