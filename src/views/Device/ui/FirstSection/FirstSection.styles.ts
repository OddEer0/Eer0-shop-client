import styled from "styled-components"

export const $FirstSection = styled.section`
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

	& > .info {
		flex: 1;
		margin-top: 45px;
		margin-right: 15px;
		margin-left: 15px;

		.device-name {
			padding: 16px;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}

	.add-device-to-cart-icon {
		display: flex;
		margin-left: 10px;
		font-size: 26px;
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
`
