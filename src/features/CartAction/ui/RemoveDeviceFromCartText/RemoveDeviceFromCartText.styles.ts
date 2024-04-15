import styled from "styled-components"

export const $RemoveDeviceFromCartText = styled.p`
	color: ${({ theme }) => theme.ui.color.danger_30};
	cursor: pointer;
	padding: 5px 15px;
	border-radius: 15px;
	transition: background 0.3s ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.ui.color.danger_20};
		background: ${({ theme }) => theme.ui.color.danger_30}36;
	}
`
