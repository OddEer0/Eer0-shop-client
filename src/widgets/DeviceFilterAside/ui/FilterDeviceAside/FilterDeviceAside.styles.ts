import styled from "styled-components"

export const $FilterDeviceAside = styled.aside`
	width: 100%;
	max-width: 340px;
	max-height: 1280px;

	& .scroll {
		max-width: 340px;
		max-height: calc(95vh - 110px);
		position: sticky;
		top: 0;

		.simplebar-content-wrapper {
			border-radius: 10px;
		}

		.simplebar-track.simplebar-vertical {
			.simplebar-scrollbar::before {
				background: ${({ theme }) => theme.ui.color.primary_50};
			}
		}
	}

	& .sidebar {
		width: 100%;
		max-width: 340px;
		min-height: 720px;
		padding: 15px 20px;
		background: ${({ theme }) => theme.base.bg.primary_40};

		.h2 {
			text-align: center;
			margin: 15px 0;
		}

		.filter-accordion {
			width: 100%;

			h4 {
				font-size: 20px;
				font-weight: 700;
			}
		}

		.filter-summary {
			padding: 15px 0;
			&:not(:first-child) {
				margin-top: 12px;
			}

			.accordion-summary-header {
				padding: 0;
			}

			.accordion-summary-body {
				padding: 0;
			}
		}
	}
`
