import styled from "styled-components"

export const DropdownWrapper = styled.div`
	position: relative;
	display: inline-block;

	& > .dropdown {
		position: absolute;
		width: 100%;
		padding: 10px;
		visibility: hidden;
		opacity: 0;
		box-shadow: ${({ theme }) => theme.ui.boxShadow.primary};
		border-radius: 15px;
		transition: opacity 0.1s ease-in-out, visibility 0.2s ease-in-out;

		&.show {
			visibility: visible;
			opacity: 1;
			transform: translateY(0);
		}

		&.bottom {
			left: 50%;
			top: calc(100% + 10px);
			transform: translateX(-50%);
		}
		&.bottomLeft {
			left: -20%;
			top: calc(100% + 10px);
			transform: translateX(-50%);
		}
		&.bottomRight {
			left: 120%;
			top: calc(100% + 10px);
			transform: translateX(-50%);
		}
		&.top {
			left: 50%;
			bottom: calc(100% + 10px);
			transform: translateX(-50%);
		}
		&.topLeft {
			left: -20%;
			bottom: calc(100% + 10px);
			transform: translateX(-50%);
		}
		&.topRight {
			left: 120%;
			bottom: calc(100% + 15px);
			transform: translateX(-50%);
		}

		&.primary {
			background: ${({ theme }) => theme.ui.bg.primary};
		}
		&.secondary {
			background: ${({ theme }) => theme.ui.bg.secondary};
		}
		&.tertiary {
			background: ${({ theme }) => theme.ui.bg.tertiary};
		}
		&.quaternary {
			background: ${({ theme }) => theme.ui.bg.quaternary};
		}
	}
`
