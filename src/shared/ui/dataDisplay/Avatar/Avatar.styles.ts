import styled from "styled-components"

import { EnumType } from "./Avatar.types"

interface StyledProps {
	randomColor: Nullable<EnumType>
}

export const AvatarWrapper = styled.div<StyledProps>`
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	font-weight: 700;
	user-select: none;
	background: ${({ theme, randomColor }) =>
		randomColor ? theme.ui.randomColor[randomColor] : theme.ui.color.default_40};

	&.circle {
		border-radius: 50%;
	}

	&.rounded {
		border-radius: 15px;
	}

	&.square {
		border-radius: none;
	}

	&.xxsmall {
		width: 32px;
		height: 32px;
		font-size: 12px;
	}

	&.xsmall {
		width: 40px;
		height: 40px;
		font-size: 16px;
	}

	&.small {
		width: 48px;
		height: 48px;
		font-size: 20px;
	}

	&.medium {
		width: 56px;
		height: 56px;
		font-size: 22px;
	}

	&.large {
		width: 64px;
		height: 64px;
		font-size: 26px;
	}

	&.xlarge {
		width: 72px;
		height: 72px;
		font-size: 30px;
	}

	input {
		visibility: hidden;
		opacity: 0;
		position: absolute;
	}

	.photo {
		position: absolute;
		opacity: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.2);
		cursor: pointer;
		transition: opacity 0.2s ease-in-out;
		color: #ffffff;
	}

	&:hover .photo {
		opacity: 1;
	}
`
