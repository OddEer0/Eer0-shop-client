import styled from "styled-components"

export const $Header = styled.header`
	position: sticky;
	z-index: 100;
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
			width: 32px;
			height: 32px;
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
