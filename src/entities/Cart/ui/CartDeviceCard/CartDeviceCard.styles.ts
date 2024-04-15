import styled from "styled-components"

export const $CartDeviceCard = styled.div`
	display: flex;
	align-items: center;
	width: 100%;

	.cart-device {
		&__content {
			display: flex;
			flex-direction: column;
			margin-left: 40px;
			flex: 1;
		}

		&__title {
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		&__price-section {
			margin-top: 25px;
			display: flex;
			align-items: center;
			gap: 15px;
			flex: 1;
		}

		&__price {
			background: ${({ theme }) => theme.ui.color.secondary_50};
			color: ${({ theme }) => theme.ui.text.secondary_50};
			padding: 5px 15px;
			border-radius: 15px;

			&.stock {
				background: transparent;
				color: ${({ theme }) => theme.ui.text.default_50};
				text-decoration: line-through;
			}
		}

		&__stock {
			background: ${({ theme }) => theme.ui.color.secondary_50};
			color: ${({ theme }) => theme.ui.text.secondary_50};
			padding: 5px 15px;
			margin: 0;
			border-radius: 15px;
		}

		&__features {
			margin-top: 20px;
			display: inline-flex;
			gap: 15px;
			align-items: center;
		}

		&__divider {
			display: inline-flex;
			width: 2px;
			height: 20px;
			background: ${({ theme }) => theme.ui.color.default_50};
		}

		&__counter {
			margin-left: 35px;
		}
	}
`
