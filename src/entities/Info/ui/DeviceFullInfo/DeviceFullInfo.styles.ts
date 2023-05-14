import styled from "styled-components"

export const $DeviceFullInfo = styled.div`
	.device-info-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		padding: 16px;

		.info-row {
			display: flex;
			align-items: center;
			gap: 20px;
			justify-content: space-between;
			width: 40%;

			h5 {
				color: ${({ theme }) => theme.ui.color.default_50};
			}

			&:not(:last-child) {
				margin-bottom: 20px;
			}
		}
	}
`
