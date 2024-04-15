import styled from "styled-components"

import { StyledModal } from "./Modal.types"

export const $Modal = styled.div<StyledModal>`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	.modal-overlay {
		width: 100%;
		height: 100%;
		background: #00000026;
		position: absolute;
		top: 0;
		left: 0;
	}

	.modal-main {
		border-radius: 10px;
		position: relative;
		padding: 16px;
		background: ${({ theme, color }) => theme.ui.bg[`${color}_40`]};
	}
`
