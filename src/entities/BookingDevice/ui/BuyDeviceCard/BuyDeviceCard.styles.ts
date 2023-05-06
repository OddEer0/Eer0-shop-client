import styled from "styled-components"

export const $BuyDeviceCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		border-radius: 15px;
		width: 300px;
		height: 200px;
	}

	p {
		margin-top: 15px;
		color: ${({ theme }) => theme.ui.color.default_50};
	}
`
