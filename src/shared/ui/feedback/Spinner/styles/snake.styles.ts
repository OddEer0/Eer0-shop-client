import styled, { keyframes } from "styled-components"

const rotation = keyframes`
	0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const SnakeSpinner = styled.div`
	border-radius: 50%;
	display: inline-block;
	border-top-style: solid;
	border-right: 3px solid transparent;
	box-sizing: border-box;
	animation: ${rotation} 1s linear infinite;

	&.xsmall {
		width: 32px;
		height: 32px;
		border-top-width: 2px;
	}

	&.small {
		width: 48px;
		height: 48px;
		border-top-width: 3px;
	}

	&.medium {
		width: 68px;
		height: 68px;
		border-top-width: 5px;
	}

	&.large {
		width: 96px;
		height: 96px;
		border-top-width: 7px;
	}

	&.primary {
		color: ${({ theme }) => theme.ui.color.primary_50};
	}

	&.secondary {
		color: ${({ theme }) => theme.ui.color.secondary_50};
	}

	&.tertiary {
		color: ${({ theme }) => theme.ui.color.tertiary_50};
	}

	&.quaternary {
		color: ${({ theme }) => theme.ui.color.quaternary_50};
	}
`
