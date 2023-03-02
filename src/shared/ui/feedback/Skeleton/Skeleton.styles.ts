import styled, { keyframes } from "styled-components"

import { StyledSkeletonType } from "./Skeleton.types"

const shimmer = keyframes`
	100% {
		transform: translateX(100%);
	}
`

export const SquareSkeleton = styled.div<StyledSkeletonType>`
	display: inline-block;
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	max-width: ${({ maxWidth }) => maxWidth};
	max-height: ${({ maxHeight }) => maxHeight};
	min-width: ${({ minWidth }) => minWidth};
	min-height: ${({ minHeight }) => minHeight};
	position: relative;
	overflow: hidden;
	background-color: ${({ theme, background }) => background || theme.ui.color.default_50}3d;

	&::after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transform: translateX(-100%);
		background-image: linear-gradient(
			to left,
			transparent,
			${({ theme, animateBackground }) => animateBackground || theme.base.bg.primary_50}7d,
			transparent
		);
		animation: ${shimmer} 1.5s infinite;
		content: "";
	}
`

export const RoundedSkeleton = styled(SquareSkeleton)`
	border-radius: 15px;
`

export const CircleSkeleton = styled(SquareSkeleton)`
	border-radius: 50%;
`
