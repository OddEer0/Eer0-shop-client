import styled from "styled-components"

import { TextAreaStyledProps } from "./TextArea.types"

export const $TextArea = styled.div<TextAreaStyledProps>`
	display: inline-flex;
	flex-direction: column;
	position: relative;

	textarea {
		background: transparent;
		border: 1px solid ${({ theme }) => theme.ui.color.default_50};
		border-radius: 20px;
		padding: 12px;
		resize: none;

		&:hover {
			border-color: ${({ theme, color }) => theme.ui.color[`${color}_50`]};
		}

		&:focus {
			border-color: ${({ theme, color }) => theme.ui.color[`${color}_60`]};
			outline: none;
		}
	}

	.text-area {
		&__sub-text {
			position: absolute;
			top: calc(100% + 15px);
		}

		&__label {
			margin-left: 10px;
			margin-bottom: 5px;
			color: ${({ theme }) => theme.ui.color.default_50};
		}
	}
`
