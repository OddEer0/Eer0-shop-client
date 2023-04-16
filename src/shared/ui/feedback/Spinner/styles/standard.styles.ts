import styled, { keyframes } from "styled-components"

const rotate = keyframes`
	100%   {transform: rotate(360deg)}
`

const prixClipFix = keyframes`
	0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
  25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
  50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
  75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
	100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
`

export const StandardSpinner = styled.div`
	border-radius: 50%;
	position: relative;
	animation: ${rotate} 1s linear infinite;

	&::before {
		content: "";
		box-sizing: border-box;
		position: absolute;
		inset: 0px;
		border-radius: 50%;

		border-style: solid;
		animation: ${prixClipFix} 2s linear infinite;
	}

	&.xsmall {
		width: 32px;
		height: 32px;
		&::before {
			border-width: 3px;
		}
	}

	&.small {
		width: 48px;
		height: 48px;
		&::before {
			border-width: 5px;
		}
	}
	&.medium {
		width: 68px;
		height: 68px;
		&::before {
			border-width: 7px;
		}
	}
	&.large {
		width: 96px;
		height: 96px;
		&::before {
			border-width: 8px;
		}
	}

	&.primary {
		&::before {
			border-color: ${({ theme }) => theme.ui.color.primary_50};
		}
	}

	&.secondary {
		&::before {
			border-color: ${({ theme }) => theme.ui.color.secondary_50};
		}
	}

	&.tertiary {
		&::before {
			border-color: ${({ theme }) => theme.ui.color.tertiary_50};
		}
	}

	&.quaternary {
		&::before {
			border-color: ${({ theme }) => theme.ui.color.quaternary_50};
		}
	}
`
