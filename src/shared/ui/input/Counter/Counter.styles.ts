import styled from "styled-components"

import { SizeFontSizeEnum, SizeHeightEnum, SizeWidthEnum, StyledCounterProps } from "./Counter.types"

export const $Counter = styled.div<StyledCounterProps>`
	display: inline-flex;
	width: 100%;
	max-width: ${({ size }) => SizeWidthEnum[size]}px;
	height: ${({ size }) => SizeHeightEnum[size]}px;
	border-radius: 10px;
	overflow: hidden;
	font-size: ${({ size }) => SizeFontSizeEnum[size]}px;

	.counter-btn {
		height: 100%;
		width: 25%;
		background: ${({ theme, color }) => theme.ui.color[`${color}_50`]};
		color: ${({ theme, color }) => theme.ui.text[`${color}_50`]};
	}

	.counter-input {
		width: 50%;
		height: 100%;
		background-color: transparent;
		text-align: center;
	}
`
