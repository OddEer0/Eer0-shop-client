import styled from "styled-components"

import { FontSizeEnum, SizeEnum, StyledPaginationProps } from "./Pagination.types"

export const $PaginationWrapper = styled.nav<StyledPaginationProps>`
	ul {
		display: inline-flex;

		li:not(:last-child) {
			margin-right: 10px;
		}

		li {
			width: ${({ size }) => SizeEnum[size]};
			height: ${({ size }) => SizeEnum[size]};
			font-size: ${({ size }) => FontSizeEnum[size]};
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: ${({ variant }) => (variant !== "rounded" ? "50%" : "10px")};
			position: relative;
			transition: background 0.3s ease-in-out;

			&.disable {
				opacity: 0.5;
			}

			.pagination-bg {
				background: ${({ theme, color }) => theme.ui.color[`${color}_50`]};
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-radius: ${({ variant }) => (variant !== "rounded" ? "50%" : "10px")};
				transition: background 0.3s ease-in-out;
				border: ${({ variant, theme, color }) =>
					variant !== "standard" ? "2px solid" + theme.ui.color[`${color}_40`] : "none"};

				& ~ button {
					color: ${({ theme, color }) => theme.ui.text[`${color}_50`]};
					border: none;
				}
			}

			button {
				position: relative;
				width: 100%;
				height: 100%;
				border-radius: ${({ variant }) => (variant !== "rounded" ? "50%" : "10px")};
				border: ${({ variant, theme }) => (variant !== "standard" ? "2px solid" + theme.ui.color.default_50 : "none")};
			}

			&.pagination-li:hover {
				background: ${({ theme, color }) => theme.ui.color[`${color}_50`]}26;

				.pagination-bg {
					background: ${({ theme, color }) => theme.ui.color[`${color}_60`]};
				}
			}
		}
	}

	.pagination-count-body {
		display: flex;
	}
`
