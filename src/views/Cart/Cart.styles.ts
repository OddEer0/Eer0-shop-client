import styled from "styled-components"

export const $CartView = styled.div`
	& > .first-section {
		& > .container {
			display: flex;
			gap: 45px;
		}
	}

	.cart-view {
		&__list {
			width: 75%;
			min-width: 900px;
		}

		&__total {
			padding: 20px;
			background: ${({ theme }) => theme.base.bg.primary_40};
			border-radius: 15px;
			flex: 1;
			height: 220px;
		}
	}
`
