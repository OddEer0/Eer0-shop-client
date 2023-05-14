import styled from "styled-components"

export const $Footer = styled.footer`
	background: ${({ theme }) => theme.base.bg.tertiary_40};
	color: ${({ theme }) => theme.base.text.tertiary_40};
	margin-top: 30px;

	.container {
		display: flex;
		padding: 20px;
		justify-content: space-around;

		li {
			margin-top: 15px;
			transition: all 0.3s ease-in-out;

			&:hover {
				color: ${({ theme }) => theme.ui.color.primary_50};
			}
		}
	}
`
