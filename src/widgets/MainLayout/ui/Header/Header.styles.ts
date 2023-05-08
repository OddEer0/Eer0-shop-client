import styled from "styled-components"

import { ToggleThemeIcon } from "@/features/ThemeAction"

export const $Header = styled.header`
	position: sticky;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	user-select: none;
`

export const $ToggleThemeIcon = styled(ToggleThemeIcon)`
	height: 32px;
`

export const $FirstSection = styled.div`
	width: 100%;
	background: ${({ theme }) => theme.base.bg.tertiary_40};
	color: ${({ theme }) => theme.base.text.tertiary_40};

	& > .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 50px;

		& > .left-wrapper {
			flex: 1;
			display: flex;
			align-items: center;
		}

		& > .right-wrapper {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}
`

export const $SecondSection = styled.section`
	width: 100%;
	background: none;
	backdrop-filter: saturate(180%) blur(10px);
	& > .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60px;

		& > .right-wrapper {
			display: flex;
			align-items: center;
			margin-right: 2vw;

			button {
				margin-right: 35px;
				display: flex;
				align-items: center;

				.icon {
					margin-right: 8px;
					font-size: 20px;
				}
			}
		}
	}
`
