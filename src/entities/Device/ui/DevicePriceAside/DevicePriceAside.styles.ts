import styled from "styled-components"

export const $Aside = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 15px;
	padding: 16px;
	width: 340px;
	height: auto;
	background: ${({ theme }) => theme.base.bg.primary_40};
	box-shadow: ${({ theme }) => theme.base.boxShadow.primary};

	& > .first {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: relative;
		margin-top: 15px;

		& > .price {
			display: inline-block;
			padding: 12px;
			background: ${({ theme }) => theme.ui.color.secondary_50};
			color: ${({ theme }) => theme.ui.text.secondary_50};
			border-radius: 10px;

			&.stock {
				text-decoration: line-through;
				background-color: transparent;
				opacity: 0.8;
				font-size: 20px;
			}
		}

		& > .stock-price {
			padding: 6px;
			border-radius: 7px;
			background: ${({ theme }) => theme.ui.color.secondary_50};
			color: ${({ theme }) => theme.ui.text.secondary_50};
		}
	}

	& > .second {
		margin-top: 10px;
		display: flex;
		width: 90%;
		justify-content: space-between;
	}

	& > .third {
		margin-top: 50px;
	}

	& > .fourth {
		margin-top: 20px;
	}

	& > .fifth {
		margin-top: 45px;
	}
`
