import styled from "styled-components"

export const $Header = styled.header`
	position: sticky;
	z-index: 1000;
	top: 0;
	left: 0;
	width: 100%;
	background: none;
	backdrop-filter: saturate(180%) blur(10px);
`

export const $FirstSection = styled.section`
	padding: 0 15px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.header {
		&__menu-icon {
			font-size: 32px;
			cursor: pointer;
			margin-right: 25px;
		}
		&__left,
		&__right {
			flex: 1;
			display: flex;
			align-items: center;
		}
		&__right {
			justify-content: end;
		}
		&__contact {
			display: inline-block;
			font-weight: 600;
			margin-left: 6vw;
		}
		&__category {
			display: flex;
			align-items: center;
		}
		&__category-icon {
			font-size: 24px;
			margin-right: 10px;
			margin-left: -26px;
		}
		&__search {
			margin-right: 35px;
		}
	}
`

export const $SecondSection = styled.section`
	padding: 0 15px;
	height: 75px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.nav {
		&__list {
			display: flex;
			height: 100%;
		}

		&__link {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 45px;
			border-radius: 12px;

			&--active {
				background: ${({ theme }) => theme.base.bg.quaternary_50};
				color: ${({ theme }) => theme.base.text.secondary_50};
			}
			&:not(:last-child) {
				margin-right: 15px;
			}
		}
	}
`
