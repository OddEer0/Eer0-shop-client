import styled from "styled-components"

import { SizeBaseEnum, SizeHandleEnum, StyledSliderProps } from "./Slider.types"

export const $Slider = styled.div<StyledSliderProps>`
	max-width: 500px;
	.noUi-target {
		background: ${({ theme, color }) => theme.ui.color[`${color}_50`]}66;
		border: none;
		box-shadow: none;

		&.noUi-horizontal {
			height: ${({ size }) => SizeBaseEnum[size]}px;
		}
		&.noUi-vertical {
			width: ${({ size }) => SizeBaseEnum[size]}px;
		}
	}

	.noUi-connects {
		border-radius: 15px;
	}

	.noUi-handle {
		border-radius: 50%;
		box-shadow: none;
		cursor: pointer;
		border: none;
		padding: 6px;
		background: transparent;
		transition: background 0.3s ease-in-out, padding 0.15s ease-in-out;

		&:hover {
			background: ${({ theme, color }) => theme.ui.color[`${color}_50`]}26;
		}

		&:active {
			background: ${({ theme, color }) => theme.ui.color[`${color}_50`]}26;
			padding: 12px;
		}

		&::after,
		&::before {
			content: none;
		}

		.noUi-touch-area {
			background: red;
			border-radius: 50%;
			background: ${({ theme, color }) => theme.ui.color[`${color}_50`]};
		}
	}

	.noUi-connect {
		background: ${({ theme, color }) => theme.ui.color[`${color}_50`]};
	}

	.noUi-horizontal,
	.noUi-vertical {
		.noUi-handle {
			width: auto;
			height: auto;
			right: 0;
			top: 0;
			transform: translate(50%, calc(-50% + ${({ size }) => SizeBaseEnum[size] / 2}px));
			.noUi-touch-area {
				width: ${({ size }) => SizeHandleEnum[size]}px;
				height: ${({ size }) => SizeHandleEnum[size]}px;
			}
			.noUi-tooltip {
				background: ${({ theme, color }) => theme.ui.color[`${color}_50`]};
				color: ${({ theme, color }) => theme.ui.text[`${color}_50`]};
				opacity: 0;
				border-radius: 30px;
				transition: opacity 0.3s ease-in-out;
			}

			&:hover {
				.noUi-tooltip {
					opacity: 1;
				}
			}
		}
	}
`
