import styled from "styled-components"

export const $Header = styled.header`
	border-bottom: 1px solid ${({ theme }) => theme.ui.color.default_50};
	padding: 25px 0;

	& > .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`
