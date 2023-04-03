import styled from "styled-components"

export const $ProfileAsideNav = styled.ul`
	width: 100%;

	li {
		padding: 10px 0;
		position: relative;

		a {
			position: relative;
			width: 100%;
			padding: 10px 15px;
			border-radius: 15px;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.default_50}36;
			}
		}

		h4 {
			position: relative;
			z-index: 1;
		}

		span {
			z-index: 0;
			position: absolute;
			border-radius: 15px;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: ${({ theme }) => theme.ui.color.primary_50};

			& ~ h4 {
				color: ${({ theme }) => theme.ui.text.primary_50};
			}
		}

		&:hover {
			span {
				background: ${({ theme }) => theme.ui.color.primary_60};
			}
		}
	}
`
