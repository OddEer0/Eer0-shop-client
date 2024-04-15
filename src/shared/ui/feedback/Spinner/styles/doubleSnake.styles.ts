import styled, { keyframes } from "styled-components"

const spin = keyframes`
	0%,
	100% {
		box-shadow: .2em 0px 0 0px currentcolor;
	}
	12% {
		box-shadow: .2em .2em 0 0 currentcolor;
	}
	25% {
		box-shadow: 0 .2em 0 0px currentcolor;
	}
	37% {
		box-shadow: -.2em .2em 0 0 currentcolor;
	}
	50% {
		box-shadow: -.2em 0 0 0 currentcolor;
	}
	62% {
		box-shadow: -.2em -.2em 0 0 currentcolor;
	}
	75% {
		box-shadow: 0px -.2em 0 0 currentcolor;
	}
	87% {
		box-shadow: .2em -.2em 0 0 currentcolor;
	}
`

export const DoubleSnakeSpinner = styled.div`
	transform: rotateZ(45deg);
	perspective: 1000px;
	border-radius: 50%;

	&::after,
	&::before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: inherit;
		height: inherit;
		border-radius: 50%;
		transform: rotateX(70deg);
		animation: 1s ${spin} linear infinite;
	}

	&::after {
		transform: rotateY(70deg);
		animation-delay: 0.4s;
	}

	&.xsmall {
		width: 32px;
		height: 32px;
	}

	&.small {
		width: 48px;
		height: 48px;
	}

	&.medium {
		width: 68px;
		height: 68px;
	}

	&.large {
		width: 96px;
		height: 96px;
	}

	&.primary {
		color: ${({ theme }) => theme.ui.color.primary_50};

		&::after {
			color: ${({ theme }) => theme.ui.randomColor[3]};
		}
	}

	&.secondary {
		color: ${({ theme }) => theme.ui.color.secondary_50};

		&::after {
			color: ${({ theme }) => theme.ui.randomColor[9]};
		}
	}

	&.tertiary {
		color: ${({ theme }) => theme.ui.color.tertiary_50};

		&::after {
			color: ${({ theme }) => theme.ui.randomColor[8]};
		}
	}

	&.quaternary {
		color: ${({ theme }) => theme.ui.color.quaternary_50};

		&::after {
			color: ${({ theme }) => theme.ui.randomColor[2]};
		}
	}
`
