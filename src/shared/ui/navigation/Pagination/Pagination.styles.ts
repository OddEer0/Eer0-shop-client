import styled from "styled-components"

import { FontSizeEnum, SizeEnum, StyledPaginationProps } from "./Pagination.types"

export const $Pagination = styled.div<StyledPaginationProps>`
	display: inline-block;

	.pagination {
		display: inline-flex;
		align-items: center;
		gap: 5px;

		li {
			border-radius: ${({ variant }) => (variant !== "rounded" ? "50%" : "10px")};
			border: ${({ variant, color, theme }) =>
				variant !== "standard" ? `2px solid ${theme.ui.color[`${color}_50`]}` : "none"};
			cursor: pointer;
			width: ${({ size }) => SizeEnum[size]}px;
			height: ${({ size }) => SizeEnum[size]}px;
			font-size: ${({ size }) => FontSizeEnum[size]}px;
			transition: all 0.3s ease-in-out;
			user-select: none;

			a {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			&:hover {
				background: ${({ theme, color }) => theme.ui.color[`${color}_50`]}26;
			}

			&.selected {
				background: ${({ theme, color }) => theme.ui.color[`${color}_50`]}${({ variant }) => (variant !== "standard" ? "76" : "")};
				color: ${({ theme, color }) => theme.ui.text[`${color}_50`]};

				&:hover {
					background: ${({ theme, color }) => theme.ui.color[`${color}_60`]}${({ variant }) => (variant !== "standard" ? "86" : "")};
				}
			}

			&.previous,
			&.next {
				&.disabled {
					opacity: 0.5;
				}
			}
		}
	}
`
