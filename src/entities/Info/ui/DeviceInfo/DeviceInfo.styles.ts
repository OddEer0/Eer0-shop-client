import styled from "styled-components"

export const $DeviceInfo = styled.div`
	.device-info-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: 16px;

		.info-row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;

			h5 {
				color: ${({ theme }) => theme.ui.color.default_50};
			}

			&:not(:last-child) {
				margin-bottom: 20px;
			}
		}
	}
`
