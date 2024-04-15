import styled from "styled-components"

export const $BuyMethod = styled.div`
	background: ${({ theme }) => theme.base.bg.primary_40};
	padding: 25px;
	border-radius: 15px;

	& > .title {
	}

	& > .method__list {
		display: flex;
		gap: 25px;
		margin-top: 25px;

		li {
			width: 150px;
			height: 100px;
			cursor: pointer;
			transition: all 0.3s ease-in-out;
			position: relative;

			&.active {
				box-shadow: 4px 4px 10px ${({ theme }) => theme.ui.color.secondary_50};
				border-radius: 15px;
			}

			.underline {
				position: absolute;
				left: 0;
				top: calc(100% + 10px);
				border-radius: 5px;
				width: 100%;
				height: 3px;
				background: ${({ theme }) => theme.ui.color.secondary_50};
			}
		}

		img {
			width: 150px;
			height: 100px;
			border-radius: 15px;
			border: 1px solid ${({ theme }) => theme.ui.color.default_20};
		}
	}
`
