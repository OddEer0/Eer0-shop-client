import styled from "styled-components"

import { SizeHeightEnum, SizeWidthEnum, StyledSelectProps } from "./Select.types"

const PREFIX = "eer0-select"

export const $Select = styled.div<StyledSelectProps>`
	position: inline-block;
	max-width: ${({ selectSize }) => SizeWidthEnum[selectSize]}px;
	width: 100%;

	.eer0-select {
		width: 100%;

		&__control {
			border-color: ${({ theme }) => theme.ui.color.default_50};
			border-width: 2px;
			border-radius: 10px;
			box-shadow: none;
			background-color: transparent;
			transition: all 0.3s ease-in-out;
			height ${({ selectSize }) => SizeHeightEnum[selectSize]}px;


			&:hover {
				border-color: ${({ theme, selectColor }) => theme.ui.color[`${selectColor}_50`]};

				& .${PREFIX}__indicator-separator {
					background: ${({ theme, selectColor }) => theme.ui.color[`${selectColor}_50`]};
				}
			}

			&--menu-is-open {
				.${PREFIX}__indicator {
					color: ${({ theme }) => theme.ui.color.default_70};
					transform: rotate(-180deg);
				}

				.${PREFIX}__indicator-separator {
					background: ${({ theme, selectColor }) => theme.ui.color[`${selectColor}_50`]};
				}
			}

			&--is-focused {
				border-color: ${({ theme, selectColor }) => theme.ui.color[`${selectColor}_50`]};

				.${PREFIX}__indicator-separator {
					background: ${({ theme, selectColor }) => theme.ui.color[`${selectColor}_50`]};
				}

				.${PREFIX}__indicator {
					color: ${({ theme, selectColor }) => theme.ui.color[`${selectColor}_50`]};
				}
			}
		}

		&__indicator {
			transition: all 0.3s ease-in-out;
		}

		&__indicator-separator {
			background-color: ${({ theme }) => theme.ui.color.default_50};
			transition: all 0.3s ease-in-out;
			width: 2px;
		}

		&__placeholder {
			color: ${({ theme }) => theme.ui.color.default_50};
		}

		&__menu-container {
			position: absolute;
			overflow: hidden;
			top: 100%;
			width: 100%;
			box-shadow: ${({ theme }) => theme.ui.boxShadow.primary};
			border-radius: 10px;
			margin-top: 10px;
		}

		&__menu {
			position: relative;
			top: 0;
			box-shadow: none;
			background: ${({ theme, menuBgColor }) => theme.ui.bg[`${menuBgColor}_40`]};
			transition: transform 0.3s ease-in-out;
			padding: 0;
			margin: 0;
		}

		&__menu-list {
			padding: 6px 0;
		}

		&__option {
			transition: all 0.3s ease-in-out;
			border-radius: 5px;

			&--is-focused {
				background: ${({ theme, selectColor }) => theme.ui.color[`${selectColor}_50`]}26;
			}

			&--is-selected {
				background: ${({ theme, selectColor }) => theme.ui.color[`${selectColor}_50`]};
				color: ${({ theme, selectColor }) => theme.ui.text[`${selectColor}_50`]};
			}
		}
	}
`
