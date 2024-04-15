import styled from "styled-components"

export const $DeviceView = styled.div`
	.first-section {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		& > .aside {
			height: 500px;
			margin-top: 20px;
		}

		.add-device-to-cart-button {
			display: flex;
			font-size: 18px;
			align-items: center;
			width: 100%;
		}

		.add-device-to-cart-icon {
			display: flex;
			margin-left: 10px;
			font-size: 26px;
		}

		.device-info-content {
			flex: 1;
			margin-top: 45px;
			margin-right: 15px;
			margin-left: 15px;
		}

		.favorite-button {
			display: flex;
			align-items: center;

			.toggle-btn-icon {
				font-size: 20px;
				margin-left: 10px;

				&.add {
					color: ${({ theme }) => theme.ui.color.secondary_50};
				}

				&.remove {
					color: ${({ theme }) => theme.ui.color.danger_50};
				}
			}
		}
	}
`
