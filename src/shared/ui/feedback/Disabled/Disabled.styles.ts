import styled from "styled-components"

import { DisabledStyledProps } from "./Disabled.types"

export const $Disabled = styled.div<DisabledStyledProps>`
	width: 100%;
	position: relative;
	display: inline-block;
	opacity: ${({ isdisabled }) => (isdisabled ? 0.5 : 1)};

	.disabled-overlay {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: ${({ isdisabled }) => (isdisabled ? 10 : -1)};
	}
`
