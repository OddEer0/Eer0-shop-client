import styled from "styled-components"

export const $ToggleFavoriteIcon = styled.div`
	cursor: pointer;
	font-size: 26px;
	color: ${({ theme }) => theme.ui.color.default_30};

	.checked {
		color: ${({ theme }) => theme.ui.color.danger_50};
	}
`
