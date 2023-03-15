import styled from "styled-components"

export const $ToggleCartIcon = styled.div`
	cursor: pointer;
	font-size: 26px;

	.unchecked {
		color: ${({ theme }) => theme.ui.color.secondary_50};
	}
`
